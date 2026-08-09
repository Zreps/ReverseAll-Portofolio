import { StrictMode } from 'react'
import { HelmetProvider} from 'react-helmet-async'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './index.css'
import App from './App.jsx'

export const createApp = ViteReactSSG(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
) 
