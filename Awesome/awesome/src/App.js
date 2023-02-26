import { Box, Container, Center } from "@chakra-ui/react";
import ProductCard from "./component/ProductCard";
import Navbar from "./component/Navbar";
import HomeCard from "./component/HomeCard";

import Home from "./pages/Home";
import Mens from "./pages/Men";
import IndividualProduct from "./pages/IndividualProduct";
import Footer from "./component/Footer";
import AllRoutes from "./Routes/Routes";
import { useContext } from "react";
import { Context } from "./Context/Context";
import Auth from "./pages/Auth";


function App() {
  const { q } = useContext(Context);

  return (

    <>
      <Navbar />
      <Box style={{ position: 'fixed', top: '70px', left: '0', right: '0', bottom: '0', overflowY: 'scroll' }} bg='#ECEFF1' paddingTop={10}>
        <Center>
{/* <Auth/> */}
          {<AllRoutes />}
        </Center>
        <Footer />
      </Box>
    </>
  );
}

export default App;
