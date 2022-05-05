require('dotenv').config();
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const cors = require('cors');

const app = express();

// Routes
const userRouter = require('./userRoutes');

// Middleware
// app.use(express.json());
app.use(cors());
app.use('/', expressStaticGzip('client/dist', { enableBrotli: true }));

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Connected to express, listening on Port: ${process.env.PORT}`);
});
