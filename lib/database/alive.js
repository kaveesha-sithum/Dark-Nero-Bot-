const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  text: { type: String, default:"Im Online , How can i help you" },
  get: { type: String, default:"I AM SHENU QUEEN , How can i help you"},
  url: { type: String, default:""},
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
});

const alive =mongoose.model("alive", Alive)
module.exports = { alive }




