import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-conent">
            <div className='left'>
                <img src={assets.logo} alt=""  className='logo'/>
                <p> adipisicing elit. Ex alias suscipit quaerat eos repudiandae porro voluptas repellat explicabo nihil quidem ducimus dolore, excepturi ullam, libero fugiat pariatur, odit optio ratione.</p>
                <div className="icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className='center'>
                <h2>COMPANE</h2>
                <ul>
                    <li>Home</li>
                    <li>Abut us</li>
                    <li> Delivery</li>
                    <li>Privacy police</li>
                </ul>
            </div>
            <div className='right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-332-5577</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="fopter copy">Copyright 2024 $ Tomato.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
