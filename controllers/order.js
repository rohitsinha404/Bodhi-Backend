import ErrorHandler from "../middlewares/error.js";
import { Order } from "../models/order.js";

export const addOrder = async (req, res, next) => {
  try {
    const { shippingInfo, orderItems, user, completed, createdAt, totalPrice } =
      req.body;

    await Order.create({
      shippingInfo,
      orderItems,
      user,
      completed,
      createdAt,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Order Added Succesfully ",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const allOrders = await Order.find();

    res.status(200).json({
      success: true,
      allOrders,
    });
  } catch (error) {
    next(error);
  }
};

export const getRemOrders = async (req, res, next) => {
  try {
    const allRemOrders = await Order.find({ completed: false });

    res.status(200).json({
      success: true,
      allRemOrders,
    });
  } catch (error) {
    console.log(error);
  }
};
