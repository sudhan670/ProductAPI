const request = require("supertest");
const app = require("../src/app");

describe("Coupon API", () => {
    it("should generate a coupon", async () => {
        const response = await request(app)
            .post("/api/generate-coupon")
            .send({ productId: 1, validityMinutes: 15 });

        expect(response.status).toBe(200);
        expect(response.body.couponCode).toBeDefined();
    });

    it("should validate a coupon", async () => {
        // First, generate a coupon
        const generateResponse = await request(app)
            .post("/api/generate-coupon")
            .send({ productId: 1, validityMinutes: 15 });

        const { couponCode } = generateResponse.body;

        // Then, validate the coupon
        const validateResponse = await request(app)
            .post("/api/validate-coupon")
            .send({ couponCode, productId: 1, userId: 101 });

        expect(validateResponse.status).toBe(200);
        expect(validateResponse.body.discountApplied).toBe(true);
    });
});
