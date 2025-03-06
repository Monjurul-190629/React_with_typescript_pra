import React, { createContext, ReactNode } from "react"

interface About{
    company : string,
    serial : number,
    year : number
}

export const AboutContext = createContext<About | undefined>(undefined)


interface AboutProps{
    children : ReactNode
}


const AboutProvider : React.FC <AboutProps> = ({children}) =>{
    const About1 : About = {
        company : "XYZ",
        serial : 123,
        year : 2027
    }
    return (
        <AboutContext.Provider value = {About1}>
            {children}
        </AboutContext.Provider>
    )
}

export default AboutProvider;