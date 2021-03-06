const path = require("path");
const express = require("express")
const apiRoutes = require("./api");
let router = express.Router()

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
