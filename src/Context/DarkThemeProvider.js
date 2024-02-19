import React, {  createContext, useState } from 'react'


export const DarkThemeContext = createContext()

export default function DarkThemeProvider({children}) {

    const [DarkMode ,setDarkMode] = useState(false)
  return (
    <>
    <DarkThemeContext.Provider  value={{DarkMode , setDarkMode}} >
        {children}
    </DarkThemeContext.Provider>
      
    </>
  )
}
