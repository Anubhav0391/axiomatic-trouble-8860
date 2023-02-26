import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeCard from '../component/HomeCard';
// import InfiniteScroll from 'react-infinite-scroll-component'
import PauseOnHover, { Swipe } from "../component/slider";
// import AvatarRow from "../component/Avatar";
import axios from "axios";
import { Center, SimpleGrid,Button,Container } from "@chakra-ui/react";


const Home = () => {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(9);

	const getData = (limit) => {
		axios
			.get(`https://unit-5backend.onrender.com/LandingMen?_limit=${limit}`)
			.then((res) => {
				setData(res.data);
			});
	};
	const handleLimit=()=>{
		
		setTimeout(() => {
			if(limit>50){
				setLimit(9);
			}
			else{
				setLimit((prev)=>prev+3)
			}
		}, 1500);
	}
	useEffect(() => {
		getData(limit);
	}, [limit]);
	return (
		<Container maxW='950px'>
			<Swipe/>
			{/* <AvatarRow/>  */}
			<PauseOnHover/>
			<Center>
			
			<SimpleGrid columns={[1,1,2,3,3,3]} spacing={[3,3,6,3,3,3]} my={3}>
				{data?.map((el) => {
					return (
						<HomeCard
						designer={el.designer}
						followers={el.followers}
						id={el.id}
						key={el.id}
						image={el.image}
						likes={el.likes}
						/>
						);
					})}
			</SimpleGrid >	
			</Center>
			<Center>
                <Button  color='#E91E63' onClick={handleLimit} m={3} bg='#FFEBEE'>SHOW MORE </Button>
			</Center>
		</Container>
	);
};

export default Home;