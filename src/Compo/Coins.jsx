import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
// import { Link } from 'react-router-dom';
import CoinCard from './Coincard';

const Coins = () => {
const [coins,setCoins]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
const [page, setPage]=useState(1);
const [currency,setCurrency] =useState("inr")

const currencySymbol=
currency==="inr"? "₹":currency==="eur"?"€":"$";

const changePage=(page)=>{
    setPage(page);
    setLoading(true);
};


const btns=new Array(132).fill(1)




useEffect(()=>{
const fetchCoins=async()=>{
try{
  const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
  setCoins(data);
  setLoading(false)

}catch(error){
  setError(true);
  setLoading(false); 
};


};

fetchCoins();
},[currency,page]);

if(error) return <Error message={'Error While Fetching Coins......'}/>


  return (
   <Container maxW={'full'}>
{loading ?( <Loader/>)
:
(<>
<RadioGroup p={'8'} value={currency} onChange={setCurrency}>
   <HStack spacing={'4'}>
    <Radio value={'inr'} >INR</Radio>
    <Radio   value={'eur'}>EUR</Radio>
    <Radio value={'usd'}>USD</Radio>
    </HStack>
</RadioGroup>


<HStack wrap={'wrap'} justifyContent={'space-evenly'} >
  {coins.map((i)=>(
    <CoinCard

    id={i.id}
    key={i.id}
      name={i.name}
      img={i.image}
      price={i.current_price} 
      url={i.url}
      symbol={i.symbol}
      currencySymbol={currencySymbol}
      />
       
  ))}

</HStack>
<HStack w={'full'} overflow={'auto'} p={'8'} >
 {btns.map((item,index)=>(
    <Button
    key={index}
     bgColor={'blackAlpha.900'}
     color={'white'}
     onClick={()=>changePage(index+1)}>
       {index+1}
    </Button>
 ))
 }
</HStack>

</>)}

   </Container>
  );

};


// const ExchangeCard = ({ name, img, price, url }) => (
//   <a href={url} target={"blank"}>
//     <VStack
//       w={"52"}
//       shadow={"lg"}
//       boxShadow={'dark-lg'}
//       p={"8"}
//       borderRadius={"lg"}
//       transition={"all 0.5s"}
//       m={"4"}
//       css={{
//         "&:hover": {
//           transform: "scale(1.1)",
//         },
//       }}
//     >
//       <Image
//         src={img}
//         w={"10"}
//         h={"10"}
//         objectFit={"contain"}
//         alt={"Exchange"}
//       />
//       <Heading size={"md"} noOfLines={1}>
//        Rs: {price}
//       </Heading>

//       <Text noOfLines={1}>{name}</Text>
//     </VStack>
//   </a>

// );


export default Coins