import { assets } from '../../assets/assets'
import './AppDwnlod.css'

const AppDwnlod = () => {
  return (
    <div className='app' id='app'>
        <p>For Better Experiece Download <br /> Tomato App</p>
        <div className="app-palt">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDwnlod
