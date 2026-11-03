import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  console.log("CONTACT BODY =>", req.body);

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Please provide all contact details",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    console.log("CONTACT ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};