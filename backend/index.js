const express = require("express");
const cors = require("cors");
const movies = require("./db/movies.json");

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

app.listen(3002);
