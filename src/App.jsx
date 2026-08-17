import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Lodge from './pages/Lodge'
import Rooms from './pages/Rooms'
import Dining from './pages/Dining'
import Experiences from './pages/Experiences'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#11100d] text-[#f5f1e8]">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/lodge" element={<Lodge />} />

          <Route path="/rooms" element={<Rooms />} />

          <Route path="/dining" element={<Dining />} />

          <Route path="/experiences" element={<Experiences />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App