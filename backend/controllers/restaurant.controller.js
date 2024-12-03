import mongoose from "mongoose";
import Restaurant from "../models/restaurant.model.js";

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json({ success: true, data: restaurants });
  } catch (error) {
    console.log("error in fetching restaurants:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createRestaurant = async (req, res) => {
  const restaurant = req.body; // user will send this data

  if (!restaurant.name || !restaurant.price || !restaurant.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newRestaurant = new Restaurant(restaurant);

  try {
    await newRestaurant.save();
    res.status(201).json({ success: true, data: newRestaurant });
  } catch (error) {
    console.error("Error in Create restaurant:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateRestaurant = async (req, res) => {
  const { id } = req.params;

  const restaurant = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Restaurant Id" });
  }

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      restaurant,
      {
        new: true,
      }
    );
    res.status(200).json({ success: true, data: updatedRestaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Restaurant Id" });
  }

  try {
    await Restaurant.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Restaurant deleted" });
  } catch (error) {
    console.log("error in deleting restaurant:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
