import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// export no app.jsx para vc poder importar aki no main
// import { var } from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css' // min é melhor pq é menos bytes
import '@fortawesome/fontawesome-free/css/all.min.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
