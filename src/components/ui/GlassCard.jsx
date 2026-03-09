export default function GlassCard({children}){

return(
<div className="
backdrop-blur-xl
bg-white/10
border border-white/20
rounded-2xl
shadow-xl
p-6
transition
hover:scale-105
hover:shadow-blue-500/20
">

{children}

</div>
)

}
