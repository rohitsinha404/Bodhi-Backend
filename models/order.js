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
      },

      id: {
        type: Number,
      },

      image: {
        type: String,
      },
      title: {
        type: String,
      },
      price: {
        type: Number,
      },
      rating: {
        rate: {
          type: Number,
        },
        count: {
          type: Number,
        },
      },
      __v: {
        type: Number,
      },
      _id: {
        type: String,
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
