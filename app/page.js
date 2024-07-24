"use client"
import Nav from '@/components/Nav'
import React from 'react'
import { useState } from 'react'

const page = () => {

  const [username, setusername] = useState("")
 const [data, setdata] = useState([])

  const submitHandler =(e)=>{
    e.preventDefault()
    const datacopy =[...data]
    datacopy.push(username)
    setdata(datacopy)
    setusername("")
  }

  const deleteHandler =(index)=>{
    const datacopy = [...data]
    datacopy.splice(index,1)
    setdata(datacopy)
  }

  return (
    <div className='min-h-[90vh] w-full text-black font-bold  bg-yellow-300 p-5 text-center'>
     <h1 className='text-7xl m-auto bg-emerald-500 p-3 border-4 border-black rounded-3xl w-[50%]'>Home Page</h1>

    <form className='bg-red-300 p-5 h-[25vh] w-[50%] m-auto mt-4 rounded-2xl border-2 border-black' onSubmit={submitHandler}>
        <input className='p-3 border-2 border-black rounded-2xl mt-5 m-3' onChange={(e)=>setusername(e.target.value)} value={username} placeholder='Enter Your Name'></input><br/>
        <button className='bg-blue-600 py-2 px-7 text-xl text-white rounded-2xl border-2 border-black'>Submit</button>
    </form>

    <h1 className='text-xl m-auto mt-2 bg-pink-500 p-3 border-2 border-black rounded-xl w-[50%]  '>Below your data</h1>
    <ul className='bg-blue-300 p-2 min-h-[30vh] w-[50%] m-auto mt-4 rounded-2xl border-2 border-black'>
      
    {data.map((item,index)=>{
      return(
        <li key={index} className='bg-black text-white m-auto mt-2 w-[50%] rounded flex items-center justify-evenly px-2 py-2'>Name💇{item}
        <button className='text-black bg-red-300 p-1 rounded' onClick={()=>deleteHandler(index)}>Delete</button></li>
      )
    })}
    </ul>
    


    </div>
  )
}

export default page