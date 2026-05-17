const Organization = require("../models/organizationModel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


// REGISTER ORGANIZATION
const registerOrganization = async (req, res) => {
    try {
        const {
            organizationName,
            organizationType,
            ownerName,
            email,
            phone,
            address,
            pincode,
            services,
            password,
        } = req.body;

        // CHECK EXISTING
        const existingOrganization =
            await Organization.findOne({ email });

        if (existingOrganization) {
            return res.status(400).json({
                message: "Organization already exists",
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE ORGANIZATION
        const organization = await Organization.create({
            organizationName,
            organizationType,
            ownerName,
            email,
            phone,
            address,
            pincode,
            services,
            password: hashedPassword,
        });

        // GENERATE TOKEN
        const token = jwt.sign(
            {
                id: organization._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(201).json({
            message: "Organization registered successfully",
            token,

            organization: {
                _id: organization._id,
                organizationName:
                    organization.organizationName,
                organizationType:
                    organization.organizationType,
                ownerName: organization.ownerName,
                email: organization.email,
                services: organization.services,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};



// LOGIN ORGANIZATION
const loginOrganization = async (req, res) => {
    try {
        const { email, password } = req.body;

        // FIND ORGANIZATION
        const organization =
            await Organization.findOne({ email });

        if (!organization) {
            return res.status(400).json({
                message: "Organization not found",
            });
        }

        // CHECK PASSWORD
        const isMatch = await bcrypt.compare(
            password,
            organization.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        // TOKEN
        const token = jwt.sign(
            {
                id: organization._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,

            organization: {
                _id: organization._id,
                organizationName:
                    organization.organizationName,
                organizationType:
                    organization.organizationType,
                ownerName: organization.ownerName,
                email: organization.email,
                services: organization.services,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET ALL ORGANIZATIONS
const getOrganizations = async (req, res) => {

    try {

        const organizations = await Organization.find()
            .select("-password");

        res.status(200).json({
            success: true,
            organizations,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    registerOrganization,
    loginOrganization,
    getOrganizations,
};