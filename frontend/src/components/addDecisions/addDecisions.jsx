// import React from "react";
// import { Layout, Typography, Row, Select, Input, Col } from "antd";
// const { Content } = Layout;
// const { Title } = Typography;
// const addDecisions = () => {
//   return (
//     <Layout>
//       <Content
//         className="site-layout"
//         style={{ padding: "0 50px", marginTop: 64 }}
//       >
//         <Title
//           level={1}
//           style={{ textAlign: "center", padding: "40px 0 40px" }}
//         >
//           تسجيل قرار وزارى جديد
//         </Title>
//       </Content>
//     </Layout>
//   );
// };

// export default addDecisions;

import { useState } from "react";
import { Input, FormItem, Select } from "formik-antd";
import { Col } from "antd";
import * as yup from "yup";

import { Create } from "../common/actions";
import ToastHandling from "../common/toastify";

import Common from "../Register/common";
import ImageUpload from "../common/imageupload";
import "./style.css";

const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const AddDecisions = () => {
  const [fileList, setFileList] = useState([]);
  const initialValues = {
    fileNo: "",
    name: "",

    tripleBirth: "",
    tripleCenter: "",
    tripleSerial: "",
    dob: "",
    // oldID: "",
    // newID: "",
    governorate: "",
    phoneNumber: "",
    endOfPostment: "",

    documents: [],
  };
  const validationSchema = () =>
    yup.object({
      fileNo: yup.string("ادخل رقم الملف ").required("مطلوب"),
      name: yup.string("الرجاء ادخال الاسم").required("مطلوب"),

      tripleBirth: yup.string("ادخل الميلاد ").required("مطلوب"),
      tripleCenter: yup.string("ادخل  المركز").required("مطلوب"),
      tripleSerial: yup.string("ادخل  الرقم الثلاثى").required("مطلوب"),
      dob: yup.string("ادخل  تاريخ الميلاد").required("مطلوب"),
      governorate: yup.string("ادخل المحافظه").required("مطلوب"),
      endOfPostment: yup.string("ادخل تاريخ امد الاعفاء"),
      phoneNumber: yup.string("ادخل رقم الهاتف").required("مطلوب"),
      newID: yup.number("ادخل رقم البطاقه الحديث"),
      oldID: yup.number("ادخل رقم البطاقه القديم"),
    });

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    let base64list = [];
    for (let file of fileList) {
      let durl = await getBase64(file.originFileObj);
      base64list.push(durl);
    }
    console.log(base64list);
    values.documents = base64list;
    Create("/employees", values).then((res) => {
      if (res) {
        ToastHandling("success", "تم التسجيل  بنجاح");
        resetForm({});
        setFileList([]);
      } else {
        setSubmitting(false);
        ToastHandling("error", res);
      }
      setSubmitting(false);
    });
  };

  return (
    <Common
      initialValue={initialValues}
      validationSchema={validationSchema}
      submitForm={submitForm}
    >
      <Col className="gutter-row" span={24}>
        <FormItem name="fileNo" hasFeedback={true} showValidateSuccess={true}>
          <Input name="fileNo" placeholder="رقم الملف  " />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem name="name" hasFeedback={true} showValidateSuccess={true}>
          <Input name="name" placeholder=" الاسم " />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem
          name="tripleBirth"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input name="tripleBirth" placeholder="الميلاد" />
        </FormItem>
      </Col>

      <Col className="gutter-row" span={12}>
        <FormItem
          name="tripleCenter"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input name="tripleCenter" placeholder=" المركز" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem
          name="tripleSerial"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input name="tripleSerial" placeholder=" الرقم الثلاثى" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem name="dob" hasFeedback={true} showValidateSuccess={true}>
          <Input name="dob" placeholder=" تاريخ الميلاد" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem name="oldID" hasFeedback={true} showValidateSuccess={true}>
          <Input name="oldID" placeholder="رقم البطاقه القديم" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem name="newID" hasFeedback={true} showValidateSuccess={true}>
          <Input name="newID" placeholder="رقم البطاقه الحديث" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem
          name="governorate"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input name="governorate" placeholder="المحافظه" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem
          name="phoneNumber"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input name="phoneNumber" placeholder="رقم الهاتف" />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={12}>
        <FormItem
          name="endOfPostment"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <Input
            name="endOfPostment"
            placeholder="نهاية امد الاعفاء او التاجيل"
          />
        </FormItem>
      </Col>
      <Col className="gutter-row" span={24}>
        <Select
          style={{ width: "100%", marginBottom: "10px" }}
          native
          name="recruitment"
          placeholder="الموقف من التجنيد"
          // onChange={handleChange}
        >
          <Option value={"إعفاء مؤقت"}>إعفاءمؤقت</Option>
          <Option value={"إعفاء نهائي"}>إعفاء نهائى</Option>
          <Option value={"تحت الطلب"}>تحت الطلب</Option>
          <Option value={"لم يصبه الدور"}>لم يصبه الدور</Option>
          <Option value={"أدي الخدمة"}>أدى الخدمة</Option>
          <Option value={"خطاب لتجديد موقف"}>خطاب لتجديد موقف</Option>
          <Option value={"مجند"}>مجند</Option>
          <Option value={"صغار السن"}>صغار السن</Option>
        </Select>
      </Col>

      <Col className="gutter-row" span={24}>
        <FormItem
          name="documents"
          hasFeedback={true}
          showValidateSuccess={true}
        >
          <h3
            style={{ fontSize: "20px", fontWeight: "bold" }}
            data-text="AniMation"
          >
            ارفق المستندات
          </h3>
          <ImageUpload fileList={fileList} setFileList={setFileList} />
        </FormItem>
        {/* <ImageUpload fileList={fileList} setFileList={setFileList} /> */}
      </Col>
    </Common>
  );
};

export default AddDecisions;
