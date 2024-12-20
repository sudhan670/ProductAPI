const express = require("express");
const bodyParser = require("body-parser");
const couponRoutes = require("./routes/touchRoutes");
const errorHandler = require("./utils/errorHandler");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", couponRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
