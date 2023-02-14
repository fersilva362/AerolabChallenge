import { createContext, useEffect, useState,useMemo } from 'react'
import apiUser from './apiUser'
import apiProduct from './apiProduct'

const UserContext= createContext();

function ContextProvider({children}){
  const [count, setCount]=useState(0)
  const [user, setUser]= useState() 
  const [page, setPage]=useState(1) 
  const [product, setProduct]=useState([])
  const [myPurchase, setMyPurchase]=useState([])
  const [viewRedeemHistory, setViewRedeemHistory]=useState(false)
  useEffect(()=>{
    apiProduct.fetch().then(resolve=> setProduct(resolve));
    apiUser.fetch().then(resolve=> setUser(resolve)).catch(error=>console.log(error))
  },[])
  
  
  const value=useMemo(()=>({viewRedeemHistory, setViewRedeemHistory, myPurchase, setMyPurchase, count, setCount,user, setUser, page, setPage, product, setProduct}),[viewRedeemHistory,page,user,product,count, myPurchase])
  if(!value.user) return
  if(value.product===0) return
  
  
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>}


export {ContextProvider,UserContext }

