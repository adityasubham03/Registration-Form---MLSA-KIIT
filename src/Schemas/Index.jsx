import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(30).required("Name Required"),
  rollNumber: Yup.string().min(6).max(9).required("Roll Number Required"),
  currentYear: Yup.string().min(1).max(1).required("Current Year Required"),
  branch: Yup.string().min(1).max(25).required("Branch Required").matches("^(?=.*[A-Za-z])"),
  kiitEmailId: Yup.string().email().required("Kiit Email Required"),
  personalEmailId: Yup.string().email().required("Personal Email Required"),
  phoneNumber: Yup.string().min(10).max(15).required("Phone Number Required").matches("^[0-9]*$"),
  interestedField1: Yup.string().required(),
  interestedField2: Yup.string().required(),
  interestedField3: Yup.string().required(),
  linkedin: Yup.string(),
  github: Yup.string(),
  expectation: Yup.string(),
});
