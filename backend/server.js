const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta simplă
app.get("/", (req, res) => res.send("Backend-ul funcționează!"));

// Conectează baza de date
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Conexiune reușită cu baza de date"))
.catch((err) => console.log("Eroare conexiune DB:", err));

// Pornire server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server rulează pe portul ${PORT}`));
