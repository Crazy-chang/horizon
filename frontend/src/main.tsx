import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './style.css'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Theme
      hasBackground={false}
      radius="medium"
      appearance="dark"
      accentColor="purple"
    >
      <App />
    </Theme>
  </React.StrictMode>
)
