import React from 'react';
import './App.css';
import Button from './components/Boton';
import axios from 'axios';
import backURL from './backURL'
axios.defaults.baseURL = backURL;

function App() {
  return (
    <Button />
  )
}

export default App