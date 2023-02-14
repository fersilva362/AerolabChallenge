import {Stack, Image, Box, Text} from '@chakra-ui/react'
import forward from '../../assets/icons/arrow-right.svg'
import backward from '../../assets/icons/arrow-left.svg'
import { useContext, useEffect,useMemo } from 'react'
import { UserContext } from '../api/Context'
export default function Pages(){
  const {page, setPage, product, setProduct}=useContext(UserContext)
  const maxPage=Math.ceil(product.length/15)
  function handlePage(arg){
    const newPage=page+arg
    if(newPage<=0) return
    if(newPage>maxPage)return
    setPage(newPage)
  }
  return (
    <Stack  direction='row' spacing={2} alignItems='center' >
      <Box onClick={()=>handlePage(-1)} cursor='pointer' boxSize={10}>
        <Image  src={backward}/>
      </Box>
      <Text fontWeight='bold' color='primary.500'>{page} of {maxPage} pages</Text>
      <Box onClick={()=>handlePage(+1)} cursor='pointer' boxSize={10}>
        <Image  src={forward}/>
      </Box>
      
      
    </Stack>
  )
}