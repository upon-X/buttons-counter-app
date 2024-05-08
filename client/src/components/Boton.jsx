import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Button() {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const buttonData = async () => {
      try {
        const response = await axios.get("");
        setButtons(response.data);
      } catch (error) {
        console.error("Error fetching buttons", error);
      }
    };
    buttonData();
  }, []);

  const handleCreateButton = async () => {
    try {
      const response = await axios.post("");
      setButtons([...buttons, response.data]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleButtonClick = async (id) => {
    try {
      const response = await axios.post(`click/${id}`);
      const updatedButtons = buttons.map((btn) =>
        btn.id === id ? response.data : btn
      );
      setButtons(updatedButtons);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteButton = async (id) => {
    try {
      const response = await axios.delete(`${id}`);
      if (response.data.success) {
        const updatedButtons = buttons.filter((btn) => btn.id !== id);
        setButtons(updatedButtons);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Button Counter App</h1>
      <div className="create_btns">
        <button onClick={handleCreateButton}>Create Button</button>
      </div>
      <div className="container_btns">
        {buttons.map((button) => (
          <div className="btn_unique" key={button.id}>
            <button onClick={() => handleButtonClick(button.id)}>
              {`Button 
                            ${button.id}:
                            (${button.count} clicks)`}
            </button>
            <button onClick={() => handleDeleteButton(button.id)}> X </button>
          </div>
        ))}
      </div>
    </div>
  );
}
