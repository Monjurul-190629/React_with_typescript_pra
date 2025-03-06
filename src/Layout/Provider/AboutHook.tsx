import { useContext } from "react"
import { AboutContext } from "./AboutContext"

const useAbout = () => {
    const context = useContext(AboutContext);
    if(!context){
        throw new Error("New Hook or Context is not created")
    }
    return context;
}

export default useAbout;