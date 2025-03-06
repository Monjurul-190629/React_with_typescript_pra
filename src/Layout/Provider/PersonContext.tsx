import React, { createContext, ReactNode } from "react"

interface Person{
    name : string,
    roll : number,
    password ?: string
}


export const PersonContext = createContext<Person | undefined>(undefined);

interface ContextProps{
    children: ReactNode
}

export const PersonProvider:React.FC <ContextProps> = ({children}) => {
     const name = "Monjurul";
     const roll= 190629;
     

     const Details : Person = {
        name, 
        roll,
        
     }
     console.log(Details)
     return (
        <PersonContext.Provider value = {Details}>
            {children}
        </PersonContext.Provider>
     )
}