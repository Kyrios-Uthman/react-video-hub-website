import { Button } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Headers from "./components/Headers"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Video from "./components/Video"
import Upload from "./components/Upload"
import Login from "./components/Login"
import Signup from "./components/Signup"


function App() {

  return (
      <>
        <BrowserRouter>
        <Headers />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/videos" element={<Video />} />
           <Route path="/upload" element={<Upload />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </>
  )
}

export default App
