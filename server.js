const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', eventRoutes);

// server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
