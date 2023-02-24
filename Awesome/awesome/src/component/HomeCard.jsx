import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Card,Image,Box,Stat,StatNumber,StatHelpText, Text} from '@chakra-ui/react'

import React from 'react'

const HomeCard = ({
    designer,
	followers,
	id,
	image,
	likes}) => {
  return (
    <Card maxW='300px' boxShadow='base' maxH='360px'>
        <Image
            objectFit='cover'
            m={2}
            src={image}
            alt='Chakra UI'
            position='relative'
        />

        <div>
            <Box p='0px 0 10px 15px'>
                <Text fontSize='14' fontWeight='600'>By {designer}</Text>
                <Text fontSize='10'>{followers} Followers</Text>
            </Box>
            <Stat position= 'absolute' bg='white' left='168px' top= '276px' borderRadius='15px'>
                <StatNumber  p='0 0px 0 5px'><FavoriteBorderIcon style={{color:'#E91E63',fontSize:'45px'}}/></StatNumber>
                <StatHelpText>{likes} Likes</StatHelpText>
            </Stat>
            <Stat position= 'absolute' bg='white' borderRadius='15' p='0 2px 0 4px' left='232px' top= '276px' >
                <StatNumber><WhatsAppIcon style={{color:'#8BC34A',fontSize:'45px'}}/></StatNumber>
                <StatHelpText>Share</StatHelpText>
            </Stat>
            
        </div>
    </Card>
  )
}

export default HomeCard