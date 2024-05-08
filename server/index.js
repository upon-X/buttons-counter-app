require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
let buttons = [];
let lastButtonId = 0;

app.get("/buttons", (req, res) => {
  res.json(buttons);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Creamos los botones
app.post("/buttons", (req, res) => {
  const newButton = {
    id: ++lastButtonId,
    text: req.body.text,
    count: 0,
  };
  buttons.push(newButton);
  res.json(newButton);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Obtenemos el click de cada boton para mandarlo nuevamente al front y de aca se puede llegar a tener un registro
app.post("/buttons/click/:id", (req, res) => {
  const buttonId = parseInt(req.params.id);
  const button = buttons.find((btn) => btn.id === buttonId);
  if (button) {
    button.count++;
    res.json(button);
  } else {
    //Manejo de errores muy pobre
    res.status(404).json({ error: "Button not found" });
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Esto sirve para eliminar los botones
app.delete("/buttons/:id", (req, res) => {
  const buttonId = parseInt(req.params.id);
  const buttonIndex = buttons.findIndex((btn) => btn.id === buttonId);

  if (buttonIndex !== -1) {
    buttons.splice(buttonIndex, 1);
    if (buttons.length === 0) {
      // Si no quedan botones, reinicia el contador de IDs
      lastButtonId = 0;
    }
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Button not found" });
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
