import { Route, Routes } from 'react-router'
import Home from './Views/Home'
import Pricing from './Views/Pricing'
import Contact from './Views/Contact'
import NavBar from './Components/FondamentalAppComp/Navbar.tsx'

function App() {
  return (
    <div className='w-screen bg-backGround'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
