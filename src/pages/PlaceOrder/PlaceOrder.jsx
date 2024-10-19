
import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContex } from '../../context/Storcontext'
const PlaceOrder = () => {
  const {gettotal}=useContext(StoreContex)
  return (
   
      <form className='palce'>
        <div className="left">
          <p className='title'>Delivery Information</p>
          <div className="multi">
            <input type="text"  placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type='email' placeholder='Email address'/>
          <input type="text"  placeholder='Street'/>
          <div className="multi">
            <input type="text"  placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi">
            <input type="text"  placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone'/>
        </div>
        <div className="right">
          
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
          <button >PROCEED TO PAYMENT</button>
        </div>

        </div>

      </form>
      
 
  )
}

export default PlaceOrder
