import React from 'react';
import './App.css';
import Button from './components/Boton';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/buttons/";

function App() {
  return (
    <Button />
  )
}

export default App