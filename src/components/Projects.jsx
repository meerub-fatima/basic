import { Flex, Image, Img, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {

    const projectData = [{text : "project",img : "https://static.vecteezy.com/system/resources/previews/007/163/083/non_2x/landing-page-geometry-template-geometry-shape-abstract-theme-with-modern-blue-color-free-vector.jpg"},{text : "project",img : "https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png"},{text : "project",img : "https://img.freepik.com/premium-vector/blue-yellow-wave-landing-page-templates-with-modern-geometric-abstract-shapes-trendy-abstract-background-landing-page-web-design-minimal-background-website-designs_181182-16629.jpg"},{text : "project",img : "https://static.vecteezy.com/system/resources/previews/027/924/069/original/landing-page-template-with-yellow-and-blue-abstract-geometry-shape-on-white-background-for-website-home-page-vector.jpg"} ]

  return (
    <VStack  p="10" pt="3rem" pb="3rem" >
        {projectData.map((item,index) => {
            return (
        <SimpleGrid columns={ {base : "1",md : "1",lg : "2"} } alignItems="center" pt="3rem" >
            <Text fontSize="1.3rem" fontWeight="bold" textTransform="capitalize" >{item.text} {index + 1} </Text>
            <Img cursor="pointer" _hover={{w : "22rem",  boxShadow : "xl"  }} transition="all .25s ease-in-out" w="20rem" src={item.img} />
        </SimpleGrid>
            ) 
        } )}
        <Img/>
    </VStack>
  )
}

export default Projects
