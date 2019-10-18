calculateFlightMovie = (flightTime, moviesList) => {
  let movieObj = {};
  isValidMovie = false;
  moviesList.forEach((movie, index) => {
    let diff = flightTime - movie;

    if (diff in movieObj && index != movieObj[movie]) {
      isValidMovie = true;
    }
    movieObj[movie] = index;
  });

  return isValidMovie;
};

console.log(calculateMovie(180, [120, 20, 40, 70]));
// console.log(calculateMovie(160, [80, 20, 40, 80]));
console.log(calculateMovie(195, [75, 120, 65, 140, 80, 95, 45, 72]));
