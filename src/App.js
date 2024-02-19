import React, { useContext } from "react";
import RegisterationForm from "./Components/RegisterationForm";
import StudentsData from "./Components/StudentsData";
import { ThemeProvider } from "@mui/material";
import { CustomizeFormTheme, LightModeTheme } from "./Components/Theme";
import { DarkThemeContext } from "./Context/DarkThemeProvider";

export default function App() {

  const {DarkMode} = useContext(DarkThemeContext)


  const theme = DarkMode ? CustomizeFormTheme : LightModeTheme

  // const theme = createTheme(DarkMode ? CustomizeFormTheme : )
  return (
    <>
    <ThemeProvider theme={theme} >
        <RegisterationForm />
        <StudentsData />
    </ThemeProvider>
    </>
  );
}
