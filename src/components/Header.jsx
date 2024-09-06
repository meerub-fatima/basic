import { Flex, SimpleGrid, Link } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <SimpleGrid color="#fff" bg="gray.800" columns="2" p='4' textTransform="uppercase" >
        <Flex><Link fontSize="1.2rem" fontWeight="bold">dev.</Link></Flex>
        <Flex align="center" justify="center" gap="2rem">
            <Link>one</Link>
            <Link>two</Link>
        </Flex>
    </SimpleGrid>
  )
}

export default Header
