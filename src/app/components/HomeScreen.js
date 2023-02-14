import {Flex, Box, Container, Heading, Image,Stack, Divider} from '@chakra-ui/react'
import Grilla from '../components/Grilla'
import {  useContext, useEffect, useMemo } from 'react'
import logo from '../../assets/header-x1.png'

import Counter from '../components/Counter'
import Sorter from '../components/Sorter'
import apiProduct from '../api/apiProduct'
import {useState} from 'react'
import Pages from './PagesShift'
import { UserContext } from '../api/Context'
import Redeem from './Redeem'
export default function HomeScreen(){

//const [product, setProduct]=useState([])
const [select,setSelect]=useState('Most Recent')
const {user, product, page}=useContext(UserContext)

function handleSelect(arg){
  setSelect(arg)
}

const slicedProduct=useMemo(()=>{
  const maxPage=Math.ceil(product.length/15)
  switch(page){
    case 1: return([...product].slice(0,15))
    case maxPage: return([...product].slice((maxPage-1)*15))
    default:return([...product].slice((page-1)*15, page*15))}},[page,product]) 

const sortedProduct=useMemo(()=>{switch(select){
  case 'Lowest price': return [...slicedProduct].sort((a,b)=>a.cost-b.cost)
  case 'Highest price': return [...slicedProduct].sort((a,b)=>b.cost-a.cost)
  default:return slicedProduct
}}, [slicedProduct, select])



/* useEffect(()=>{
    apiProduct.fetch().then(resolve=> setProduct(resolve)   
    )},[]) */
  
  
  return(
    <Container maxW='6xl' backgroundColor='gray.100' padding={0} >
        <Stack alignItems='center'>
          <Flex minH={64} backgroundSize='cover' backgroundImage={`url(${logo})`} width='100%'  alignItems='flex-end' justifyContent='flex-start'>
           <Heading paddingY={8} paddingX={16} color='white' fontSize='4xl'>Electronics</Heading> 
          </Flex>

          <Container maxW='5xl' bg='white'>
            <Stack marginTop='32px' direction='row'  justifyContent='space-between' >
              <Stack justifyContent='center' alignItems='center' direction='row' spacing={6} >
                <Counter product={sortedProduct}/>
                <Divider orientation='vertical' height={8} />
                <Sorter product={product} select={select} handleSelect={handleSelect}/> 
              </Stack>
              <Redeem/>  
              <Stack justifyContent='center'>
                <Pages/>
              </Stack> 
            </Stack>
            <Divider marginTop={4} orientation='horizontal' />
            <Stack marginTop={6} >
              <Grilla user={user} product={sortedProduct}/> 
            </Stack>
          </Container>
          <span>fer</span>
        </Stack>
        
    </Container>

  )
}