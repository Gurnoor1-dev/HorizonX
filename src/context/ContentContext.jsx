import { createContext, useState, useEffect } from "react"
import defaultContent from "../data/defaultContent.json"

export const ContentContext = createContext()

export function ContentProvider({children}){

const [content,setContent] = useState(defaultContent)

useEffect(()=>{

const saved = localStorage.getItem("horizonx_content")

if(saved){
setContent(JSON.parse(saved))
}

},[])

function updateContent(newContent){

setContent(newContent)

localStorage.setItem(
"horizonx_content",
JSON.stringify(newContent)
)

}

return(

<ContentContext.Provider
value={{content,updateContent}}
>

{children}

</ContentContext.Provider>

)

}
