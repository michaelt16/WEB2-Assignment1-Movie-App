const SEARCH_LINK = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "?api_key=0240e866713f196279c493aec8081a16";
const LINK = "https://api.themoviedb.org/3/movie/";
const IMG_LINK = "https://image.tmdb.org/t/p/w185/";

let populated = document.querySelector("#populate");
// let search = `https://api.themoviedb.org/3/search/movie${key}&language=en-US&query=${searchedString}&page=1&include_adult=false`
//search api https://api.themoviedb.org/3/search/company?api_key=0240e866713f196279c493aec8081a16&query=toy&page=1

function fetchMovies(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then(getIdFromMatches)
    .then(logAndPassItOn)
    .then(idIntoPromiseClumps)
    .then(logAndPassItOn)
    .then(smallClumpIntoBig)
    .then(logAndPassItOn)
    .then(createMovieObjects)
    .then(logAndPassItOn)
    .then(orderMovies)
    .then(logAndPassItOn)
    .then(storeMovies)
    .then(displayDefaultView)
    .then(logAndPassItOn);
}

function displayDefaultView(movies) {
  movies.forEach((movie) => {
    let divcard = document.createElement("div");
    divcard.classList.add("movieinfo");
    divcard.id = "speechbubble";
    divcard.dataset.id = movie.id

    let img = document.createElement("img");

    

    if (movie.img == null){
      img.src = "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
      img.style.height = "315px"
      img.style.width = "210px";
    }else{
      img.src = `${IMG_LINK}${movie.img}`;
    }

    img.id = "image";
    img.style.width = "210px";

    img.alt = "Image";

    let iconheart = document.createElement("i");
    iconheart.classList.add("fa", "fa-heart");
    iconheart.style = "font-size:24px";

    let iconcircle = document.createElement("i");
    iconcircle.classList.add("fa", "fa-circle");
    iconcircle.style = "font-size:50px";

  
    let rating = "";
    if (movie.rating == 0) {
      rating = "N/A";
    } else if (rating == 10) {
      rating = movie.rating.toFixed(0);
    } else {
      rating = movie.rating.toFixed(1);
    }

    if (rating >= 8.5) {
      iconcircle.style.color = "blue";
    } else if (rating <= 4.5 || rating == "N/A") {
      iconcircle.style.color = "#dc143c";
    } else if (rating >= 7 && rating <= 8.4) {
      iconcircle.style.color = "#209277";
    } 

    // let rating = movie.rating.toFixed(1);
    let ratingContent = document.createTextNode(rating);

    let ratingP = document.createElement("p");
    ratingP.classList.add("rating");


    let title = `${movie.title}`;
    let titleContent = document.createTextNode(title);

    let titleP = document.createElement("p");
    titleP.id = "title";
    titleP.classList.add("same-line");
    
    let date = ` (${movie.date.substring(0, 4)})`;
    
    let  dateContent = document.createTextNode(date);
    if (movie.date == ""){
      
      dateContent.textContent =" ( N/A )";
    }
   

    let dateP = document.createElement("p");
    dateP.id = "year";
    dateP.classList.add("same-line");

    
  let genreList = movie.genre;

  let formatgenre = genreList.join(", ");

    // let genreList = new Movie(id).genre();

    // let formatgenre = genreList.join(", ");

    let genreP = document.createElement("p");
    genreP.classList.add("genre");

    populated.appendChild(divcard);

    // divcard.setAttribute("id", `button${buttonCounter}`);
    // buttonCounter++;

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
    

    // divcard.appendChild(genreP);
    // genreP.textContent = formatgenre;
  });

  return movies;
}

function storeMovies(movie) {
  
  for (let i = 0; i < movie.length; i++) {
    let id = movie[i].id;
    
    sessionStorage.setItem(id, JSON.stringify(movie[i]));
    
   
  }
  // sessionStorage.setItem( "id", JSON.stringify(idArr ))
  return movie;
}

function orderMovies(movie) {
  let sorted = movie.sort((movie1, movie2) => {
    if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
      return 1;
    } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
  return sorted
  // return Promise.resolve(sorted);
}

function createMovieObjects(combinedArr) {
  let movieObjectArr = [];

  for (let i = 0; i < combinedArr.length; i++) {
    movieObjectArr.push(
      new Movie(combinedArr[i][0], combinedArr[i][1], combinedArr[i][2])
    );
  }

  return Promise.resolve(movieObjectArr);
}

function smallClumpIntoBig(promise) {
  return Promise.all(promise);
}

function idIntoPromiseClumps(idArr) {
  return idArr.map((id) => {
    let detailsLink = `${LINK}${id}${API_KEY}`;

    let creditsLink = `${LINK}${id}/credits${API_KEY}`;

    let keywordsLink = `${LINK}${id}/keywords${API_KEY}`;

    let details = fetch(detailsLink).then((response) => response.json());

    let credits = fetch(creditsLink).then((response) => response.json());

    let keywords = fetch(keywordsLink).then((response) => response.json());

    return Promise.all([details, credits, keywords]);
  });
}

function getIdFromMatches(data) {
  let idArray = [];
  data.results.forEach((obj) =>{ 
    idArray.push(obj.id)
    sessionStorage.setItem("id",JSON.stringify(idArray))
  });
  
 
  return idArray;
}

function turnIdIntoArrayLinks(data) {
  let linkDetailsArray = [];
  let linkCreditsArray = [];
  let linkKeywordsArray = [];

  data.results.forEach((movie) => {
    let id = movie.id;
    let detailsLink = `${LINK}${id}${API_KEY}`;
    linkDetailsArray.push(detailsLink);

    let creditsLink = `${LINK}${id}/credits${API_KEY}`;
    linkCreditsArray.push(creditsLink);

    let keywordsLink = `${LINK}${id}/keywords${API_KEY}`;
    linkKeywordsArray.push(keywordsLink);
  });

  return Promise.resolve([
    linkDetailsArray,
    linkCreditsArray,
    linkKeywordsArray,
  ]);
}

function searchTitle(search) {
  let searchedString = search
 
  // sessionStorage.clear()
 
  sessionStorage.setItem("searched",searchedString)
  
  search.replaceAll(" ", "+");
  fetchMovies(
    `${SEARCH_LINK}${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
  );
}

function logAndPassItOn(thing) {
  console.log("logged and passed on", thing);
  return thing;
}
