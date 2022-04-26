
const movieDetails = JSON.parse(movieDetail);

function removeChildNodes(nodeList) {
  while (nodeList.firstChild) {
    nodeList.removeChild(nodeList.firstChild);
  }
}

function MovieConstructor(movieId) {
  this.movieId = movieId;

  let movie = movieDetails.find((movies) => movies.id == movieId);

  //This will return the title of the movie
  this.title = function () {
    return movie.title;
  };

  this.year = function () {
    return movie.release_date.substring(0, 4);
  };

  this.rating = function () {
    return movie.vote_average;
  };

  //returns an array of keywords (just the names and not ids)
  this.keywords = function () {
    let words = keywords.find((movies) => movies.id == movieId);
    let movieKey = words.keywords;
    let movieKeyWords = movieKey.map((keyword) => keyword.name);

    return movieKeyWords;
  };

  // this.crew = function(){

  //   let movieCastId = credits.find(movies => movies.id== movieId);

  //   let movieCrew = movieCastId.crew;

  //   let crew = movieCrew.map(movies => ({

  //     department: movies.department,
  //     job: movies.job,
  //     name: movies.name,

  //   }));

  //   return crew;

  // }

  //returns an array of the cast members must have their real name and who they play
  this.cast = function () {
    let movieCastId = credits.find((movies) => movies.id == movieId);

    let movieCast = movieCastId.cast;

    let cast = movieCast.map((movies) => ({
      name: movies.name,
      original_name: movies.orginal_name,
      character: movies.character,
    }));

    return cast;
  };

  this.mobileSizePoster = function () {
    let movie = movieDetails.find((movies) => movies.id == movieId);

    return `https://www.themoviedb.org/t/p/w185/${movie.poster_path}`;
  };

  this.genre = function () {
    let movieGenre = movie.genres;

    let genres = movieGenre.map((genre) => genre.name);
    return genres;
  };
}




function printOnWeb(id) {
  let divcard = document.createElement("div");
  divcard.classList.add("movieinfo");
  divcard.id = "speechbubble";

  let img = document.createElement("img");
  img.src = new MovieConstructor(id).mobileSizePoster();

  img.id = "image";
  img.style.width = "200px";

  img.alt = "Image";

  let iconheart = document.createElement("i");
  iconheart.classList.add("fa", "fa-heart");
  iconheart.style = "font-size:24px";

  let iconcircle = document.createElement("i");
  iconcircle.classList.add("fa", "fa-circle");
  iconcircle.style = "font-size:50px";

  let rating = new MovieConstructor(id).rating().toFixed(1);
  let ratingContent = document.createTextNode(rating);

  let ratingP = document.createElement("p");
  ratingP.classList.add("rating")

  let title = `${new MovieConstructor(id).title()}`;
  let titleContent = document.createTextNode(title);

  let titleP = document.createElement("p");
  titleP.id = "title";
  titleP.classList.add("same-line");

  let date = ` (${new MovieConstructor(id).year()})`;
  let dateContent = document.createTextNode(date);

  let dateP = document.createElement("p");
  dateP.id = "year";
  dateP.classList.add("same-line")

  let genreList = new MovieConstructor(id).genre();

  let formatgenre = genreList.join(", ");


  let genreP = document.createElement("p");
  genreP.classList.add("genre");

  populated.appendChild(divcard);


  divcard.appendChild(img);
  divcard.appendChild(iconheart);
  divcard.appendChild(iconcircle);

  divcard.appendChild(ratingP);
  ratingP.appendChild(ratingContent);

  divcard.appendChild(titleP);
  titleP.appendChild(titleContent);

  divcard.appendChild(dateP);
  dateP.appendChild(dateContent);

  divcard.appendChild(genreP);
  genreP.textContent = formatgenre;

}


function populateFavourites() {
  const movieId = [679, 348, 1091, 2666, 10204, 1124, 9342, 8536, 13342, 72105];
  localStorage.clear();
  let population = document.querySelector("#populate");
  removeChildNodes(population);
 for (let i = 0; i < movieId.length;i++){
  
    console.log(movieId[i])
    //  localStorage.setItem(movieId[i],"poop")

    fetch (`https://api.themoviedb.org/3/movie/${movieId[i]}?api_key=0240e866713f196279c493aec8081a16&language=en-US`).then(resp =>resp.json())
        .then(data=>{
          
          localStorage.setItem(data.id,JSON.stringify(data))
          
        })
    
    document.getElementById("Page2").style.display = "block";
  document.getElementById("Page1").style.display = "none";

    printOnWeb(movieId[i])
    let allHearts = document.querySelectorAll (".fa-heart")
          allHearts.forEach((heart)=>{
        
                     heart.style.color = "red"
            })
        
        
          }
      sessionStorage.setItem("inFunction",true)



}

// function populateFavourites() {
//   const movieId = [679, 348, 1091, 2666, 10204, 1124, 9342, 8536, 13342, 72105];
//   localStorage.clear();
//   let array=[]
//   movieId.forEach ((id)=>{

