import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import {GrPrevious} from "react-icons/gr"
import {GrNext} from "react-icons/gr"
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'


const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
  const homeProductCardList = productData.slice(0,4)
  const homeProductCardListsieuxe =productData.filter((el) => el.category === "sieuxe",[]) 

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()  
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }

  

  

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-red-400 w-32 px-2 items-center rounded-full'>
              <p className='text-sm font-medium text-slate-900 text-center'>Uy tín là tất cả</p>
              {/* <img src='' className='h-7'/> */}
          </div>
            <h2 className='text-4xl md:text-7xl font-bold py-3'>Mọi xe ở đây đều là<span className='text-red-600'> Xe hay</span></h2>
            <p className='py-3 text-base'>Xe hay là nơi chúng tôi đưa đến cho bạn những mẫu xe phổ biến từ sang trọng, xịn xò đến những chiếc xe ngon-bổ-rẻ thậm chí là những chiếc siêu xe mới nhất đến từ những hãng xe nổi tiếng trên thế giới.Chúng tôi luôn đặt mình vào là những người mua xe để mang về vừa giới thiệu với bạn những chiếc xe xịn nhất mới nhất và giá cả hợp lý nhất. Đặt hàng ngay để nhận những ưu đãi giá trị.</p>
            <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Order now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
            homeProductCardList[0] ? homeProductCardList.map(el =>{
              return(
                <HomeCard
                  key={el._id}
                  id = {el._id}
                  image = {el.image}
                  name = {el.name}
                  price = {el.price}
                  category = {el.category}
                />
              )
            })
            : loadingArray.map((el,index)=>{
                return(
                  <HomeCard
                    key={index}
                    loading={"Loading..."}
                  />
                )
            })
          }
          
        </div>
      </div>
      <div className=''>
            <div className='flex w-full items-center'>
              <h2 className='font-bold text-2xl text-slate-800 mb-4'>Siêu Xe</h2>
              <div className='ml-auto flex gap-4'>
                <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded'><GrPrevious/></button>
                <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded'><GrNext/></button>
              </div>
            </div>
            
            <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
              {
                homeProductCardListsieuxe[0] ? homeProductCardListsieuxe.map(el => {
                  return(
                    <CardFeature
                      key = {el._id}
                      id = {el._id}
                      name = {el.name}
                      category = {el.category}
                      price = {el.price}
                      image = {el.image}
                    />
                  )
                })
                :
                loadingArrayFeature.map((el,index) =>(  <CardFeature loading = "Loading..." key={index}/>))
              }
               
            </div>
        </div>
        <AllProduct heading={"All Product"}/>      
    </div>
  )
}

export default Home