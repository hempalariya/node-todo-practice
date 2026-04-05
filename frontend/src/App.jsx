import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'


export default function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path= '*' element = {<PageNotFound/>}/>
    </Routes>
  )
}
