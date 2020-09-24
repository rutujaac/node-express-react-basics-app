const express = require("express");
const cors = require("cors");
const movies = require("./db/movies.json");
const { SERVER_PORT } = require("./config/config");

const app = express();

app.use(cors());

app.get("/movies", (req, res) => {
  console.log(req.params.keyword);
  let filteredMovies = movies.filter(
    (movie) => movie.title.toLowerCase().indexOf(req.query.keyword) !== -1
  );
  console.log(filteredMovies);
  if (filteredMovies.length == 0) {
    res.send({ movies });
  } else {
    res.send({ filteredMovies });
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server Up At Port ${SERVER_PORT}`);
});
