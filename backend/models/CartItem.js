const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: {type: Number, default: 1},
});


module.exports = mongoose.model("CartItem", CartItemSchema);