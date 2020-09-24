const router = require("express").Router();
const movies = require("../db/movies.json");

router.get("/", (req, res) => {
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

module.exports = router;
