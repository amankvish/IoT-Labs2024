const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/iotlabs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Connection error', err.message);
});

app.get('/', (req, res) => {
    res.send('IoT Labs API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
