const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


const session = require("express-session");

const passport = require("./config/passport");

app.use(
    session({
        secret: "saralgoogleauth",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());

app.use(passport.session());

const userRoutes = require("./routes/userRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const tokenRoutes = require("./routes/tokenRoutes");


app.use(passport.initialize());

app.use(passport.session());

app.use("/api/tokens", tokenRoutes);

app.use("/api/users", userRoutes);
app.use(
    "/api/organizations",
    organizationRoutes
);

app.get("/", (req, res) => {
    res.send("Saral Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 