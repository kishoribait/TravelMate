import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  console.log("BOOKING BODY =>", req.body);
  console.log("LOGGED IN USER =>", req.user);

  try {
    const {
      from,
      destination,
      date,
      travelers,
      totalPrice,
      costPerPerson,
    } = req.body;

    const userId = req.user?.userId;

    if (
      !userId ||
      !from ||
      !destination ||
      !date ||
      !travelers ||
      !costPerPerson ||
      !totalPrice
    ) {
      return res.status(400).json({
        message: "Please provide all booking details",
      });
    }

    const booking = await Booking.create({
      user: userId,
      from,
      destination,
      date,
      travelers: Number(travelers),
      costPerPerson: Number(costPerPerson),
      totalPrice: Number(totalPrice),
    });

    res.status(201).json({
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {
    console.log("CREATE BOOKING ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const userId = req.user?.userId;

    console.log("LOGGED IN USER ID =>", userId);

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const bookings = await Booking.find({
      user: userId,
    }).sort({ createdAt: -1 });

    console.log("FOUND BOOKINGS =>", bookings);

    res.status(200).json({
      bookings,
    });

  } catch (error) {
    console.log("GET BOOKINGS ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const booking = await Booking.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      message: "Booking deleted successfully",
    });

  } catch (error) {
    console.log("DELETE BOOKING ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};



export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("UPDATE ID =>", id);
    console.log("UPDATE BODY =>", req.body);

    const booking = await Booking.findOne({
      _id: id,
      user: req.user?.userId,
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    booking.from = req.body.from;
    booking.date = req.body.date;

    const travelers = Number(req.body.travelers);

    if (!travelers || travelers < 1) {
      return res.status(400).json({
        message: "Invalid travelers",
      });
    }

    booking.travelers = travelers;


    const costPerPerson = Number(booking.costPerPerson);

    if (!costPerPerson || Number.isNaN(costPerPerson)) {
      return res.status(400).json({
        message: "Cost per person is missing",
      });
    }

    booking.costPerPerson = costPerPerson;

    booking.totalPrice = costPerPerson * travelers;

    await booking.save();

    console.log("UPDATED BOOKING =>", booking);

    res.status(200).json({
      message: "Booking Updated Successfully",
      booking,
    });

  } catch (error) {
    console.log("UPDATE BOOKING ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};