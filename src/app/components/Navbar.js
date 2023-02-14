import { Box, Container, Stack, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import {UserContext} from '../api/Context'
import logo from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg'
const Navbar=({user})=>{
  return(
    < Box boxShadow='md'  backgroundColor='white' >
      <Container  maxW='6xl'>
        <Stack direction='row' as='nav'alignItems='center' justifyContent='space-between' paddingY={3}>
         <Image height={8} width={8} src={logo}/>
        <Stack direction='row' spacing={4}  alignItems='center' >
          <Text fontWeight='500'>{user.name}</Text>
          <Stack cursor='pointer' direction='row' alignItems='center'   borderRadius={9999} backgroundColor='gray.200'  paddingX={3} paddingY={1}>
            <Text fontWeight='500' >{user.points}</Text>
            <Image width={6} height={6} src={coin}/>
          </Stack>
        </Stack> 
        </Stack>
        
        
      </Container>
      
      </Box>

  )
}
export default Navbar