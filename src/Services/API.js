import axios from "axios";
// const API_URL=`http://localhost:3003/users`

const API_URL_All_student=`https://restapinodejs.onrender.com/api/allstudent`
const API_URL_Add_Students=`https://restapinodejs.onrender.com/api/student`
const API_URL_single_Student=`https://restapinodejs.onrender.com/api/edit`
const API_URL_Edit=`https://restapinodejs.onrender.com/api/update`
const API_URL_Delete=`https://restapinodejs.onrender.com/api/delete`


export const AddData=async(data)=>{
        try{
            return await axios.post(API_URL_Add_Students,data)
        }catch(error){
            console.log('Error while calling getUsers API', error.message)
        }
}
export const ShowData=async()=>{
    try{
        return await axios.get(API_URL_All_student)
    }catch(error){
        console.log('Error while calling getUsers API', error.message)
    }
}

export const getUser = async (data) => {
    try {
        return await axios.get(`${API_URL_single_Student}/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}

export const editUser = async (data, id) => {
    try {
        return await axios.post(`${API_URL_Edit}/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}

export const deleteUser=async (id)=>{
    try {
        return await axios.delete(`${API_URL_Delete}/${id}`)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)
    }
}