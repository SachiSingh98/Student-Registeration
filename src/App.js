import React from 'react'
import RegisterationForm from './Components/RegisterationForm'
import StudentsData from './Components/StudentsData'
import DarkThemeProvider from './Context/DarkThemeProvider'

export default function App() {
  return (
    <>
    <DarkThemeProvider>
    <RegisterationForm/>
    <StudentsData/>
    </DarkThemeProvider>
    </>
  )
}
