import React from 'react';
import './App.css';
import Button from './components/Boton';
import axios from 'axios';
axios.defaults.baseURL = "https://buttons-counter-app-production.up.railway.app/buttons/";

function App() {
  return (
    <Button />
  )
}

export default App