const mongoose = require("mongoose");

const AppAdminSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Base64 Image
  link: { type: String, required: true },
});

module.exports = mongoose.model("AppAdmin", AppAdminSchema);
