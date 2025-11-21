# Coupon Management - Option B 
## Overview
This project implements a Coupon Management Service with full eligibility logic, discount calculation, usage-limit tracking, and best-coupon selection. It exposes REST API endpoints for creating coupons, listing coupons, finding the best eligible coupon for a user and cart, and applying coupons. The service follows a clean layered architecture (controllers → services → utils → data) and uses in-memory storage for simplicity.

**Language:
**
JavaScript (Node.js)
Framework:
Express.js (Backend API framework)
Important Libraries:
AJV → JSON schema validation
Nodemon → Development auto-restart
ReportLab (only for generating submission PDFs, not part of backend)
Thunder Client / Postman → API testing (not part of code)
**Run**
1. npm install
2. npm start
Server: http://localhost:3000

**Prerequisites**
Node.js v16+ (recommended v18 or v20)
npm (comes with Node)
VS Code (for Thunder Client)

Use Thunder Client or Postman.
POST /coupons → create coupon
GET /coupons → list coupons
POST /coupons/best → best user coupon
POST /coupons/apply → apply + track usage
