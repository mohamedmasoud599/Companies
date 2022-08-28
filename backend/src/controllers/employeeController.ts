import { Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import { Employee, validateEmployee } from "../models/employeeModel";
import { parse, differenceInCalendarYears } from "date-fns";
import base64Img from "base64-img";

//@desc  GET employees
//@route GET /api/employees
//@access Private
const getEmployees = AsyncHandler(async (req: Request, res: Response) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
});

//@desc GET single employee
//@route GET /api/employees/[id]
//@access Private
const getEmployee = AsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (employee) {
    res.status(200).json(employee);
  } else res.status(404).json({ message: "employee not found" });
});

//@desc  POST employee
//@route POST /api/employees
//@access Private
const postEmployee = AsyncHandler(async (req: Request, res: Response) => {
  await validateEmployee(req.body);

  const {
    companyName,
    fileNo,
    name,
    tripleBirth,
    tripleCenter,
    tripleSerial,
    dob,
    oldID,
    newID,
    IDexpiration,
    recruitment,
    governorate,
    phoneNumber,
    endOfPostment,
    documents,
  } = req.body;

  //upload imgs
  const imgsPaths: string[] = [];
  if (documents) {
    for (const img of documents) {
      const filePath = base64Img.imgSync(
        img,
        `public/pictures/${newID}/`,
        Date.now()
      );
      console.log(filePath);
      imgsPaths.push(filePath.split("public")[1]);
    }
  }

  const decisionDocument = await Employee.create({
    companyName,
    fileNo,
    name,
    tripleBirth,
    tripleCenter,
    tripleSerial,
    dob,
    oldID,
    newID,
    IDexpiration,
    governorate,
    recruitment,
    phoneNumber,
    endOfPostment,
    documents: imgsPaths,
  });

  res.status(200).json(decisionDocument);
});

//@desc  GET temporary exemptions status
//@route GET /api/employees/tempexemptions
//@access Private
const tempExemptions = AsyncHandler(async (req: Request, res: Response) => {
  const employees = await Employee.find({
    recruitment: "إعفاء مؤقت",
  });
  const situations: object[] = [];
  employees.forEach((employee) => {
    //check if emp has end postment date.
    if (employee.endOfPostment) {
      //check if it's out of date.
      const currentDate = new Date();
      const endDate = parse(employee.endOfPostment, "dd-MM-yyyy", new Date());
      if (currentDate > endDate)
        situations.push({
          employee,
          msg: "نهاية صلاحية الشهادة ",
        });
    } else {
      //check if emp reached 29 or not
      const currentDate = new Date();
      const birthDate = parse(employee.dob, "dd-MM-yyyy", new Date());
      const age = differenceInCalendarYears(currentDate, birthDate);
      if (age >= 29) {
        situations.push({
          employee,
          msg: "تجاوز 29 عام",
        });
      }
    }
  });
  res.status(200).json(situations);
});

//@desc  GET expired IDs
//@route GET /api/employees/expiredids
//@access Private
const getExpiredIDs = AsyncHandler(async (req: Request, res: Response) => {
  const employees = await Employee.find();
  const situations: object[] = [];
  employees.forEach((employee) => {
    const currentDate = new Date();
    const endDate = parse(employee.IDexpiration, "dd-MM-yyyy", new Date());
    if (currentDate > endDate)
      situations.push({
        employee,
        msg: "بطاقة غير  سارية",
      });
  });
  res.status(200).json(situations);
});

//@desc GET unlisted employee
//@route GET /api/employees/unlisted
//@access Private
const getUnlisted = AsyncHandler(async (req: Request, res: Response) => {
  const employees = await Employee.find({
    recruitment: "ليس له موقف",
  });
  res.status(200).json(employees);
});

//@desc GET underage employees
//@route GET /api/employees/underage
//@access Private
const getUnderage = AsyncHandler(async (req: Request, res: Response) => {
  const employees = await Employee.find({});
  const situations: object[] = [];
  employees.forEach((employee) => {
    const currentDate = new Date();
    const birthDate = parse(employee.dob, "dd-MM-yyyy", new Date());
    const age = differenceInCalendarYears(currentDate, birthDate);
    if (age < 21) {
      situations.push(employee);
    }
  });
  res.status(200).json(situations);
});

export {
  getEmployees,
  getEmployee,
  postEmployee,
  tempExemptions,
  getExpiredIDs,
  getUnlisted,
  getUnderage,
};
