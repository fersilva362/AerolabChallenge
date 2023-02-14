import {useEffect,useMemo, useState,useContext} from 'react'
import coin from '../../assets/icons/coin.svg'
import bag from '../../assets/icons/buy-blue.svg'
import bagW from '../../assets/icons/buy-white.svg'
import {Center, Stack,Grid, GridItem,Text, Image, Flex, Divider, Button, Container, Heading  } from '@chakra-ui/react'
import { UserContext } from '../api/Context'
export default function Grilla({product,user}){
  
  const [redeem, setRedeem]=useState(false)
  const [itemRedeem, setItem]= useState()
  const {viewRedeemHistory, myPurchase,count, setCount}=useContext(UserContext)
  

  function handleRedeem(arg){
    setItem(arg);setRedeem(!redeem)
    }
  
    const {setUser} = useContext(UserContext)
    
  function handlePurchase(item){
    const resta=user.points-item.cost

    if(resta >=0 ){setCount(()=>count+1);setUser({...user, points:resta, redeemHistory:(user.redeemHistory.length!==0?[...user.redeemHistory,item]:[item])})}
    else setRedeem(false); return
  }

  if(viewRedeemHistory){ return(<><Stack><Heading>You've redeemed the following items</Heading></Stack>
    <Grid  templateColumns='repeat(auto-fill,minmax(250px, 1fr))' gap={6}>
      {myPurchase.map(ele=>
      <GridItem position='relative' borderWidth={1} boxShadow='md' rounded='md' padding={4} key={ele._id}  bg='white' >
         
            <Center>
              <Image objectFit='contain' width={64} src={ele.img.url}/>
            </Center>
            <Divider orientation='horizontal'/>
            <Stack marginTop={2} spacing={0} >
              <Text  fontSize='sm' fontWeight='500' color='gray.400'>{ele.category}</Text>
              <Text  fontWeight='500'>{ele.name}</Text> 
            </Stack>
          
        </GridItem>)}
    </Grid></>
    )} 
  else{
    

  return(
    <Grid  templateColumns='repeat(auto-fill,minmax(250px, 1fr))' gap={6}>
      {product.map(item=>
      <GridItem position='relative' borderWidth={1} boxShadow='md' rounded='md' padding={4} key={item._id}  bg='white' >
        { user.points-item.cost>=0?
        <Stack onClick={()=>handleRedeem(item._id)} alignItems='center' borderWidth='3px' bg='white' borderColor='cyan' spacing='3px' borderRadius='6px' cursor='pointer'  opacity='0.8' position='absolute' zIndex={2} >
          <Image paddingTop='13px'   width='50px' objectFit='contain' src={bag}/>
          <Button color='cyan.500'>Redeem</Button>
        </Stack>
        
        :<Stack cursor='not-allowed' direction='row'  
        padding='10px' opacity='0.8' position='absolute' zIndex={2} borderRadius={9999} bg='gray.500' width='fit-content'>
          <Text color='white'>You need {item.cost-user.points}</Text>
          <Image boxSize={6} src={coin}/>
        </Stack>} 
        <Center>
        <Image objectFit='contain' width={64} src={item.img.url}/>
        </Center>
        <Divider orientation='horizontal'/>
        <Stack marginTop={2} spacing={0} >
        
          <Text  fontSize='sm' fontWeight='500' color='gray.400'>{item.category}</Text>
          <Text  fontWeight='500'>{item.name}</Text> 
          <Stack direction='row' spacing={1} justifyContent='flex-end'>
          <Text> Price: {item.cost}</Text>
          <Image boxSize={6} src={coin}/>
        </Stack>
        </Stack>
          {(redeem && itemRedeem===item._id) && <Stack cursor='pointer'  alignItems='center' justifyContent='center' rounded='md' bg='cyan.200' opacity='0.8' width='100%' height='100%' position='absolute' zIndex={2} top={0} left={0}>
            <Image onClick={()=>setRedeem(!redeem)} width={32} objectFit='contain' src={bagW}/>
            <Button onClick={()=>handlePurchase(item)} color='cyan.500'>Redeem Now</Button> 
        </Stack>}
        
      </GridItem>)}

  </Grid>

  )}
}