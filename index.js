require("dotenv").config();
require('./models/User.model')

const cors=require('cors')
const userRoutes=require('./routes/User.routes')

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI + 'tienda');

const port = process.env.PORT;

const corsOptions={
    origin:process.env.FRONTEND_URL,
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/users',userRoutes) //indica que cuando se escribe Users en la ruta de la página, lo tira al enrutador respectivo.

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta get",
  });
});

app.post("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta post",
    detail: "",
  });
});

app.put("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta put",
  });
});
app.delete("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta delete",
  });
});

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`);
});
