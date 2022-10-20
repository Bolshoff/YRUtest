import React from 'react';
import './App.css';
// import Form from './components/Form/form';
import Navigation from './components/Navigation/navigation';
import Palette from './components/Palette/palette';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app">
        <Navigation />
        {/* <Form /> */}
        <Palette />
      </div>
    </div>
  );
}

export default App;
