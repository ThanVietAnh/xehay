import React, { useState } from 'react'
import loginSignupImage from '../assert/login_animation.gif'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginredux } from '../redux/userSlice'

const Login = () => {

    const [data,setData] = useState({
        email : "",
        password : "",
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state)
    const dispatch = useDispatch()


    const handleOnChange = (e)=> {
        const {name,value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {email,password} = data
        if (email && password ){
           
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
             })

             const dataRes = await fetchData.json()
             console.log(dataRes)

             toast(dataRes.message)
             if(dataRes.alert){
                dispatch(loginredux(dataRes))
                setTimeout(()=>{
                    navigate("/")
                }, 1000)
             }

             console.log(userData)
        }
        else{
            alert("Vui lòng điền đầy đủ thông tin")
        }
    }

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-2 '>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                <img src={loginSignupImage} className='w-full'/>
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            
                <label htmlFor='email'>Email</label>
                <input type={"email"} id='email' name='email' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange}/>

                <label htmlFor='password'>Password</label>
                <input type={"password"} id='password' name='password' className='mt-1 mb-3 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.password} onChange={handleOnChange}/>

                <button className='w-full max-w-[150px] m-auto bg-green-500 hover:bg-green-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
            </form>
            <p className='text-left text-sm mt-2'>Bạn chưa có tài khoản ? <Link to={"/signup"} className='text-green-500 underline'>Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Login