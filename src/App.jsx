import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from "./Header";
import Menu from "./menu";
import Footer from "./Footer";
// import Map from './Map'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        {/* <Route path="/map" element={<Map/>} /> */}
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
