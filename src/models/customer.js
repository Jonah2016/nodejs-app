const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  industry: String,
  favoriteColors: Array,
});

module.exports = mongoose.model("customer", customerSchema);
