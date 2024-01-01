import React, { useState } from 'react'
import loginSignupImage from '../assert/login_animation.gif'
import { Link, useNavigate } from 'react-router-dom'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import { toast } from 'react-hot-toast'

const Signup = () => {

    const navigate = useNavigate()
    const [data,setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmpassword : "",
        image : "",
    })

    console.log(data)
    const handleOnChange = (e)=> {
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleUploadProfileImage = async(e)=>{
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data)

        setData((preve)=>{
            return{
                ...preve,
                image : data
            }
        })
    }
console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {firstName,email,password,confirmpassword} = data
        if (firstName && email && password && confirmpassword){
            if (password === confirmpassword){
                 const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
                    method : "POST",
                    headers : {
                        "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                 })

                 const dataRes = await fetchData.json()
                 console.log(dataRes)
                // alert(dataRes.message)
                toast(dataRes.message)
                if (dataRes.alert){
                    navigate("/login")
                }
                
            }
            else{
                alert("password và confirmpassword không trùng nhau")
            }
        }
        else{
            alert("Vui lòng điền đầy đủ thông tin")
        }
    }
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-2 '>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                <img src={data.image ? data.image : loginSignupImage} className='w-full h-full'/>

              <label htmlFor='profileImage'>
                <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                    <p className='text-sm p-1 text-white'>Upload</p>
                </div>
                <input type={"file"} id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}/>
              </label>
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type={"text"} id='firstName' name='firstName' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.firstName} onChange={handleOnChange}/>

                <label htmlFor='lastName'>Last Name</label>
                <input type={"text"} id='lastName' name='lastName' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.lastName} onChange={handleOnChange}/>

                <label htmlFor='email'>Email</label>
                <input type={"email"} id='email' name='email' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange}/>

                <label htmlFor='password'>Password</label>
                <input type={"password"} id='password' name='password' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.password} onChange={handleOnChange}/>

                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input type={"password"} id='confirmpassword' name='confirmpassword' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.confirmpassword} onChange={handleOnChange}/>
            
                <button className='w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign up</button>
            </form>
            <p className='text-left text-sm mt-2'>Bạn đã có tài khoản ? <Link to={"/login"} className='text-green-500 underline'>Login</Link> </p>
        </div>
    </div>
  )
}

export default Signup