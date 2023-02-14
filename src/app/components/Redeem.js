import { Stack, Image,Text, Container } from "@chakra-ui/react";
import { useContext } from "react";
import bag from '../../assets/icons/buy-blue.svg'
import { UserContext } from "../api/Context";

export default function Redeem(){
  const {viewRedeemHistory, myPurchase,setViewRedeemHistory, count, user, setMyPurchase} = useContext(UserContext)
  function showRedeem(){
    console.log([...user.redeemHistory])
    setMyPurchase([...user.redeemHistory])
    console.log(viewRedeemHistory)
    setViewRedeemHistory(()=>!viewRedeemHistory)
      }
      console.log(myPurchase, 'mypurchase')

  return(
    <Stack onClick={()=>showRedeem()} direction='row' alignItems='center'>
      <Image boxSize={10} src={bag}/>
        <Text color='gray.500' fontWeight='500'>You've reedemed {count} items</Text>
    </Stack>

  )
}