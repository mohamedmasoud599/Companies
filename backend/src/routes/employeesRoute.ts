import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  postEmployee,
  tempExemptions,
  getExpiredIDs,
  getUnlisted,
  getUnderage,
} from "../controllers/employeeController";
// import { protect, protectAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getEmployees);

router.get("/tempexemptions", tempExemptions);

router.get("/expiredids", getExpiredIDs);

router.get("/unlisted", getUnlisted);

router.get("/underage", getUnderage);

router.get("/:id", getEmployee);

router.post("/", postEmployee);

export default router;
