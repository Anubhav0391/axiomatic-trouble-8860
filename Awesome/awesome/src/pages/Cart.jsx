import React, { useState,useEffect } from 'react'
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import "../styles/bag.css"

const Cart = () => {
    const [cart,Cart]=useState([]);
    const [total,Total]=useState(0);
    const navigate=useNavigate();
    const toast=useToast();

    useEffect(() => {
        let bag = JSON.parse(localStorage.getItem("cart"));
        let sum=0;
        bag.forEach((item) => {
            sum += +item.price;
        });
        
        if (bag) {
            Cart(bag);
            Total(sum)
        }
        
    }, [cart]);
    

    const remove = (product) => {
        let newArr = [];
        newArr = cart.filter((item) => {
          if (item.id === product.id) {
            return false;
          }else{
            return true
          }
        });
        localStorage.setItem("cart", JSON.stringify(newArr));
        Cart(newArr);
    };


    const placeOrder = () => {
        toast({
          title: "Processing...",
          status: "info",
          duration: 2500,
          isClosable: true,
        });
        setTimeout(() => {
          toast({
            title: "Order Placed Successfully",
            status: "success",
            duration: 3500,
            isClosable: true,
          });
          navigate("/");
        }, 2500);
    };

  return (
    <div>
        <div id="main">
            <div>

                {cart.map((el)=>{
                return <div key={el.id} style={{margin:'10px'}}>
                    <img
                        src={el.img1}/>
                    <div>
                        <h3>{el.brand}</h3>
                        <p>{el.title}</p>
                        <p id="Size">Size :<span> S </span></p>
                        <div id="qnty">
                            <p>Qty :</p>
                            <div id="minus">-</div>
                            <span id="quantity"> 1 </span>
                            <div id="plus">+</div>
                        </div>
                        <p id="cost">₹ <span>{el.price}</span></p>
                        <button onClick={()=>remove(el)}>REMOVE</button>

                    </div>
                </div>
                })}

            
            </div>
            <div>
                <div id="cpn">
                    <h3>COUPONS</h3>
                    <h3></h3>
                    <input type="text" placeholder="Coupon Code"/>
                    <button>APPLY</button>
                </div>
                <div id="prcDtl">
                    <h3>PRICE DETAILS</h3>
                    <div>
                        <p>Total</p>
                        <p>₹ <span id="tprice">{total}</span></p>
                    </div>
                    <div>
                        <p>Coupon Discount</p>
                        <p>-₹ <span id="dscnt">0</span></p>
                    </div>
                    <div>
                        <p>Delivery Charge</p>
                        <p>Free</p>
                    </div>
                </div>
                <div id="finalPrice">
                    <div>
                        <h4>Total Amount</h4>
                        <h4>₹ <span id="tamnt">{total}</span></h4>
                    </div>
                    <button onClick={placeOrder}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart






















// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCol,
//     MDBContainer,
//     MDBIcon,
//     MDBInput,
//     MDBRow,
//     MDBTypography,
//     } from "mdb-react-ui-kit";
//     import React from "react";
    
//     export default function Cart() {
//     return (
//     <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer >
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol>
//             <MDBCard>
//               <MDBCardBody className="p-4">
//                 <MDBRow>
//                   <MDBCol lg="7">
//                     <MDBTypography tag="h5">
//                       <a href="#!" className="text-body">
//                         <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
//                         shopping
//                       </a>
//                     </MDBTypography>
    
//                     <hr />
    
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <div>
//                         <p className="mb-1">Shopping cart</p>
//                         <p className="mb-0">You have 4 items in your cart</p>
//                       </div>
//                       <div>
//                         <p>
//                           <span className="text-muted">Sort by:</span>
//                           <a href="#!" className="text-body">
//                             price
//                             <MDBIcon fas icon="angle-down mt-1" />
//                           </a>
//                         </p>
//                       </div>
//                     </div>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Iphone 11 pro
//                               </MDBTypography>
//                               <p className="small mb-0">256GB, Navy Blue</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 2
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $900
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Samsung galaxy Note 10
//                               </MDBTypography>
//                               <p className="small mb-0">256GB, Navy Blue</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 2
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $900
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Canon EOS M50
//                               </MDBTypography>
//                               <p className="small mb-0">Onyx Black</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 1
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $1199
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 MacBook Pro
//                               </MDBTypography>
//                               <p className="small mb-0">1TB, Graphite</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 1
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $1799
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
//                   </MDBCol>
    
//                   <MDBCol lg="5">
//                     <MDBCard>
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between align-items-center mb-5">
//                           <MDBTypography tag="h5" className="mb-0">
//                             Card details
//                           </MDBTypography>
//                           <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
//                             fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
//                         </div>
    
//                         <p className="small">Card type</p>
//                         <a href="#!" type="submit" className="text-black">
//                           <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-black">
//                           <MDBIcon fab icon="cc-visa fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-black">
//                           <MDBIcon fab icon="cc-amex fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-black">
//                           <MDBIcon fab icon="cc-paypal fa-2x me-2" />
//                         </a>
    
//                         <form className="mt-4">
//                           <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
//                             placeholder="Cardholder's Name"  />
    
//                           <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
//                             minLength="19" maxLength="19" placeholder="1234 5678 9012 3457"  />
    
//                           <MDBRow className="mb-4">
//                             <MDBCol md="6">
//                               <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
//                                 minLength="7" maxLength="7" placeholder="MM/YYYY"  />
//                             </MDBCol>
//                             <MDBCol md="6">
//                               <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
//                                 maxLength="3" placeholder="&#9679;&#9679;&#9679;"  />
//                             </MDBCol>
//                           </MDBRow>
//                         </form>
    
//                         <hr />
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Subtotal</p>
//                           <p className="mb-2">$4798.00</p>
//                         </div>
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Shipping</p>
//                           <p className="mb-2">$20.00</p>
//                         </div>
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Total(Incl. taxes)</p>
//                           <p className="mb-2">$4818.00</p>
//                         </div>
    
//                         <MDBBtn color="info" block size="lg">
//                           <div className="d-flex justify-content-between">
//                             <span>$4818.00</span>
//                             <span>
//                               Checkout{" "}
//                               <i className="fas fa-long-arrow-alt-right ms-2"></i>
//                             </span>
//                           </div>
//                         </MDBBtn>
//                       </MDBCardBody>
//                     </MDBCard>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//     );
//     }