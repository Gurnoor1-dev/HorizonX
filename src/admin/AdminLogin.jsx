import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin(){

const [password,setPassword]=useState("")
const navigate=useNavigate()

function login(){

if(password==="admin123"){
navigate("/admin/dashboard")
}

}

return(

<div className="h-screen flex items-center justify-center">

<div className="glass p-10">

<h2>Admin Login</h2>

<input
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

</div>

</div>

)

}
