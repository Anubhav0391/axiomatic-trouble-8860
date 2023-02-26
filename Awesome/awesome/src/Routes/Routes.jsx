import React, { useContext } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Context } from '../Context/Context'
import Auth from '../pages/Auth'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import IndividualProduct from '../pages/IndividualProduct'
import Mens from '../pages/Men'
import NotFound from '../pages/NotFound'
import PrivateRoute from './Private'
const AllRoutes = () => {
  const values=useContext(Context);

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<Mens q={values.q}/>}/>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/mens/:id' element={<IndividualProduct/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AllRoutes