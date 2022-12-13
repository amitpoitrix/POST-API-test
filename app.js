require('dotenv');
const express = require('express');
const app = express();
// Db import
const connectDB = require('./db/connectDB');
// Routes
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Post API Test');
});

app.use('/product', productRoutes);

const port = process.env.PORT || 3002;
const start = async() => {
    try {
        // await connectDB(process.env.MONGO_URI);
        console.log('DB is connected successfully !!');
        app.listen(port, () => {
            console.log(`Server is running at Port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();