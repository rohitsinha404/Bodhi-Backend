import mongoose from "mongoose";

const schema = new mongoose.Schema({
 id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  rating: {
    rate: {
      type: Number,
      default: 3.9,
    },
    count: {
      type: Number,
      default: 120,
    },
  },
});

export const Procduct = mongoose.model("Procduct", schema);
