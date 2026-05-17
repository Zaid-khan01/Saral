const express = require("express");

const router = express.Router();
const passport = require("passport");

const {
    registerUser,
    loginUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/google/callback",

    passport.authenticate("google", {
        session: false,
        failureRedirect:
            "http://localhost:5173/login",
    }),

    (req, res) => {

        const token = req.user.token;

        const user = encodeURIComponent(
            JSON.stringify(req.user.user)
        );

        res.redirect(
            `http://localhost:5173/google-success?token=${token}&user=${user}`
        );
    }
);

module.exports = router;