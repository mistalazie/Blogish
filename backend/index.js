const router = require('./routes/index');
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());

app.use(express.json());
app.listen(3000, () => {
    console.log("Server is listening")
});

app.use('/api/v1', router );
