import './Home.css'
import Header from "../../componets/Header/Header";
import Exploremenu from '../../componets/Exploremenu/Exploremenu';
import { useState } from 'react';
import FoodDesplay from '../../componets/foodDesplay/FoodDesplay';
import AppDwnlod from '../../componets/AppDwnlad/AppDwnlod';

 
const Home = () => {
  const [category,setcategory]=useState('All');
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDesplay category={category}/>
      <AppDwnlod/>
      
    </div>
  )
}

export default Home
