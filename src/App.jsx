import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Section from './components/Section'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  

  return (
  <Box  fontFamily="SUSE" sans-serif >
   <Header/>
   <Box pt="4rem" >
   <Section/>
   <Projects/>
   <Footer/>
   </Box>
    </Box>
  )
}

export default App
