import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Lodge from './pages/Lodge'
import Rooms from './pages/Rooms'
import Dining from './pages/Dining'
import Experiences from './pages/Experiences'
import Stay from './pages/Stay'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#11100d] text-[#f5f1e8]">

        <Navbar />

        <Routes>

          {/* Main */}
          <Route path="/" element={<Home />} />

          {/* Lodge */}
          <Route path="/lodge" element={<Lodge />} />

          {/* Rooms */}
          <Route path="/rooms" element={<Rooms />} />

          {/* Dining */}
          <Route path="/dining" element={<Dining />} />

          {/* Experiences */}
          <Route path="/experiences" element={<Experiences />} />

          {/* Your Stay */}
          <Route path="/stay" element={<Stay />} />

          {/* Contact / Booking */}
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App