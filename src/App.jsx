
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, About, Housing, ErrorPage } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Housing/:id" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
