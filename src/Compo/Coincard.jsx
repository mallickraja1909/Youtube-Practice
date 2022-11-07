
import { VStack,Image,Heading,Text} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


const CoinCard = ({id, name, img, price, symbol,currencySymbol="₹"}) => (
    <Link to={`/coin/${id}`} target={"blank"}>
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
        <Heading size={"md"} textTransform={'uppercase'} noOfLines={1}>
         {symbol}
        </Heading>
        <Heading size={"md"} noOfLines={1}>
          {price? `${currencySymbol} ${price}`:"NA"}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        
      </VStack>
    </Link>
  );
  export default CoinCard;