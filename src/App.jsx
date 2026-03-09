import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"

import AdminLogin from "./admin/AdminLogin"
import AdminDashboard from "./admin/AdminDashboard"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>

<Route path="/admin" element={<AdminLogin/>}/>
<Route path="/admin/dashboard" element={<AdminDashboard/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
