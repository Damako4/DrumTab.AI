import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import icon from './assets/images/icon.svg'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


// Global MUI dark theme with rounded corners and Roboto
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2b2b2bff' },
    secondary: { main: '#f48fb1' },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    }
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'Segoe UI, "Helvetica Neue", Arial, sans-serif',
    fontWeightMedium: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none'
        }
      }
    },
    MuiCard: {
      defaultProps: { elevation: 6 },
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundImage: 'none'
        }
      }
    },
    MuiButton: {
      defaultProps: { variant: 'contained' },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: { borderRadius: 0 }
      }
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <AppBar position="fixed" color="primary" elevation={4} enableColorOnDark sx={{
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16
        }}>
          <Toolbar>
            <img src={icon} alt="App Icon" style={{ fill: "white",height: 32, marginRight: 12 }} />
            <div style={{ flexGrow: 1 }}/>
            <Button color="inherit" sx={{ mr: 2 }}>Settings</Button>
            <Avatar sx={{ color: "white", bgcolor: "grey" }}>D</Avatar>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <App />
      </>
    </ThemeProvider>
  </StrictMode>
)
