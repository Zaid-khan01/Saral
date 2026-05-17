const express = require("express");

const router = express.Router();

const {
    registerOrganization,
    loginOrganization,
    getOrganizations,
} = require("../controllers/organizationController");

// GET ALL ORGANIZATIONS
router.get("/", getOrganizations);

// REGISTER
router.post(
    "/register",
    registerOrganization
);


// LOGIN
router.post(
    "/login",
    loginOrganization
);

module.exports = router;