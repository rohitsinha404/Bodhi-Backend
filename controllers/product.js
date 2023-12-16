import ErrorHandler from "../middlewares/error.js";
import { Procduct } from "../models/product.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Procduct.find();

    res.status(200).json({
      success: true,
      allProducts,
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const { title, description, price, image, rating } = req.body;

    await Procduct.create({
      title,
      description,
      price,
      image,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Item Added Succesfully ",
    });
  } catch (error) {
    next(error);
  }
};
