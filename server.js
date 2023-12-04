const express = require("express");
const connectDb = require("./config/db_conntection");
const errorHandler = require("./middleware/error_handler");
const dotenv = require("dotenv").config();
const cors = require('cors');

connectDb();

const app = express();


/** middlewares */
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 4000;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

app.use("/api/contacts", require("./routes/contact_routes"));
app.use("/api/users", require("./routes/user_routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});