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
    const idgen = () => Math.floor(Math.random() * 900000) + 100000;
    const id = idgen();

    await Procduct.create({
      id,
      title,
      description,
      price,
      image,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Item Added Succesfully  1",
      id: id,
    });
  } catch (error) {
    next(error);
  }
};
