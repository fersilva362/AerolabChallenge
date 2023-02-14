import { Box, Stack,Text } from "@chakra-ui/layout";
import {useState, useMemo} from 'react'
const filterTag=['Most Recent','Lowest price','Highest price' ]
export default function Sorter({product,handleSelect,select}){


  return(
    <Stack alignItems='center' direction='row' spacing={6}>
      {filterTag.map(filter=>
        {return(
          <Box bg={filter===select?'cyan.400':'gray.200'} onClick={()=>handleSelect(filter)} paddingX={4} paddingY={2} borderRadius={9999}  key={filter}>
            <Text color={filter===select?'white':'gray.400'} fontWeight='500' > {filter}</Text>
          </Box>
        )}
        )}
      
      
    </Stack>
  )
}