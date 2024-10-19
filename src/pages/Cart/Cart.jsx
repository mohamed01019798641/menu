import { useContext } from 'react'
import './Cart.css'
import { StoreContex } from '../../context/Storcontext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const {gettotal, cartItems, food_list, removefromCart}=useContext(StoreContex);
 const navgit=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-title">
          <p>Items</p>
          <p>Tile</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
       {
        food_list.map((item,i)=>{
          if(cartItems[item._id]>0){
            return(
              <>
              <div key={i} className='cart-title cart-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>${item.price *cartItems[item._id] }</p>
                 <p onClick={()=>removefromCart(item._id)} className='cross'>x</p>

              </div>
              <hr />
              </>
            )
          }
        })
       }

        
      </div>
      <div className="cart-btn">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-del">
              <p>Subtotal</p>
              <p>${gettotal()}</p>
            </div>
            <hr />
            <div className="cart-total-del">
              <p>Delivery fee</p>
              <p>${gettotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-del">
              <b>Total</b>
              <b>${gettotal()===0?0:gettotal()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navgit('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-pri">
          <div>
            <p>if you have a promo code,Enter it here</p>
            <div className='cart-in'>
              <input type="text" placeholder='promo-code' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
