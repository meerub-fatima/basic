import { Box, Button, Flex, Img, SimpleGrid, Text   } from '@chakra-ui/react'
import React from 'react'

const Section = () => {
  return (
    <SimpleGrid  columns={ {base : "1",md : "1",lg : "2"} }  p="10" >
    <Flex flexDir="column"  justify="center" w={ {base : "100%",md : "100%",lg : "80%"}} >
        <Text fontSize="2rem" fontWeight="bold" >Title...</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt quam dignissimos id, ducimus rerum mollitia vel nisi ad fugit aliquam aut sint, incidunt eius, fuga tempora molestiae. Rem, ut.</Text>
    <Box pt="1rem" ><Button border="2px solid gray" >Send</Button></Box>
    </Flex>
    <Flex  align="center" justify="center" pt="10" >
        <Img borderRadius="sm"  src='https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    </Flex  >
    </SimpleGrid>
  ) 
}

export default Section
