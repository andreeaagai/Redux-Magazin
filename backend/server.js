const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const CartItem = require(".//models/CartItem");
require("dotenv").config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta simplă
app.post("/cart", async(req, res) => {
  try {
    const {name, price} = req.body;

    const existingItem = await CartItem.findOne({name});
    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newItem = new CartItem({name, price, quantity: 1});
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/cart", async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

app.delete("/cart/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Produs șters din cart" });
});


// Conectează baza de date
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conexiune reușită cu baza de date"))
  .catch((err) => console.log("Eroare conexiune DB:", err));


// Pornire server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server rulează pe portul ${PORT}`));
