const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  id:{
    type: String,
    unique: true,
    auto: true,
    immutable: true,
  },        
  name: {
    type: String,
    unique: true,
    required: true,
    sparse: true
  },
  image: {
    type: String,      
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  latitude: {
    type: String,      
  },
  longitude: {
    type: String,      
  },
  feedbacks: [
       {
          feedback: {
             type: String,      
          },
          rate: {
             type: Number,
             min: 0,
             max: 5,                      
          }
       }   
  ]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

