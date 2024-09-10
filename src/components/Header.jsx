import { Flex, SimpleGrid, Link } from '@chakra-ui/react'
import { FaCommentMedical, FaHome, FaInfoCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <SimpleGrid zIndex="999999" color="#fff" pos="fixed" w="100vw" bg="gray.800"
     columns="2" p='4' paddingInline="10" textTransform="uppercase" >
        <Flex><Link fontSize="1.2rem" fontWeight="bold">dev.</Link></Flex>
        <Flex align="center" justify="center" gap="2rem">
            <Link href="#home" aria-label="Home">
                <FaHome size="1.5rem"  />
            </Link>
            <Link href="#about" aria-label="About">
                <FaInfoCircle size="1.5rem" />
            </Link>
            <Link href="#contact" aria-label="About">
                <FaCommentMedical size="1.5rem" />
            </Link>
        </Flex>
    </SimpleGrid>
  )
}

export default Header
