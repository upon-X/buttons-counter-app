import "./App.css";
import Button from "./components/Boton";
import axios from "axios";
axios.defaults.baseURL = "https://back-btncounterapp.vercel.app/buttons/";
// axios.defaults.baseURL = "http://localhost:3000/buttons/";

function App() {
  return <Button />;
}

export default App;
