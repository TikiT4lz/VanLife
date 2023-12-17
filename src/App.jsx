import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import About from './About'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
function App() {

  return (
    <>
    <BrowserRouter>


    <NavBar/>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
    </Routes>
    <Footer />


   </BrowserRouter>
    </>
  )
}

export default App
