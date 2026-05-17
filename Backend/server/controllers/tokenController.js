// controllers/tokenController.js

const Token = require("../models/tokenModel");



// ========================================
// CREATE TOKEN
// ========================================
const createToken = async (req, res) => {
    try {

        const {
            userName,
            mobile,
            purpose,
            serviceName,
            organizationName,
            organizationAddress,
        } = req.body;


        // FIND LAST TOKEN OF SAME SERVICE
        const lastToken = await Token.findOne({
            organizationName,
            serviceName,
        }).sort({ createdAt: -1 });


        let nextNumber = 1;

        if (lastToken) {

            const lastNumber = parseInt(
                lastToken.tokenNumber.split("-")[1]
            );

            nextNumber = lastNumber + 1;
        }


        const tokenNumber = `A-${nextNumber}`;

        const peopleAhead = nextNumber - 1;


        // CREATE TOKEN
        const token = await Token.create({
            userName,
            mobile,
            purpose,
            serviceName,
            organizationName,
            organizationAddress,
            tokenNumber,
            status: "Waiting",
        });


        res.status(201).json({
            message: "Token booked successfully",
            token,
            peopleAhead,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};



// ========================================
// GET LIVE TRACKING DATA
// ========================================
const getLiveTracking = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
            tokenNumber,
        } = req.query;



        // ALL TOKENS OF SAME SERVICE
        const tokens = await Token.find({
            organizationName,
            serviceName,
        }).sort({ createdAt: 1 });



        // CURRENT SERVING TOKEN
        const currentServing = tokens.find(
            (item) => item.status === "Serving"
        );



        // USER TOKEN
        const userToken = tokens.find(
            (item) => item.tokenNumber === tokenNumber
        );



        // PEOPLE AHEAD
        const peopleAhead = tokens.filter(
            (item) =>
                item.status !== "Completed" &&
                item.status !== "Skipped" &&
                item.tokenNumber !== tokenNumber &&
                parseInt(item.tokenNumber.split("-")[1]) <
                parseInt(tokenNumber.split("-")[1])
        ).length;



        // ESTIMATED WAIT TIME
        const estimatedWait = peopleAhead * 5;



        res.status(200).json({

            currentServing:
                currentServing?.tokenNumber || "No Active Queue",

            peopleAhead,

            estimatedWait: `${estimatedWait} mins`,

            queueProgress:
                tokens.length > 0
                    ? Math.min(
                        100,
                        Math.floor(
                            (
                                (tokens.filter(
                                    (item) =>
                                        item.status === "Completed"
                                ).length +
                                    1) /
                                tokens.length
                            ) * 100
                        )
                    )
                    : 0,



            trackingData: tokens.map((item) => ({

                token: item.tokenNumber,

                status: item.status,

                time: new Date(
                    item.createdAt
                ).toLocaleTimeString(),

            })),

            userTokenStatus: userToken?.status || "Waiting",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};



// ========================================
// UPDATE TOKEN STATUS
// ========================================
const updateTokenStatus = async (req, res) => {

    try {

        const { tokenId } = req.params;

        const { status } = req.body;


        const token = await Token.findById(tokenId);

        if (!token) {
            return res.status(404).json({
                message: "Token not found",
            });
        }


        token.status = status;

        await token.save();


        res.status(200).json({
            message: "Status updated",
            token,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// CALL NEXT TOKEN
// ========================================
const callNextToken = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
        } = req.body;


        // COMPLETE OLD SERVING TOKEN
        await Token.updateMany(
            {
                organizationName,
                serviceName,
                status: "Serving",
            },
            {
                status: "Completed",
            }
        );


        // FIND NEXT WAITING TOKEN
        const nextToken = await Token.findOne({
            organizationName,
            serviceName,
            status: "Waiting",
        }).sort({ createdAt: 1 });


        if (!nextToken) {

            return res.status(404).json({
                message: "No waiting tokens",
            });

        }


        nextToken.status = "Serving";

        await nextToken.save();


        res.status(200).json({
            message: "Next token called",
            token: nextToken,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// SKIP TOKEN
// ========================================
const skipToken = async (req, res) => {

    try {

        const { tokenId } = req.params;

        const token = await Token.findById(tokenId);

        if (!token) {

            return res.status(404).json({
                message: "Token not found",
            });

        }

        token.status = "Skipped";

        await token.save();


        res.status(200).json({
            message: "Token skipped",
            token,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// COMPLETE TOKEN
// ========================================
const completeToken = async (req, res) => {

    try {

        const { tokenId } = req.params;

        const token = await Token.findById(tokenId);

        if (!token) {

            return res.status(404).json({
                message: "Token not found",
            });

        }

        token.status = "Completed";

        await token.save();

        res.status(200).json({
            message: "Token completed",
            token,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// PAUSE QUEUE
// ========================================
const pauseQueue = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
        } = req.body;

        await Token.updateMany(
            {
                organizationName,
                serviceName,
                status: "Serving",
            },
            {
                status: "Paused",
            }
        );

        res.status(200).json({
            message: "Queue paused successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// RESUME QUEUE
// ========================================
const resumeQueue = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
        } = req.body;

        const pausedToken = await Token.findOne({
            organizationName,
            serviceName,
            status: "Paused",
        });

        if (!pausedToken) {

            return res.status(404).json({
                message: "No paused token found",
            });

        }

        pausedToken.status = "Serving";

        await pausedToken.save();

        res.status(200).json({
            message: "Queue resumed",
            token: pausedToken,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// RESET QUEUE
// ========================================
const resetQueue = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
        } = req.body;

        const query = {
            organizationName,
        };

        if (serviceName) {
            query.serviceName = serviceName;
        }

        await Token.deleteMany(query);

        res.status(200).json({
            message: "Queue reset successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// GET ALL TOKENS
// ========================================
const getAllTokens = async (req, res) => {

    try {

        const {
            organizationName,
            serviceName,
        } = req.query;


        const query = {
            organizationName,
        };

        if (serviceName) {
            query.serviceName = serviceName;
        }

        const tokens = await Token.find(query).sort({ createdAt: 1 });


        res.status(200).json(tokens);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// ========================================
// GET TOKENS BY ORGANIZATION
// ========================================
const getTokensByOrganization = async (req, res) => {

    try {

        const { organizationName } = req.params;

        const tokens = await Token.find({
            organizationName,
        }).sort({ createdAt: 1 });

        res.status(200).json({
            tokens,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    createToken,
    getLiveTracking,
    updateTokenStatus,
    callNextToken,
    skipToken,
    getAllTokens,
    completeToken,
    pauseQueue,
    resumeQueue,
    resetQueue,
    getTokensByOrganization,
};