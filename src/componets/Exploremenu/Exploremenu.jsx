/* eslint-disable react/prop-types */
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our menu</h1>
       <p className='explore-menu-text'>Choose from diverse menu faeturing a delctable array of dishes.</p>
       <div className='explore-menu-list'>
          {
            menu_list.map((item,i)=>{
                return(
                    <div onClick={()=>setcategory(priv=>priv===item.menu_name?'All': item.menu_name)} className='explore-menu-list-item' key={i}>
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>

                ) 
            })
          }
       </div>
       <hr />
    </div>
  )
}

export default Exploremenu;
