# **Coupon Generation API**

This project is a Node.js-based API that provides functionality for creating, validating, and managing time-bound discount coupons. It uses Express.js for routing and a mock database for demonstration purposes.

---

## **Features**

- Generate unique, time-bound discount coupons for specific products.
- Validate coupons for a given product and user.
- Log all coupon-related requests to a mock database.
- Proper error handling for scenarios like invalid or expired coupons.
- Modular and optimized code structure for scalability.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coupon-api.git
   cd coupon-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:
   ```env
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## **API Endpoints**

### **Base URL**
```
http://localhost:3000/api
```

### **1. Generate Coupon**
- **Endpoint:** `POST /api/coupons/generate`
- **Description:** Generates a unique, time-bound coupon for a product.
- **Request Body:**
  ```json
  {
    "productId": "12345",
    "discount": 20,
    "expiresInMinutes": 30
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "coupon": "ABCD1234",
    "expiresAt": "2024-11-24T12:00:00Z"
  }
  ```

---

### **2. Validate Coupon**
- **Endpoint:** `POST /api/coupons/validate`
- **Description:** Validates a coupon for a specific product and user.
- **Request Body:**
  ```json
  {
    "productId": "12345",
    "coupon": "ABCD1234"
  }
  ```
- **Response (valid coupon):**
  ```json
  {
    "success": true,
    "message": "Coupon is valid!",
    "discount": 20
  }
  ```
- **Response (invalid/expired coupon):**
  ```json
  {
    "success": false,
    "message": "Invalid or expired coupon"
  }
  ```

---

## **File Structure**

```
coupon-api/
│
├── src/
│   ├── app.js                 # Main entry point for the Express application
│   ├── routes/
│   │   └── couponRoutes.js    # API routes for coupon operations
│   ├── services/
│   │   └── couponService.js   # Business logic for coupon operations
│   ├── database/
│   │   └── mockDatabase.js    # Mock database
│   ├── utils/
│   │   └── errorHandler.js    # Centralized error handling
│
├── tests/
│   └── coupon.test.js         # Unit tests for the API
├── package.json               # Node.js dependencies and scripts
└── README.md                  # Documentation

```

---

## **Technologies Used**

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Framework for routing and middleware.
- **Mock Database**: JSON-based mock database for logging requests.
- **Nodemon**: Utility for live reloading during development.

---

## **Error Handling**

The API implements error handling for common issues, including:
- Invalid coupon codes.
- Expired coupons.
- Missing or malformed request data.

Error responses are returned in the following format:
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## **Future Enhancements**

- Integration with a real database (e.g., MongoDB or MySQL).
- Add user authentication for secure coupon generation and validation.
- Implement rate-limiting for API requests.

---

## **Contributing**

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---
