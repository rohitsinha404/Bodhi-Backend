import mongoose from "mongoose";

const schema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  cart: [
    {
      description: {
        type: String,
        required: true,
      },

      id: {
        type: Number,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        rate: {
          type: Number,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
      __v: {
        required: false,
        type: Number,
      },
      _id: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Order = mongoose.model("Order", schema);
