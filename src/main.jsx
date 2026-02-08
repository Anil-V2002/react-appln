import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
import Comp7 from './components/Comp7.jsx'
import State from './components/State.jsx'
import Inline from './components/Inline.jsx'
import External from './components/External.jsx'
import Global from './components/Global.jsx'
import Fontawesome from './components/Fontawesome.jsx'
import Bootstrap from "./components/Bootstrap.jsx"


createRoot(document.getElementById('root')).render(
  <Bootstrap></Bootstrap>
)
