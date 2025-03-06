import React, { createContext, ReactNode, useContext, useState } from "react"

interface person{
    gender: 'Good' | 'Bad',
    food : () => void
}

const GexX = createContext<person | undefined>(undefined)

interface PerType{
    children : ReactNode
}

export const GexXP:React.FC <PerType> = ({children}) => {

    const [gender, setGender] = useState<'Good' | 'Bad'>('Good')


    const food = () => {
       setGender(prev => prev == 'Good' ? 'Bad' : 'Good' )
    }

    return (
        <GexX.Provider value = {{gender, food}}>
            {children}
        </GexX.Provider> 
    )



}

// Custom hook to use ThemeContext
export const useTheme1 = (): person => {
  const context = useContext(GexX);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};