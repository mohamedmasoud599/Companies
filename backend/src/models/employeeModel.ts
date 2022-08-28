import { Schema, model, Document, Model } from "mongoose";
import Joi from "joi";

interface IEmployee extends Document {
  companyName: string;
  fileNo: number;
  name: string;
  tripleBirth: number;
  tripleCenter: number;
  tripleSerial: number;
  dob: string;
  oldID: number;
  newID: number;
  IDexpiration: string;
  governorate: string;
  recruitment:
    | "إعفاء مؤقت"
    | "إعفاء نهائي"
    | "تحت الطلب"
    | "لم يصبه الدور"
    | "أدي الخدمة"
    | "خطاب لتجديد موقف"
    | "مجند"
    | "صغار السن"
    | "ليس له موقف";
  phoneNumber: number;
  endOfPostment: string;
  documents: string[];
}

const validateEmployee = (body: object) => {
  const joiSchema = Joi.object({
    companyName: Joi.string().required(),
    fileNo: Joi.number().required(),
    name: Joi.string().required(),
    tripleBirth: Joi.number().required(),
    tripleCenter: Joi.number().required(),
    tripleSerial: Joi.number().required(),
    dob: Joi.string().required(),
    oldID: Joi.number(),
    newID: Joi.number().required(),
    IDexpiration: Joi.string().required(),
    governorate: Joi.string().required(),
    recruitment: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    endOfPostment: Joi.string(),
    documents: Joi.array().required(),
  });
  return joiSchema.validateAsync(body);
};

const employeeSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    fileNo: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tripleBirth: {
      type: Number,
      required: true,
    },
    tripleCenter: {
      type: Number,
      required: true,
    },
    tripleSerial: {
      type: Number,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    oldID: {
      type: Number,
    },
    newID: {
      type: Number,
      required: true,
    },
    IDexpiration: {
      type: String,
      required: true,
    },
    governorate: {
      type: String,
      required: true,
    },
    recruitment: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    endOfPostment: {
      type: String,
    },
    documents: {
      type: Array,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Employee: Model<IEmployee> = model("Employee", employeeSchema);

export { Employee, validateEmployee };
