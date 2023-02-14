import{Center,Stack,CircularProgress,Text, CircularProgressLabel} from '@chakra-ui/react'

export default function Pending(){
  return(
    <Stack alignItems='center' justifyContent='center' paddingY={64}>
      <Center >
        <CircularProgress isIndeterminate color='primary.300' size='100px' thickness='4px'>
          <CircularProgressLabel><Text fontSize='sm' textTransform='uppercase' fontWeight='bold'>Loading</Text></CircularProgressLabel>
        </CircularProgress>      
      </Center>
    </Stack>
    
  )
}