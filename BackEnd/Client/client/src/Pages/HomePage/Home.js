import React from 'react'
import "./../../Style/Home.css"
import Wishlist from '../../Components/Wishlist'
import Productlist from './../../Components/Productlist'


function Home() {
    return (
        <div class="wrapper">
        <div><Wishlist /></div>
       <div><Productlist /></div> 
   
          
        </div>
    )
}

export default Home
