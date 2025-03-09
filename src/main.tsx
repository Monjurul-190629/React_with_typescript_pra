import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from '../src/Router/Routes'


import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './Layout/Provider/ThemeContext'
import { GexXP } from './Layout/Provider/NormalContext'
import { PersonProvider } from './Layout/Provider/PersonContext'
import AboutProvider from './Layout/Provider/AboutContext'
import { AuthProvider } from './Layout/Provider/AuthProvider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutProvider>
      <PersonProvider>
        <ThemeProvider>
          <GexXP>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </GexXP>
        </ThemeProvider>
      </PersonProvider>
    </AboutProvider>
  </StrictMode>
)
