import { Menu } from "lucide-react"

export default function Navbar({toggleSidebar}){

return(

<div className="
fixed top-0 w-full
backdrop-blur-xl
bg-white/45
border-b border-white/20
z-50
">

<div className="flex justify-between items-center px-4 py-3">

<img
src="/logo.png"
className="h-10 ml-[15px]"
/>

<button onClick={toggleSidebar}>
<Menu size={28}/>
</button>

</div>

</div>

)

}
