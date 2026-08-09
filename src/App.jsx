import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portofolio from './pages/Index.jsx'
import Cafeweb from './pages/Cafeweb.jsx'
import Cashier from './pages/Cashier.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portofolio />} />
        <Route path="/cafe" element={<Cafeweb />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="*" element={<Portofolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
