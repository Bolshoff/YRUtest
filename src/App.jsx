import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form/form';
import Navigation from './components/Navigation/navigation';
import Palette from './components/Palette/palette';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/form" element={<Form />} />
            <Route path="/palette" element={<Palette />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
