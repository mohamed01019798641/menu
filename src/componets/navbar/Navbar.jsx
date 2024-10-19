/* eslint-disable react/prop-types */
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({setShowlogin}) => {
    const [menu,setmenu]=useState('Home');
     
  return (
    <div className='navbar'>
       <Link to='/'><img src={assets.logo} alt=""  className='logo'/></Link> 
        <ul className="Navbar-menu">
            <Link to='/' onClick={()=>setmenu('Home')} className={menu==='Home'?'actev':''}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu('Menu')} className={menu==='Menu'?'actev':''}>Menu</a>
            <a href='#app' onClick={()=>setmenu('Mobile-app')} className={menu==='Mobile-app'?'actev':''}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu('Contact-us')} className={menu==='Contact-us'?'actev':''}>Contact-us</a>
            
        </ul>
        <div className="Navbar-right">
            <div className="vavbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className='dot'></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>Sign in</button>
        </div>

     
    </div>
  )
}

export default Navbar
