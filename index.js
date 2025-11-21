/**
 * Coupon Management - Option A (Full eligibility)
 * Run:
 *   npm install
 *   npm start
 */
const express = require('express');
const bodyParser = express.json();
const couponRouter = require('./controllers/couponController');

const app = express();
app.use(bodyParser);

app.get('/', (req, res) => res.send('Coupon Management Service'));

app.use('/coupons', couponRouter);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Coupon service running on port ${PORT}`));
