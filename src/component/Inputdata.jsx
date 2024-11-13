import React, { useState, useEffect } from "react";
import { DB } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
// arrow function pattern
const Inputdata = () => {
  const [form,setForm] = useState({})
const handlechange =(e)=>{
  console.log(e.target.name,e.target.value)
  setForm({
    ...form,
    [e.target.name]:e.target.value
  })
}


  const handledata = async()=>{
    // DB chitsanupat เป็นชื่อ collection ใน firestore เเละ ส่งค่าเป็น nosql name:pi เป็นการส่งเเเบบ json awit คือการ บอกว่าบรรนี้เป็น promise ที่อาจทำงานนาน use case fetch api
    await addDoc(collection(DB,'chitsanpat'),form).then((res)=>{
      console.log(res)
    }).catch(err=>console.log(err))
  }
  return (
    <div>
      <input onChange={(e)=>handlechange(e)} type="text" name="name" placeholder="name" /> <br />
      <input onChange={(e)=>handlechange(e)} type="text" name="detail" placeholder="detail" /> <br />
      <input onChange={(e)=>handlechange(e)} type="text" name="price" placeholder="pirce" /> <br />
      <button onClick={handledata}>AddData</button>
    </div>
  );
};
export default Inputdata;
