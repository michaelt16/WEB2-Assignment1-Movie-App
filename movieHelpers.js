
function Movie (details,credits,keywords){
  this.id = details.id
  this.title = details.title
  

  this.img = details.poster_path

   if (details.vote_average =="0"){
     this.rating = 0
  }else{
    this.rating = details.vote_average
  }
  let genreArr = []


  if (details.genres ==null){
    this.genre = "N/A"
  }else{
  
  details.genres.forEach((genre)=>{
   
    genreArr.push(genre.name)
  })
  }
  this.genre = genreArr


  if (details.release_date ==null){
    this.date = 0
  }else{
    this.date = details.release_date
  }
  
  this.imdb_id = details.imdb_id

  this.overview = details.overview
  this.vote_count = details.vote_count
  let companyArr =[]

  details.production_companies.forEach((companies)=>{
    companyArr.push(companies)
  })

  this.companies = companyArr

  let countriesArr =[]
  details.production_countries.forEach((countries)=>{
    countriesArr.push(countries)
  })

  this.countries = countriesArr
  this.tagline = details.tagline
  this.runtime =details.runtime
  this.revenue = details.revenue
  this.budget = details.budget
  this.popularity = details.popularity
  


  
  

  let castArr =[]

  credits.cast.forEach((cast)=>{
    castArr.push(cast)
  })

  this.cast = castArr

  let crewArr = []

  credits.crew.forEach((crew)=>{
    crewArr.push(crew)
  })
  this.crew = crewArr

  this.keywords = keywords.keywords
  



  



}




















































// // This file holds functions that are useful for dealing with movies.
// // While in the first few milestones I am shoving you folks in a certain
// // direction here, in later ones you'll have free reign to redesign things.

// // FEEL FREE TO DELETE THESE COMMENTS ONCE YOU ARE DONE DOING THEM

// // TODO 1
// //
// // Create a variable/constant that holds an array consisting of the JavaScript
// // objects given in JSON format in movie-details.json.

// const movieDetails = JSON.parse(movieDetail);

// // TODO 2
// //
// // Create a variable/constant that holds an array consisting of the JavaScript
// // objects given in JSON format in credits.json.

// const credits = JSON.parse(credit);

// // TODO 3
// //
// // Create a variable/constant that holds an array consisting of the JavaScript
// // objects given in JSON format in keywords.json.

// const keywords = JSON.parse(keyword);

// // TODO 4
// //
// // Create a constructor function called Movie that takes in the id for a Movie
// // that you want to create.
// //
// // Using the consts/variables from TODO 1~3 (they're in scope, right?), grab
// // the appropriate details, credits, and keywords for the given id and use them
// // to create the required methods mentioned next.
// //
// // Objects created from this constructor must have at least the following
// // methods, though you will want to create additional ones for later use!
// //
// //   1. title(), which returns the title of this movie
// //
// //   2. keywords(), which returns an array of keywords (just the names, not the ids)
// //      for this movie
// //
// //   3. cast(), which returns an array of cast members for this movie. You can
// //      decide what a "cast member" is, but obviously whatever you decide must
// //      have at least the cast member's real name and the name of the character
// //      they play in the movie!
// //
// //   4. mobileSizePoster(), which returns the URL for the w185 size poster for
// //      this movie
// //
// //   5. genres(), which returns an array of genres (just the names, not the ids)
// //      for this movie
// //
// // All methods must use appropriate array methods (if applicable) to implement the
// // desired behaviour, and at least one arrow function must be used.

// function Movie(movieId) {
//   this.movieId = movieId;

//   let movie = movieDetails.find((movies) => movies.id == movieId);

//   //This will return the title of the movie
//   this.title = function () {
//     return movie.title;
//   };

//   this.year = function () {
//     return movie.release_date.substring(0, 4);
//   };

//   this.rating = function () {
//     return movie.vote_average;
//   };

//   //returns an array of keywords (just the names and not ids)
//   this.keywords = function () {
//     let words = keywords.find((movies) => movies.id == movieId);
//     let movieKey = words.keywords;
//     let movieKeyWords = movieKey.map((keyword) => keyword.name);

//     return movieKeyWords;
//   };

//   // this.crew = function(){

//   //   let movieCastId = credits.find(movies => movies.id== movieId);

//   //   let movieCrew = movieCastId.crew;

//   //   let crew = movieCrew.map(movies => ({

//   //     department: movies.department,
//   //     job: movies.job,
//   //     name: movies.name,

//   //   }));

//   //   return crew;

//   // }

//   //returns an array of the cast members must have their real name and who they play
//   this.cast = function () {
//     let movieCastId = credits.find((movies) => movies.id == movieId);

//     let movieCast = movieCastId.cast;

//     let cast = movieCast.map((movies) => ({
//       name: movies.name,
//       original_name: movies.orginal_name,
//       character: movies.character,
//     }));

//     return cast;
//   };

//   this.mobileSizePoster = function () {
//     let movie = movieDetails.find((movies) => movies.id == movieId);

//     return `https://www.themoviedb.org/t/p/w185/${movie.poster_path}`;
//   };

//   this.genre = function () {
//     let movieGenre = movie.genres;

//     let genres = movieGenre.map((genre) => genre.name);
//     return genres;
//   };
// }

function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
}
