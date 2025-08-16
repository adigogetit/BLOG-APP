import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import Home from './pages/home'
import About from './pages/about'
import Contact_us from './pages/Contact_us'

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element ={<Home/>}/>
            <Route path='about' element ={<About/>}/>
            <Route path='contact_us' element ={<Contact_us/>}/>
        </Route>    
    ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App

