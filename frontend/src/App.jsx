import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Upload from "./pages/Upload"
import Study from './pages/Study';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        {/* Скрытые маршруты (доступны по ссылке внутри страниц) */}
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />

        {/* Динамический маршрут с параметром :id */}
        <Route path="/cards/:id" element={<Study />} />
        <Route path="/study/:id" element={<Study />} />
        
        {/* Обработка несуществующих страниц (404) */}
        <Route path="*" element={<h2 style={{textAlign:'center'}}>404 - Page Not Found</h2>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App