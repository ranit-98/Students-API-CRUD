import React, { useEffect, useState } from 'react'
import Style from '../Styles/Form.module.css'
import {  editUser, getUser } from '../Services/API'
import { useNavigate, useParams } from 'react-router-dom'
const EditStudent = () => {
    const {id}=useParams()
    const initialData={
        name:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        class:""
    }
    const [users,setUsers]=useState(initialData)
    const [error,setError]=useState({})
    const navigate=useNavigate()
    const validation=()=>{
        let error={}
        if(!users.name){
            error.name="name is required "
        }  
        if(!users.email){
            error.email="email is required "
        } 
        if(!users.phone){
            error.phone="phone is required "
        }
        if(users.phone.length<10){
            error.phone="phone no must be of 10 digit"
        }
        if(!users.address){
          error.address="address is required "
      }
      if(!users.city){
        error.city="city is required "
    }
    if(!users.class){
      error.class="class is required "
  }
        return error
    }
    const handleOnChange=(e)=>{
        let {name,value}=e.target
        setUsers({
            ...users,
            [name]:value
        });
        console.log(users);
        if (name === "name") {
            if (value.length === 0) {
              setError({ ...error, name: "@Name is Required" });
              setUsers({ ...users, name: "" });
            } else {
              setError({ ...error, name: "" });
              setUsers({ ...users, name: value });
            }
          }
          if (name === "email") {
            if (value.length === 0) {
              setError({ ...error, email: "@Email is Required" });
              setUsers({ ...users, email: "" });
            } else {
              setError({ ...error, email: "" });
              setUsers({ ...users, email: value });
            }
          }
      
          if (name === "phone") {
            if (value.length === 0) {
              setError({ ...error, phone: "@Phone is Required" });
              setUsers({ ...users, phone: "" });
            } else if (value.length < 10) {
              setError({ ...error, phone: "@Phone no must be of 10 digit" });
              setUsers({ ...users, phone: value });
            } else {
              setError({ ...error, phone: "" });
              setUsers({ ...users, phone: value });
            }
          }
      
          if(name==="address"){
            if(value.length===0){
              setError({...error,address:"@Address is Required"})
              setUsers({...users,address:""})
            }else{
              setError({...error,address:""})
              setUsers({...users,address:value})
            }
          }
          if (name === "city") {
            if (value.length === 0) {
              setError({ ...error, city: "@City is Required" });
              setUsers({ ...users, city: "" });
            } else {
              setError({ ...error, city: "" });
              setUsers({ ...users, city: value });
            }
          }
          if(name==="class"){
            if(value.length===0){
              setError({...error,class:"@Class is Required"})
              setUsers({...users,class:""})
            }else{
              setError({...error,class:""})
              setUsers({...users,class:value})
            }
          }
    }

    const getData=async()=>{
        let res=await getUser(id)
         setUsers(res?.data)
        console.log(res);
       
    }

    useEffect(()=>{
        getData()
    },[])
    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            let reg = {
                name: users.name,
                email: users.email,
                phone: users.phone,
                address:users.address,
                city: users.city,
                class:users.class
            }
            console.log(reg)
            
        }
        
        
    }
    const handleOnClick=async()=>{
        let ErrorList = validation()
        setError(validation())
        Object.keys(ErrorList).length === 0 && await editUser(users, id)
        Object.keys(ErrorList).length === 0 &&  navigate('/show-users')
         
    }
  return (
    <>
      <form className={Style.formContainer} method='post' onSubmit={handleOnSubmit}>
        <h1 className={Style.formHeading}>Registration Form</h1>
        <div>
        <label>Name</label><br/>
        <input name='name' value={users.name} onChange={handleOnChange} placeholder='name' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.name} </span>
        </div>
        <div>
        <label >Email</label><br/>
        <input name='email' value={users.email} onChange={handleOnChange} placeholder='email' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.email} </span>
        </div>
        <div>
        <label>Phone</label><br/>
        <input name='phone' value={users.phone} onChange={handleOnChange} placeholder='phone' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.phone} </span>
        </div>
        <div>
        <label>Address</label><br/>
        <input name='address' value={users.address} onChange={handleOnChange} placeholder='address' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.address} </span>
        </div>
        <div>
        <label>City</label><br/>
        <input name='city' value={users.city} onChange={handleOnChange} placeholder='city' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.city} </span>
        </div>
        <div>
        <label>Class</label><br/>
        <input name='class' value={users.class} onChange={handleOnChange} placeholder='class' /><br/>
        <span style={{ color: "red", marginLeft: "10rem" }}> {error.class} </span>
        </div>
        <div>
            <button className='btn btn-primary' onClick={()=>{handleOnClick()}}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default EditStudent
