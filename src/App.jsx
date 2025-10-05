
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, About, Housing } from './pages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
