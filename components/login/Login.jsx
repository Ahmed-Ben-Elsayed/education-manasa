import React, { useEffect, useState } from 'react'
import '../login/login.css'
import { Link , useNavigate } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import Swal from "sweetalert2";
export const Login = () => {
    let [error,seterror]  = useState("")
    let [allow,setallow]  = useState(false)
    const navigate = useNavigate("")
    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit : async (values)=>{
            try{
                await axios.post("https://tarmeezacademy.com/api/v1/login",values)
                Swal.fire({
                    title: "مرحبا بك ",
                    text: "تم التسجيل بناج ",
                    icon: "success"
                  });
                  setallow(true)
                  localStorage.setItem("allow",allow);
                  navigate('/')
                }
                catch(err){
                    setallow(false)
                    localStorage.setItem("allow",allow);
                seterror(err.response.data.message)
                Swal.fire({
                    title: "مرحبا بك ",
                    text: "يرجى مراجعة البيانات ",
                    icon: "warning"
                  });
            }
        },
        validate:(values)=>{
            const errors={}
            if(!values.username){
                errors.username="please enter your username"
            }
            if(!values.password){
                errors.password="please enter your password"
            }
                return errors
        }
    
    })
    return (
        <div className='login'>
            <form onSubmit={formik.handleSubmit}>
            <h1>من فضلك قم بتسجيل الدخول</h1>
                <input type="text" placeholder='اسم المستخدم ' name='username' onChange={formik.handleChange} value={formik.values.username} />
                <p className='error'>{formik.errors.username ?  formik.errors.username  : " "}</p>
                <input type="password" placeholder='كلمة السر' name='password' onChange={formik.handleChange} value={formik.values.password}/>
                <p className='error'>{<formik className="errors p"></formik> ?  formik.errors.password  : " "}</p>
                <button type='submit'>سجل الأن</button>
                <div className="reg">
                    <p>لا يوجد لديك حساب </p>
                    <Link to="/Register">سجل الان معنا </Link>
                </div>
            </form>
        </div>
    )
}
