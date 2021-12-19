import { createTheme } from '@mui/material/styles'

const theme = createTheme
const img = require(".../.../assets/fundo.jpg");
const styling = {
    backgroundimage: `url('${img}')`,
    width:"100%",
    height:"100%",
    mode: 'dark',
    primary:{
        main: '#639EC2',
        600: '#201E1E',
        900: '#181717',
    },
    secondary:{
        main: '#8c8c8c',
      }
    }

export default theme