//     fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=0240e866713f196279c493aec8081a16&language=en-US`).then(resp =>resp.json())
//     .then(data=>{
//       array.push(data)
//       localStorage.setItem(data.id,JSON.stringify(data))
//       return array
//     }).then(logAndPassItOn).then((array)=>{
//       document.getElementById("Page2").style.display = "block";
//       document.getElementById("Page1").style.display = "none";
//       let population = document.querySelector("#populate");
//       removeChildNodes(population);
//       array.forEach((obj)=>{
//         console.log(obj)
//       })

//       let allHearts = document.querySelectorAll (".fa-heart")
//       allHearts.forEach((heart)=>{
    
//                  heart.style.color = "red"
//         })
//     })
    
//   })

  
  
// }


// let populated = document.querySelector("#populate");

// // function displayDefault(numMovies) {
// //   removeChildNodes(populated);
// //   // movieList =[]
// //   const movieId = [679, 348, 1091, 2666, 10204, 1124, 9342, 8536, 13342, 72105];
// //   document.getElementById("Page2").style.display = "block";
// //   document.getElementById("Page1").style.display = "none";
// //   document.getElementById("Page3").style.display = "none";

// //   if (numMovies == undefined) {
// //     movieId.forEach((id) => {
// //       let div1 = document.createElement("div");
// //       div1.classList.add("List-matches");

// //       let div2 = document.createElement("div");
// //       div2.classList.add("movieInfo");

// //       let gridDiv = document.createElement("div");
// //       gridDiv.classList.add("movieGrid");

// //       let img = document.createElement("img");
// //       img.src = new Movie(id).mobileSizePoster();
// //       // this constuctor is in to movieHelper.js

// //       let titleDiv = document.createElement("div");
// //       titleDiv.classList.add("movieTitle");

// //       let title = new Movie(id).title();
// //       let titleContent = document.createTextNode(title);

// //       let dateDiv = document.createElement("div");
// //       dateDiv.classList.add("movieDate");

// //       let date = new Movie(id).year();
// //       let dateContent = document.createTextNode(date);

// //       let ratingDiv = document.createElement("div");
// //       ratingDiv.classList.add("movieRating");

// //       let rating = new Movie(id).rating();
// //       let ratingContent = document.createTextNode(rating);

// //       let buttonDiv = document.createElement("div");
// //       buttonDiv.classList.add("viewButton");

// //       let button = document.createElement("button");
// //       let buttonContent = document.createTextNode("View");

// //       populated.appendChild(div1);
// //       div1.appendChild(div2);
// //       div2.appendChild(gridDiv);
// //       gridDiv.appendChild(img);

// //       gridDiv.appendChild(titleDiv);
// //       titleDiv.appendChild(titleContent);

// //       gridDiv.appendChild(dateDiv);
// //       dateDiv.appendChild(dateContent);

// //       gridDiv.appendChild(ratingDiv);
// //       ratingDiv.appendChild(ratingContent);

// //       gridDiv.appendChild(buttonDiv);
// //       buttonDiv.appendChild(button);
// //       button.appendChild(buttonContent);
// //     });
// //   } else if (numMovies != 0) {
// //     for (let i = 0; i < numMovies; i++) {
// //       let randomId =
// //         movieDetails[Math.ceil(Math.random() * movieDetails.length)]["id"];
// //       // i wanna grab random index then get the title
// //       // movieList.push(new Movie(randomId).title())

// //       let div1 = document.createElement("div");
// //       div1.classList.add("List-matches");

// //       let div2 = document.createElement("div");
// //       div2.classList.add("movieInfo");

// //       let gridDiv = document.createElement("div");
// //       gridDiv.classList.add("movieGrid");

// //       let img = document.createElement("img");
// //       img.src = new Movie(randomId).mobileSizePoster();

// //       let titleDiv = document.createElement("div");
// //       titleDiv.classList.add("movieTitle");

// //       let title = new Movie(randomId).title();
// //       let titleContent = document.createTextNode(title);

// //       let dateDiv = document.createElement("div");
// //       dateDiv.classList.add("movieDate");

// //       let date = new Movie(randomId).year();
// //       let dateContent = document.createTextNode(date);

// //       let ratingDiv = document.createElement("div");
// //       ratingDiv.classList.add("movieRating");

// //       let rating = new Movie(randomId).rating();
// //       let ratingContent = document.createTextNode(rating);

// //       let buttonDiv = document.createElement("div");
// //       buttonDiv.classList.add("viewButton");

// //       let button = document.createElement("button");
// //       let buttonContent = document.createTextNode("View");

// //       populated.appendChild(div1);
// //       div1.appendChild(div2);
// //       div2.appendChild(gridDiv);
// //       gridDiv.appendChild(img);

// //       gridDiv.appendChild(titleDiv);
// //       titleDiv.appendChild(titleContent);

// //       gridDiv.appendChild(dateDiv);
// //       dateDiv.appendChild(dateContent);

// //       gridDiv.appendChild(ratingDiv);
// //       ratingDiv.appendChild(ratingContent);

// //       gridDiv.appendChild(buttonDiv);
// //       buttonDiv.appendChild(button);
// //       button.appendChild(buttonContent);

// //       // movieList.forEach (value =>  console.log(value))
// //     }

// //     //  movieList.forEach (value =>  console.log(value))
// //   } else {
// //     return;
// //   }
// // }


