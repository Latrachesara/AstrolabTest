import React from 'react'
import "./../../Style/Home.css"
import Wishlist from '../../Components/Wishlist'
import Productlist from './../../Components/Productlist'
import Navb from '../../Components/Navb'

function Home() {
    return (
        <div>
            <Navb />
        <div class="wrapper">
        <div><Wishlist /></div>
       <div><Productlist /></div> 
   
          
        </div></div>
    )
}

export default Home
