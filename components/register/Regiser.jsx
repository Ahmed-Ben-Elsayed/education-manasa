import React, { useState } from "react";
import { Link , Navigate, useNavigate } from "react-router-dom";
import "../register/register.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
export const Regiser = () => {
    const navigate = useNavigate();
    let [error_username,setusernameerror]  = useState("")
    let [error_email,setemailerror]  = useState("")
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
        try{
            await axios.post("https://tarmeezacademy.com/api/v1/register",values)
            Swal.fire({
                title: "مرحبا بك ",
                text: "تم التسجيل بناج ",
                icon: "success"
              });
              navigate("/login")
        }
        catch(err){
         setemailerror(err.response.data.errors.email)
        setusernameerror(err.response.data.errors.username)
            if(error_username&&error_email){
                Swal.fire({
                    title: "Error!",
                    text: error_username+" And "+error_email,
                    icon: "warning"
                });
            }
       else if(error_username){
            Swal.fire({
                title: "Error!",
                text: error_username,
                icon: "warning"
            });
        }
        else if(error_email){
            Swal.fire({
                title: "Error!",
                text: error_email,
                icon: "warning"
            });
        }
        }
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "please enter your username";
      }
      if (!values.email) {
        errors.email = "please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "please enter your password";
      }
      if (!values.name) {
        errors.name = "please enter your name";
      }
      return errors;
    },
  });
  return (
    <div className="register">
      <form method="" onSubmit={formik.handleSubmit}>
        <h1>مرحبا بك فى منصتنا</h1>
        <input
          type="text"
          placeholder="اسم المستخدم "
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <p className="error">
          {formik.errors.username ? formik.errors.username : ""}
        </p>
        <input
          type="email"
          placeholder="البريد الإلكترونى"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p className="error">
          {formik.errors.email ? formik.errors.email : ""}
        </p>
        <input
          type="password"
          placeholder="كلمة السر"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p className="error">
          {formik.errors.password ? formik.errors.password : ""}
        </p>
        <input
          type="text"
          placeholder="اسمك "
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <p className="error">{formik.errors.name ? formik.errors.name : ""}</p>
        <button type="submit">انشئ حسابك الأن</button>
        <div className="reg">
          <p>لديك حساب بالفعل </p>
          <Link to="/login">سجل الدخول الان </Link>
        </div>
      </form>
    </div>
  );
};
