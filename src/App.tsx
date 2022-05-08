import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import { TodoView } from './views/TodoView'
import { ListView } from './views/ListView'
import { HomeView } from './views/HomeView'
import { CommonHeader } from './layout/CommonHeader'

function App () {
  return (
        <div className="App">
            <Routes>
                <Route path="/" element={<TodoView/>}/>
                <Route path="/list" element={<ListView/>}/>
                <Route path="/home" element={
                    <main>
                        <CommonHeader/>
                        <HomeView/>
                    </main>
                }>
                    <Route path="" element={<HomeView/>}/>
                </Route>
            </Routes>
        </div>
  )
}

export default App
