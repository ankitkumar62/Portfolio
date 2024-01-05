import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import './App.css'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './components/contact'
import Footer from './components/Footer'


export default function App() {
  return (
   
   <BrowserRouter>
   <Header/>
   <Nav/>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
       </Routes>
       {/* <Footer/> */}
   </BrowserRouter>
  
  )
}

