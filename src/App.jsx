import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import DetailedView from './Pages/DetailedView'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createContext } from 'react';
import './App.css';


export const DetailContext = createContext();



function App() {

  

  React.createContext();

  return (
    <BrowserRouter>
      <DetailContext.Provider  value={{}}>
        <Header/>
            <Routes>
              <Route index path="/" element={<Home/>}/>
              <Route index path="/details/:id" element={<DetailedView/>}/>
            </Routes>
      </DetailContext.Provider>
    </BrowserRouter>
  );
}

export default App;