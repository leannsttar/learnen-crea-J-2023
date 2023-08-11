import { useContext } from "react"
import { SessionContext } from "./Session.jsx"

const useSession = ()=>{
    return useContext(SessionContext)
}
export {useSession}