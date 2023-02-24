
import Spacer from './spacer';
import logo from '../Images/awesome logo.png';
import profile from '../Images/profile.PNG'
import cart from '../Images/bag.PNG'
import search from '../Images/search.PNG'
import '../styles/navbar.css'
import React from 'react'
import {HamburgerIcon,CloseIcon,SearchIcon } from '@chakra-ui/icons'
import { Tag,Drawer,DrawerBody,DrawerOverlay,DrawerContent,useDisclosure,HStack,Input,IconButton,Text} from '@chakra-ui/react';
// import Product from './card';
// import {SearchIcon} from @chakra-


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div >
        <nav style={{display:'flex',justifyContent:'space-between'}}>
      <div className="wrapper">
        <div className="logo"><img src={logo} alt=""/></div>
        <input type="radio" name="slider" id="menu-btn"/>
        
        <input type="radio" name="slider" id="close-btn"/>
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i><CloseIcon/></label>
          <li>
            <a href="#" className="desktop-item">WOMEN</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">WOMEN</label>
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
            <a href="#" className="desktop-item">MEN</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">MEN</label>
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
            <a href="#" className="desktop-item">KIDS</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">KIDS</label>
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

          <li><a href="#" style={{color:'red'}}><Text bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'>OFFERS</Text></a></li>
          {/* <hr/><hr/><hr/><hr/> */}
          <li><Spacer/></li>
          <li >
            <button color='blue' onClick={onOpen}>
            <img className='icon' src={search} alt="" style={{width:'60px',marginTop:'30px'}}/>
            <label style={{borderTop:'1px solid black'}} htmlFor="search" className="mobile-item">SEARCH</label>
            </button>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent h='70px'>
                <DrawerBody >
                    <HStack>
                    <Input variant='unstyled' placeholder='Search brand, category or products' h={'54px'} fontSize='20px'/>
                    <IconButton
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
          <img className='icon' src={cart} alt="" style={{width:'77px',margin:'17px'}}/>
          <label htmlFor="search" className="mobile-item">CART</label>
          </li>
          <li >
          <img className='icon' src={profile} alt="" style={{width:'60px',margin:'15px'}}/>
          <label htmlFor="search" className="mobile-item">PROFILE</label>
          </li>
        </ul>
        
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i><HamburgerIcon/></label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;