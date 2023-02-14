import {Container, Flex, Center} from '@chakra-ui/react'
import { useContext } from 'react'
import { UserContext } from '../api/Context'
import Navbar from './Navbar'


import Pending from '../components/Pending'
export default function Layout({children}){
  const {user}=useContext(UserContext)
  
 
    return(
    <Flex  direction='column'>
     {user?<Navbar user={user}/>:<Pending/>} 
      <Center  paddingY={3}>
          <Container centerContent  maxWidth='6xl'>
          {children}
          </Container>
      </Center>
    </Flex>)
}