import { useContext } from "react"
import { PersonContext } from "./PersonContext"

export const useDetails = () => {
    const context = useContext(PersonContext)
    if(!context){
        throw new Error("No Context is here")
    }
    return context;
}