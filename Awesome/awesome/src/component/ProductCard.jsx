import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Card,Image,HStack,Stat,StatNumber,StatHelpText,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import React from 'react'

const ProductCard = ({id,title,brand,price,img1,img2,img3}) => {
  return (
    <Link to={`/mens/${id}`}><Card maxW='320px' boxShadow='base' borderRadius={0} cursor='pointer'>
        <Text m={2} fontSize={13} fontWeight={500}># {title}</Text>
        <Image
            // objectFit='cover'
            p={1}
            src={img1}
            alt='Chakra UI'
        />

        <HStack
        spacing='25px' px='5'
        >
            <Stat>
        <StatNumber fontSize='18'>₹ {price}</StatNumber>
        <StatHelpText>By {brand}</StatHelpText>
        </Stat>
            <FavoriteBorderIcon style={{color:'#E91E63'}}/><WhatsAppIcon style={{color:'#8BC34A'}}/>
        </HStack>
    </Card></Link>
  )
}

export default ProductCard