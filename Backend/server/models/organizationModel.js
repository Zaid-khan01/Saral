const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
    {
        organizationName: {
            type: String,
            required: true,
        },

        organizationType: {
            type: String,
            required: true,
            enum: [
                "Hospital",
                "Ration Shop",
                "Government Office",
                "Service Center",
            ],
        },

        ownerName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        phone: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        pincode: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },


        services: [
            {
                type: String,
                required: true,
            }
        ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Organization",
    organizationSchema
);