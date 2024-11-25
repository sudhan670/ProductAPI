const express = require("express");
const { generateCoupon, validateCoupon } = require("../services/couponServices");

const router = express.Router();

// Generate a unique coupon
router.post("/generate-coupon", (req, res, next) => {
    try {
        const { productId, validityMinutes } = req.body;
        const result = generateCoupon(productId, validityMinutes);
        res.status(200).json({ message: "Coupon generated", ...result });
    } catch (error) {
        next(error);
    }
});

// Validate a coupon
router.post("/validate-coupon", (req, res, next) => {
    try {
        const { couponCode, productId, userId } = req.body;
        const result = validateCoupon(couponCode, productId, userId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
