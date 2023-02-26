import { createContext,useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import Mens from '../pages/Men';

export const Context=createContext();

export default function ContextProvider({children}){
    const [q,Q]=useState(null);
    const [isAuth,setIsAuth]=useState(false);

    function login(){
        setIsAuth(true);
    }

    function logout(){
        setIsAuth(false);
    }
    // const Navigate=useNavigate();
    function Search(inputVal){
        Q(inputVal);
        console.log('ok')
    }
    
    return (
        <Context.Provider value={{q,Search,isAuth,login,logout}}>
            {children}
        </Context.Provider>
    ) 
}