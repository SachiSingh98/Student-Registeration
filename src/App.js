import React, { useContext } from "react";
import RegisterationForm from "./Components/RegisterationForm";
import StudentsData from "./Components/StudentsData";
import { ThemeProvider } from "@mui/material";
import { CustomizeFormTheme, LightModeTheme } from "./Components/Theme";
import { DarkThemeContext } from "./Context/DarkThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  const { DarkMode } = useContext(DarkThemeContext);

  const theme = DarkMode ? CustomizeFormTheme : LightModeTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RegisterationForm />
        <StudentsData />
      </ThemeProvider>
    </>
  );
}
