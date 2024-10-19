/* eslint-disable react/prop-types */


import { useContext } from 'react'
import './FoodDesplay.css'
import { StoreContex } from '../../context/Storcontext'
import FoodItem from '../fooditem/FoodItem'


const FoodDesplay = ({category}) => {
    const {food_list}=useContext(StoreContex)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-disply-listt">
            {food_list.map((item,i)=>{
              if(category ==='All' || category===item.category){
                 return <FoodItem key={i} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }else{
                return null
              }
                
            })}

        </div>
      
    </div>
  )
}

export default FoodDesplay
