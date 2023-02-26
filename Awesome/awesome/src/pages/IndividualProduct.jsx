import React, { useEffect, useState } from 'react'
import star from "../Images/icons8-star-30.png"
import bag from "../Images/icons8-paper-bag-64.png"
import wish from "../Images/icons8-favorite-50.png"
import { Center, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "../styles/indiv.css"

const IndividualProduct = () => {
  const {id}=useParams(); 
  const [data,setData]=useState({}) 
  const toast=useToast()
  
  const AddToCart = () => {

    let cart = localStorage.getItem("cart");

    if (cart) {
      cart = JSON.parse(cart);
      cart.push(data);
      toast({
        position: "bottom-left",
        title: "Product Added To The Cart.",
        description: "SuccessFully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      let arr = [];
      arr.push(data);
      toast({
        position: "bottom-left",
        title: "Product Added To The Cart.",
        description: "SuccessFully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      localStorage.setItem("cart", JSON.stringify(arr));
    }
  };

  useEffect(()=>{
     axios.get(`https://unit-5backend.onrender.com/Mens/${id}`)
     .then(res=>{
        setData(res.data)
        console.log(res.data)
     })
  },[])



  return (
   <div>
    <div id="path">
            <h5>{data.brand} Clothing> More By {data.brand}</h5>
        </div>
        <div id="body">
            <div id="left">
                <div>
                    <img className="fit" src={data.img1}
                        alt=""/>
                </div>
                <div>
                    <img className="fit" src={data.img2} alt=""/>
                </div>
                <div>
                    <img className="fit" src={data.img3} alt=""/>
                </div>
                <div>
                    <img src={data.img1} alt=""/>
                </div>
            </div>
            <div id="right">
                <h2>{data.brand}.</h2>
                <p>{data.title}</p>
                <div id="rating">
                    <p>4.2</p>
                    <img src={star} alt=""/>
                    <p>| 50.6k Ratings</p>
                </div>

                <div id="price">
                    <h2>₹{data.price}</h2>
                    <del>MRP Rs.{+data.price+200}</del>
                    <p>(Rs. 200 OFF)</p>
                </div>

                <div>inclusive of all taxes</div>

                <div>SELECT SIZE</div>

                <div id="size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>

                <div id="buttons">
                    <button onClick={AddToCart}>
                        
                        <Center><img src={bag}/><p>ADD TO BAG</p></Center>
                    </button>
                    <button>
                        <Center><img src={wish} id="fav"/> <p>WISHLIST</p></Center>
                    </button>
                </div>

                <div id="delivery">
                    <h4>DELIVERY OPTIONS </h4>
                    <div>
                        <input type="text" placeholder="Enter Pincode" maxLength="6"/>
                        <button>Check</button>
                    </div>
                    <div>
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        <p>Pay on delivery might be available</p>
                        <p>Easy 30 days returns and exchanges</p>
                        <p>Try & Buy might be available</p>

                    </div>
                </div>

                <div id="details">
                    <h4>PRODUCT DETAILS</h4>
                    <p>This season set a sporty fashion trend with the HRX Men's Athleisure T-shirt. This striped casual
                        T-shirt can be worn on its own or layered under a jacket or a hoodie.</p>
                    <h4>Features</h4>
                    <p>Athleisure T-shirt can be paired with tracks, khakis or jeans</p>
                    <p>Style: Round Neck</p>
                    <p>Sleeve: Short Sleeves</p>
                    <p>Colour: Teal</p>
                    <p>Print: Geometric</p>
                    <p>Fit: Regular</p>
                    <h4>Material & Care</h4>
                    <p>100% cotton</p>
                    <p>Machine-wash</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default IndividualProduct