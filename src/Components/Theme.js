import {createTheme} from '@mui/material'

export const LightModeTheme = createTheme({
  palette:{
    primary:{
      main:"#484b6a"
    },
    text:{
      primary:"#8a8ca2"
    }
  },
})




 export const CustomizeFormTheme = createTheme({
    palette:{
      primary:{
        main:"#8a8ca2"
      },
      mode:"dark",
      success:{
        main:"#8a8ca2"
      },
      text:{
        primary:"#8a8ca2"
      },
      background: {
        default: "#212121",
        paper: "#303030",
      },
    }
  })


