
import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'
const Error = ({message}) => {
  return (
//    <div width={'100vh'} height={'100%'}>Error</div>
<Alert status='error' position={'fixed'} bottom={4} left={'50%'} transform={'translateX(-50%)'}>
    <AlertIcon/>
    {message}
</Alert>
  )
}

export default Error;