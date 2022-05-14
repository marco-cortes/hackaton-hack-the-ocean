const express = require('express');
const dbConnection = require("./database/config");
const cors = require('cors');

require("dotenv").config();

console.log(process.env.PORT)

const app = express();

app.use(cors());

dbConnection();

app.use(express.static("public"));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/destinations", require("./routes/destinations"));
app.use("/api/comments", require("./routes/comments"));
app.use("/api/reports", require("./routes/reports"));
app.use("/api/recommendations", require("./routes/recommendations"));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
