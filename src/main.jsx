import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'

const appRouter=createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Error/>,
  children:[{
    path:'/home',
    element:<Home/>
  }]
}

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={appRouter}/>
    
  </StrictMode>
)
