// routes/tokenRoutes.js

const express = require("express");

const router = express.Router();

const {
    createToken,
    getTokensByOrganization,
    getAllTokens,
    callNextToken,
    completeToken,
    skipToken,
    pauseQueue,
    resumeQueue,
    resetQueue,
} = require("../controllers/tokenController");


// CREATE TOKEN
router.post("/create", createToken);


// GET TOKENS BY ORGANIZATION
router.get(
    "/organization/:organizationName",
    getTokensByOrganization
);


// GET ALL TOKENS
router.get("/all", getAllTokens);


// CALL NEXT
router.put("/call-next", callNextToken);


// COMPLETE
router.put("/complete/:tokenId", completeToken);


// SKIP
router.put("/skip/:tokenId", skipToken);


// PAUSE QUEUE
router.put(
    "/pause",
    pauseQueue
);

// RESUME QUEUE
router.put(
    "/resume",
    resumeQueue
);

// RESET QUEUE
router.delete(
    "/reset",
    resetQueue
);

module.exports = router;