import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider,ColorModeScript,theme } from '@chakra-ui/react'
import ColorModeSwitchers from "./ColorModeSwitcher";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <ColorModeSwitchers />
    <App />
  </ChakraProvider>
    
  </React.StrictMode>,
)
