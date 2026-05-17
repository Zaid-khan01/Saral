const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },

        mobile: {
            type: String,
            required: true,
        },

        purpose: {
            type: String,
        },

        serviceName: {
            type: String,
            required: true,
        },

        organizationName: {
            type: String,
            required: true,
        },

        organizationAddress: {
            type: String,
        },

        tokenNumber: {
            type: String,
            required: true,
        },

        status: {
            type: String,

            enum: [
                "Waiting",
                "Serving",
                "Completed",
                "Skipped",
                "Paused",
            ],

            default: "Waiting",
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Token",
    tokenSchema
);