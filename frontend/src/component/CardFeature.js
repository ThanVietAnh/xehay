import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlide'
import { useDispatch } from 'react-redux'

const CardFeature = ({image,name,price,category,loading,id}) => {
  const dispatch = useDispatch()
  const handleAddCartProduct = (e)=>{
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      category : category,
      image : image
    }))
  };
  return (
    <div className='w-full min-w-[250px] max-w-[250px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer fex flex-col '>
        {image ? (
            <>
              <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top : "0",behavior : "smooth"})}>
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} className='h-full '/>
                </div>

                <h3 className='font-semibold text-slate-600 text-center capitalize mt-4 whitespace-nowrap overflow-hidden'>{name}</h3>
                <p className="text-center text-slate-500  font-medium">{category}</p>
                <p className="text-center font-bold">
                    <span className="text-red-500">$</span>
                    <span>{price}</span>
                </p>
              </Link>
                <button className='bg-red-500 py-1 mt-2 rounded hover:bg-red-600 w-full' onClick={handleAddCartProduct}>Add to Cart</button>
              
            </>
            ):(
            <div className='min-h-[150px] flex justify-center items-center'>
                <p>{loading}</p>
            </div>
            
        )}
        
        
    </div>
  )
}

export default CardFeature