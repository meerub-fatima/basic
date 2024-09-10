import { Box , Divider, Flex, MenuDivider } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
   <Flex w="95vw"  h={{base: "auto" , md: "20vh" , lg: "30vh"}}
    align="center" justify="space-evenly" borderTop="thick"  >
    <Box display="flex" pos="absolute" left="0" gap="1.5rem" m="2rem" mb="0" >
        <FaInstagram fontSize={{ base: "1.5rem", md: "2rem" , lg: "2.3rem"}}/>
        <p><FaFacebook fontSize={{ base: "1.5rem", md: "2rem" , lg: "2.3rem"}}/></p>
        <p><FaLinkedin fontSize={{ base: "1.5rem", md: "2rem" , lg: "2.3rem"}}/></p>
        <p><FaTwitter fontSize={{ base: "1.5rem", md: "2rem" , lg: "2.3rem"}}/></p>
        
    </Box>
   </Flex>
  )
}

export default Footer
