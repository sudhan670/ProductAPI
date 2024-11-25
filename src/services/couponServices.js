const { v4: uuidv4 } = require("uuid");
const dayjs = require("dayjs");
const { products, coupons } = require("../database/mockDatabase");

function generateCoupon(productId, validityMinutes) {
    const product = products.find((p) => p.productId === productId);
    if (!product) {
        throw new Error("Product not found");
    }

    const couponCode = uuidv4().slice(0, 8).toUpperCase();
    const expirationDate = dayjs().add(validityMinutes, "minute").toISOString();

    const newCoupon = {
        couponCode,
        productId,
        expirationDate,
        used: false,
        userId: null,
    };
    coupons.push(newCoupon);

    return { couponCode, expirationDate };
}

function validateCoupon(couponCode, productId, userId) {
    const coupon = coupons.find((c) => c.couponCode === couponCode);
    if (!coupon) {
        throw new Error("Coupon not found");
    }

    if (coupon.productId !== productId) {
        throw new Error("Coupon is not valid for this product");
    }

    if (coupon.used) {
        throw new Error("Coupon already used");
    }

    if (dayjs().isAfter(coupon.expirationDate)) {
        throw new Error("Coupon expired");
    }

    coupon.used = true;
    coupon.userId = userId;

    return { message: "Coupon validated successfully", discountApplied: true };
}

module.exports = { generateCoupon, validateCoupon };
