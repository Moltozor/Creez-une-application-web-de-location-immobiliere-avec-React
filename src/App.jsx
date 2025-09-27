
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
//import '../../styles/App.css'

import { Home, About, Housing } from './pages'

function App() {

  const [data, setData] = useState([]);
  //console.log(data.length)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json')
        const data = await response.json()
        

        setData(data)
      } catch (error) {
        console.log('Error from ', error)
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data={data} setData={setData} />} />
          <Route path="/housing" element={<Housing />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
