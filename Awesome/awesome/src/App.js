import { Box,Container,Center } from "@chakra-ui/react";
import ProductCard from "./component/ProductCard";
import Navbar from "./component/Navbar";
import HomeCard from "./component/HomeCard";

import Home from "./pages/Home";
import Mens from "./pages/Men";


function App() {
  return (
    <>
      <Navbar />
      <Box style={{position: 'fixed',top: '70px',left: '0',right: '0',bottom: '0',overflowY: 'scroll'}} bg='#ECEFF1' paddingTop={10}>
        <Center>
          
            
            {/* <Home/> */}
            <Mens/>
          
        </Center>
      </Box>
    </>
  );
}

export default App;
