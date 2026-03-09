import CountUp from "react-countup"
import GlassCard from "../ui/GlassCard"

export default function Stats({stats}){

return(

<div className="grid md:grid-cols-4 gap-6">

{stats.map((s,i)=>(

<GlassCard key={i}>

<div className="text-4xl font-bold text-white">

<CountUp end={s.value} duration={2}/>

</div>

<p className="text-gray-300">{s.label}</p>

</GlassCard>

))}

</div>

)

}
