import { Box, Wrap,WrapItem,Avatar,VStack } from '@chakra-ui/react'
import React from 'react'

const AvatarRow = () => {
  return (
    <Box>
        <Wrap spacing='34px' paddingLeft={2} paddingBottom={10}>
            <WrapItem>
            <VStack>
                <Avatar size={'lg'} src='https://img0.junaroad.com/images/icons/men/tshirts.png' />
                <p>T-Shirt</p>
            </VStack>
            </WrapItem>
            
            <WrapItem>
            <VStack>
                <Avatar  size={'lg'} src='https://img0.junaroad.com/images/icons/men/shirts.png' />
                <p>Shirts</p>
            </VStack>
            </WrapItem>
            <WrapItem>
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/men/jeans.png' />
                <p>Jeans</p>
            </VStack>
            </WrapItem>
            <WrapItem>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/trousers.png' />
                <p>Trousers</p>
            </VStack>
            </WrapItem>
            <WrapItem>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/ethnicsets.png' />
                <p>Ethentic Sets</p>
            </VStack>
            </WrapItem>
            <WrapItem>
            <VStack>
                <Avatar  size={'lg'}  src='https://img0.junaroad.com/images/icons/men/footwear.png' />
                <p>Footweer</p>
            </VStack>
            </WrapItem>
            <WrapItem>
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/men/kids.png' />
                <p>Kids</p>
                
            </VStack>
            </WrapItem>
            <WrapItem >
            <VStack>
                <Avatar size={'lg'}  src='https://img0.junaroad.com/images/icons/women/home.png' />
                <p>Home</p>
            </VStack>
            </WrapItem>
           
            <WrapItem >
            <VStack>
                <Avatar  size={'lg'} src='https://img0.junaroad.com/images/icons/men/winter.png' />
                <p>Winter</p>
            </VStack>
            </WrapItem>  
        </Wrap>
    </Box>
  )
}

export default AvatarRow