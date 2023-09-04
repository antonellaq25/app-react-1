import { useState } from 'react'


import {NavHome } from './components/NavHome';
import {Home } from './components/Home';
import { Footer } from './components/Footer';
import { Cities } from './pages/Cities';
import  CityDetails  from './pages/CityDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import UnderConstruction from './components/UnderConstruction';


const router = createBrowserRouter([
  {
      path:'/cities', element:<Cities />

    },
    {
      path:'/', element:<Home />
    },
    {
      path: '/citydetails/:cityName', 
      element: <CityDetails />
    },
    {
      path: '/city/:cityName', 
      element: <UnderConstruction />
    }
    
])

function App() {
  

  return (
    <>
      
      <NavHome />
      <RouterProvider router={router}></RouterProvider>
      
      <Footer />
      </>
    
  )
}

export default App;
