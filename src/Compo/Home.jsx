import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btc from "../Asset/btc3.png";
import { motion } from "framer-motion";
import btc1 from '../Asset/btc.png'

const Home = () => {
  return (
    <Box bgImg={btc1} bgSize={'cover'} bgRepeat={'no-repeat'} bgPosition={'center'}
    w={"full"} h={"full"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateX: "1px",
        
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType:'mirror',
        }}





      >
        <Image
          w={'full'}
          h={'full'}
          objectFit={'none'}
          src={btc}
          filter={ 'grayscale(100%)'}
       className={'spn'}
        />
      </motion.div>

      <Text
        fontSize={"5xl"}
        textAlign={"center"}
        
        fontWeight={'bold'}
        color={"red"}
        mt={"-20"}
      >
        CRYPTOX
      </Text>
    </Box>
  );
};

export default Home;