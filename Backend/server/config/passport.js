const passport = require("passport");

const GoogleStrategy =
    require("passport-google-oauth20").Strategy;

const jwt = require("jsonwebtoken");

const User = require("../models/User");

passport.use(
    new GoogleStrategy(
        {
            clientID:
                process.env.GOOGLE_CLIENT_ID,

            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET,

            callbackURL:
                "http://localhost:5000/api/users/google/callback",
        },

        async (
            accessToken,
            refreshToken,
            profile,
            done
        ) => {

            try {

                const email =
                    profile.emails[0].value;

                let user =
                    await User.findOne({
                        email,
                    });

                if (!user) {

                    user = await User.create({
                        fullName:
                            profile.displayName,

                        email,

                        phone: "Not Provided",

                        password:
                            "GOOGLE_AUTH_USER",
                    });
                }

                const token = jwt.sign(
                    {
                        id: user._id,
                    },

                    process.env.JWT_SECRET,

                    {
                        expiresIn: "7d",
                    }
                );

                return done(null, {
                    token,
                    user,
                });

            } catch (error) {

                done(error, null);

            }
        }
    )
);

module.exports = passport;