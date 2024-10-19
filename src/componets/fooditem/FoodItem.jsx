/* eslint-disable react/prop-types */
import { useContext} from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContex } from '../../context/Storcontext'

const FoodItem = ({id,name,price,description,image}) => {

  const { cartItems, addtocart,removefromCart}=useContext(StoreContex);
  return (
    <div className="food-item">
        <div className="food-itme-img">
            <img src={image} alt="" className='food-item' />
            {
              !cartItems[id]? <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} alt="" />
              :<div className='foot-count'>
                <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <div className="food-item-price">${price}</div>
        </div>
      
    </div>
  )
}

export default FoodItem
