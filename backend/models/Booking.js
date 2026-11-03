import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        from: {
            type: String,
            required: true,
        },

        destination: {
            type: String,
            required: true,
        },

        date: {
            type: String,
            required: true,
        },

        travelers: {
            type: Number,
            required: true,
        },

        totalPrice: {
            type: Number,
            required: true,
        },

        costPerPerson: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Booking", bookingSchema);
