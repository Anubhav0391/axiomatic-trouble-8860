import React from "react";
import Slider from 'react-slick'
import { Box, Text,VStack,Avatar } from "@chakra-ui/react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function PauseOnHover (){
  
    var settings = {
      arrows:false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <Box display={'flex'} status='error' flexDirection={'column'} alignItems='start' bg='#FFEBEE' p={2}>
    
            <Text fontWeight={400}>@ Pay Online & Get Flat 10% Off</Text>
            <Text fontWeight={200}>Paytm, Gpay, PhonePe, Net Banking, Debit & Credit Cards.</Text>
        </Box>
        <Slider {...settings}>
          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667388470485.jpg?crsl_pos=0" alt="" />
          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1667988209100.jpg?crsl_pos=0" alt="" />
          <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674029296684.jpg?crsl_pos=0" alt="" />
          <img src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0" alt="" />
        </Slider>
      </div>
    );
  
}


export function Swipe () {
      const settings = {
        className: "center",
        centerPadding:'12px',
        arrows:false,
        infinite: true,
        centerPadding: "59px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
      return (
        <div style={{paddingBottom:'40px' ,cursor:'pointer'}}>
          <Slider {...settings}>
          <Box>
            <VStack>
                <Avatar size={'lg'} src='https://img0.junaroad.com/images/icons/men/tshirts.png' />
                <p style={{fontSize:'10px'}}>T-Shirt</p>
            </VStack>
            </Box>
            
            <Box>
            <VStack>
                <Avatar  size={'lg'} src='https://img0.junaroad.com/images/icons/men/shirts.png' />
                <p style={{fontSize:'10px'}}>Shirts</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/men/jeans.png' />
                <p style={{fontSize:'10px'}}>Jeans</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/trousers.png' />
                <p style={{fontSize:'10px'}}>Trousers</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/ethnicsets.png' />
                <p style={{fontSize:'10px'}}>Ethentic Sets</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/footwear.png' />
                <p style={{fontSize:'10px'}}>Footweer</p>
            </VStack>
            </Box>
            <Box>
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/men/kids.png' />
                <p style={{fontSize:'10px'}}>Kids</p>
                
            </VStack>
            </Box>
            <Box >
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/women/home.png' />
                <p style={{fontSize:'10px'}}>Home</p>
            </VStack>
            </Box>
           
            <Box >
            <VStack>
                <Avatar  size={'lg'} src='https://img0.junaroad.com/images/icons/men/winter.png' />
                <p style={{fontSize:'10px'}}>Winter</p>
            </VStack>
            </Box>
          </Slider>
        </div>
      );
}
  