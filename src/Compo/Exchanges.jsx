import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { server } from '../index';
import { Container, HStack,VStack,Image,Heading,Text } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';

const Exchanges = () => {
const [exchange,setExchange]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
useEffect(()=>{
const fetchExchange=async()=>{
try{
  const {data}=await axios.get(`${server}/exchanges?per_page=150`);
  setExchange(data);
  setLoading(false)
 
}catch(error){
  setError(true);
  setLoading(false); 
};


};

fetchExchange();
},[]);

if(error) return <Error message={'Error While Fetching Data From Api......'}/>


  return (
   <Container maxW={'full'} bgColor={'goldenrod'} >
{loading ?( <Loader/>)
:
(<>
<HStack wrap={'wrap'} justifyContent={'space-evenly'} >
  {exchange.map((i)=>(
    <ExchangeCard
    key={i.id}
      name={i.name}
      img={i.image}
      rank={i.trust_score_rank} 
      url={i.url}/>

  ))}
</HStack>

</>)}

   </Container>
  );

};


const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
   
      w={"52"}
      shadow={"lg"}
     
      boxShadow={'dark-lg'}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;