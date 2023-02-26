import { useContext } from 'react';
import { Navigate} from 'react-router-dom'
import {Context} from '../Context/Context';

export default function PrivateRoute({children}){
    const {isAuth}=useContext(Context);

    if(!isAuth){
        // console.log(isAuth)
        return <Navigate to="/login"/>
    }

    return children;
}