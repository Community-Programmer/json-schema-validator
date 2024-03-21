import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tour from './Pages/Tour/Tour';
import './App.scss'


const App: React.FC = () => {
    return (
        <> 
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tour' element={<Tour/>}/>
        </Routes>
        </>
      )
};

export default App;
