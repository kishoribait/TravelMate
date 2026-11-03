import Favorite from "../models/Favorite.js";

// ADD FAVORITE
export const addFavorite = async (req, res) => {
  try {
    const { destination } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    if (!destination) {
      return res.status(400).json({
        message: "Destination is required",
      });
    }

    const existingFavorite = await Favorite.findOne({
      user: userId,
      destination,
    });

    if (existingFavorite) {
      return res.status(400).json({
        message: "Destination already added to favorites",
      });
    }

    const favorite = await Favorite.create({
      user: userId,
      destination,
    });

    res.status(201).json({
      message: "Added to Favorites ❤️",
      favorite,
    });

  } catch (error) {
    console.log("ADD FAVORITE ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


export const getFavorites = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const favorites = await Favorite.find({
      user: userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      favorites,
    });

  } catch (error) {
    console.log("GET FAVORITES ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};


export const removeFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const favorite = await Favorite.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!favorite) {
      return res.status(404).json({
        message: "Favorite not found",
      });
    }

    res.status(200).json({
      message: "Removed from Favorites",
    });

  } catch (error) {
    console.log("REMOVE FAVORITE ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};