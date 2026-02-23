import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
import Comp7 from './components/Comp7.jsx'
import Inline from './components/Inline.jsx'
import External from './components/External.jsx'
import Global from './components/Global.jsx'
import Fontawesome from './components/Fontawesome.jsx'
import Bootstrap from "./components/Bootstrap.jsx"
import State from './components/State.jsx'
import Parent1 from './components/Parent1.jsx'
import Parent2 from './components/Parent2.jsx'
import GetEx2 from './components/GetEx2.jsx'
import GetEx1 from './components/GetEx1.jsx'
import GetEx3 from './components/GetEx3.jsx'
import GetEx4 from './components/GetEx4.jsx'
import Test1 from './components/Test1.jsx'
import PostEx1 from './components/PostEx1.jsx'



createRoot(document.getElementById('root')).render(
  <PostEx1></PostEx1>
)
