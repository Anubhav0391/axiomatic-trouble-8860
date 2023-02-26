
import Spacer from './spacer';
import logo from '../Images/awesome logo.png';
import profile from '../Images/profile.PNG'
import cart from '../Images/bag.PNG'
import search from '../Images/search.PNG'
import '../styles/navbar.css'
import React, { useContext, useEffect, useState } from 'react'
import {HamburgerIcon,CloseIcon,SearchIcon } from '@chakra-ui/icons'
import { Tag,Drawer,DrawerBody,DrawerOverlay,DrawerContent,useDisclosure,HStack,Input,IconButton,Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ text,setText]=useState('');
    const {Search}=useContext(Context);

    function func(e){
      
        if(e.keyCode===13){
            Search(e.target.value)
        }
      
    }

  return (
    <div >
        <nav style={{display:'flex',justifyContent:'space-between'}}>
      <div className="wrapper">
        <div className="logo"><Link to="/"><img src={logo} alt=""/></Link></div>
        <input type="radio" name="slider" id="menu-btn"/>
        
        <input type="radio" name="slider" id="close-btn"/>
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li>
            <Link><a href="#" className="desktop-item">WOMEN</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">WOMEN</label></Link>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to='/mens'><a href="#" className="desktop-item">MEN</a></Link>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item"><Link to='/mens'>MEN</Link></label>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link><a href="#" className="desktop-item" style={{marginRight:'23px'}}>KIDS</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">KIDS</label></Link>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li><Link><Text fontWeight={600} fontSize={19} cursor='pointer' bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'marginLeft={5}>OFFERS</Text></Link></li>
          <li><Spacer/></li>
          <li >
            <button color='blue' onClick={onOpen}>
            <img className='icon' src={search} alt="" style={{width:'60px',marginTop:'30px'}}/>
            <label style={{borderTop:'1px solid black', marginLeft:'20px'}} htmlFor="search" className="mobile-item">SEARCH</label>
            </button>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent h='70px'>
                <DrawerBody >
                    <HStack>
                    <Input value={text} onKeyUp={func} onChange={(e)=>
                      setText(e.target.value)
                      } variant='unstyled' placeholder='Search brand, category or products' h={'54px'} fontSize='20px'/>
                    <IconButton
                    onClick={()=>Search(text)}
                    h={'54px'}
                    w={'69px'}
                    bg='#8BC34A'
                    color='white'
                    aria-label='Search database'
                    icon={<SearchIcon fontSize={'2xl'}/>}
                    />
                    </HStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
          </li>
          <li >
          <Link to ='/cart'><img className='icon' src={cart} alt="" style={{width:'77px',margin:'17px',cursor:'pointer'}}/>
          <label htmlFor="search" className="mobile-item">CART</label></Link>
          </li>
          <li >

          <Link to ='/login'><img className='icon' src={profile} alt="" style={{width:'60px',margin:'15px' }}/>
          <label htmlFor="search" className="mobile-item">PROFILE</label></Link>
          </li>
        </ul>
        
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;