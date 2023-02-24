import React from "react";
import './men.css'
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from '../component/ProductCard';
import axios from "axios";
import { Center,Text ,Stack,SimpleGrid,Button,Radio, RadioGroup,Container,Box,useDisclosure } from "@chakra-ui/react";
import{Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react'

const Mens = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(9);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [value, setValue] = React.useState('1')
    const [val, setVal] = React.useState('')

	const getData = () => {
		axios
			.get(`http://localhost:8080/mens?_limit=${limit}`)
			.then((res) => {
				setData(res.data);
			});
	};
	const handleLimit=()=>{
		
		setTimeout(() => {
			if(limit>100){
				setLimit(9);
			}
			else{
				setLimit((prev)=>prev+3)
			}
		}, 1500);
	}
	useEffect(() => {
		getData();
	}, [limit]);
	return (
        <>
            <Button id="filter" ref={btnRef} onClick={onOpen}>
                    Filter & Sort
            </Button>
            <Container maxW='1050px'>
                    
                    <Text color={'gray'} fontSize='14' marginBottom={5}>Home » Men » clothing » top wear » t-shirts</Text>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Filter & Sort</DrawerHeader>

                        <DrawerBody>
                            <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Brand
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <RadioGroup onChange={setValue} value={value}>
                                    <Stack direction='column'>
                                        <Radio value='1'>Fashion Fricks</Radio>
                                        <Radio value='2'>Oxolloxo</Radio>
                                        <Radio value='3'>GESPO</Radio>
                                        <Radio value='2'>Second</Radio>
                                        <Radio value='3'>Solemio</Radio>
                                        <Radio value='3'>Allen Kniel</Radio>
                                    </Stack>
                                    </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>    
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Price
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <RadioGroup onChange={setVal} value={val}>
                                    <Stack direction='column'>
                                        <Radio value='asc'>Low to High</Radio>
                                        <Radio value='desc'>High to Low</Radio>
                                    </Stack>
                                    </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Category
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                   <RadioGroup onChange={setValue} value={value}>
                                    <Stack direction='column'>
                                        <Radio value='1'>Shirt</Radio>
                                        <Radio value='2'>Trousers</Radio>
                                        <Radio value='3'>Pants</Radio>
                                        <Radio value='2'>T-shirt</Radio>
                                        <Radio value='3'>Woolen</Radio>
                                    </Stack>
                                    </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Print & Patterns
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <RadioGroup onChange={setValue} value={value}>
                                    <Stack direction='column'>
                                        <Radio value='1'>prited</Radio>
                                        <Radio value='2'>solid</Radio>
                                        <Radio value='3'>stripes</Radio>
                                        <Radio value='2'>graphic</Radio>
                                        <Radio value='3'>typographic</Radio>
                                    </Stack>
                                    </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Occassion
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column'>
                                    <Radio value='1'>casual</Radio>
                                    <Radio value='2'>party</Radio>
                                    <Radio value='3'>festive</Radio>
                                    <Radio value='2'>never out</Radio>
                                
                                </Stack>
                                </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Type
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column'>
                                    <Radio value='1'>winter</Radio>
                                    <Radio value='2'>summer</Radio>
                                </Stack>
                                </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Size
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column'>
                                    <Radio value='1'>S</Radio>
                                    <Radio value='2'>M</Radio>
                                    <Radio value='3'>L</Radio>
                                    <Radio value='2'>XL</Radio>
                                    <Radio value='3'>XXL</Radio>
                                </Stack>
                                </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Color
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column'>
                                    <Radio value='1'>Red</Radio>
                                    <Radio value='2'>Blue</Radio>
                                    <Radio value='3'>Pink</Radio>
                                    <Radio value='2'>Yellow</Radio>
                                    <Radio value='3'>Gray</Radio>
                                </Stack>
                                </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                    Other
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <RadioGroup onChange={setValue} value={value}>
                                <Stack direction='column'>
                                 
                                </Stack>
                                </RadioGroup>
                                </AccordionPanel>
                            </AccordionItem>
                            
                            </Accordion>
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
    
                <Center>
                <SimpleGrid columns={[1,1,2,3,3,3]} spacing={[3,3,6,5,5,7]}>
                    {data?.map((el) => {
                        return (
                            <ProductCard
                            title={el.title}
                            brand={el.brand}
                            id={el.id}
                            key={el.id}
                            price={el.price}
                            img1={el.img1}
                            img2={el.img2}
                            img3={el.img3}
                            />
                            );
                        })}
                </SimpleGrid >	
                </Center>
                <Center>
                    <Button  color='#E91E63' onClick={handleLimit} m={3} bg='#FFEBEE'>SHOW MORE </Button>
                </Center>
            </Container>
        </>
	);
};

export default Mens;





























































































































































































































































































































































































































































































































































































































