const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = require("./config/config");

const moviesRouter = require("./routes/movies");

const app = express();

app.use(cors());

app.use("/movies", moviesRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server Up At Port ${SERVER_PORT}`);
});
