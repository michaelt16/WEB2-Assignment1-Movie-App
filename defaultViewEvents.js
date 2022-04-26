// This will allow us to run the functions when the page is loaded up

document.addEventListener("DOMContentLoaded", function () {
  runEventsDefault();
});

//this will run our events

function runEventsDefault() {
  document.getElementById("clearButton").addEventListener("click", clearValue);
  document.querySelector(".fa-home").addEventListener("click", goHome);

  // document.getElementById("closeFiltersButton").addEventListener("click", closeFilters)

  // document.getElementById("headerDefault").addEventListener("click", returnHome)

  document.querySelector("#belowRange").addEventListener("input", showNum);
  document.querySelector("#aboveRange").addEventListener("input", showNum);
  document.querySelector("#betweenRange1").addEventListener("input", showNum);
  document.querySelector("#betweenRange2").addEventListener("input", showNum);

  document.querySelector("#belowRange").addEventListener("input", showNum);
  document.querySelector("#aboveRange").addEventListener("input", showNum);
  document.querySelector("#betweenRange1").addEventListener("input", showNum);
  document.querySelector("#betweenRange2").addEventListener("input", showNum);

  document.getElementById("filterButton").addEventListener("click", noFilter);
  // 20
  document.querySelector("#populate").addEventListener("click", goToDetails);

  document
    .getElementById("goToThirdPage")
    .addEventListener("click", goToThirdPage);

 
  
  document.querySelector(".sort-button").addEventListener("click", sortByCollapsible);
}

function goHome() {
  document.getElementById("Page1").style.display = "block";
  document.getElementById("Page2").style.display = "none";

  let checkInFunction = sessionStorage.getItem("inFunction")

  if(checkInFunction == "true"){
    localStorage.clear()
  }

   sessionStorage.clear()
}

// ill probably make a feature in the future if i click anything else on the page it folds the sort by collapsible
function sortByCollapsible() {
  if (document.querySelector(".content-sort").style.display == "none") {
    document.querySelector(".content-sort").style.display = "block";
  } else if (document.querySelector(".content-sort").style.display == "block") {
    document.querySelector(".content-sort").style.display = "none";
  }
}

//DEFAULT 1

// function showSearch() {
//   let searchedString = document
//     .getElementById("homeViewSearch")
//     .value.toLowerCase();

//   document
//     .querySelector("#movieFilterSearch")
//     .setAttribute("value", searchedString);
// }

//3
function noFilter() {
  
  let searches =
    document.getElementById("movieFilterSearch").value +
    document.getElementById("beforeSearch").value +
    document.getElementById("afterSearch").value +
    document.getElementById("betweenSearch1").value +
    document.getElementById("betweenSearch2").value;

  let sliderValues =
    document.getElementById("belowRange").value +
    document.getElementById("aboveRange").value +
    document.getElementById("betweenRange1").value +
    document.getElementById("betweenRange2").value;

  if (sliderValues == 0  && searches === "") {
  }
}

//DEFAULT 5

function showNum() {
  let sliderBelowVal = document.querySelector("#belowRange").value;
  removeChildNodes(document.querySelector("#demo"));
  document
    .querySelector("#demo")
    .appendChild(document.createTextNode(sliderBelowVal));

  let sliderAboveVal = document.querySelector("#aboveRange").value;
  removeChildNodes(document.querySelector("#demo2"));
  document
    .querySelector("#demo2")
    .appendChild(document.createTextNode(sliderAboveVal));

  let sliderUpper = document.querySelector("#betweenRange1").value;
  removeChildNodes(document.querySelector("#demo3"));
  document
    .querySelector("#demo3")
    .appendChild(document.createTextNode(sliderUpper));

  let sliderLower = document.querySelector("#betweenRange2").value;
  removeChildNodes(document.querySelector("#demo4"));
  document
    .querySelector("#demo4")
    .appendChild(document.createTextNode(sliderLower));
}

//21

function clearValue() {

  clearValuesInFilterBar()

  //reset to what was searched
  let searched = sessionStorage.getItem("searched")
  removeChildNodes(document.querySelector("#populate"));
  // searchTitle(searched)
   

   let favoriteTabToggle = sessionStorage.getItem("favoriteTab")
   console.log("tabtabtab",favoriteTabToggle)
   sessionStorage.clear()
   if (favoriteTabToggle == "true"){
    showFavorites()
   }else{
    searchTitle(searched)
    sessionStorage.setItem("searched",searched)
   }
   
 
  
  // sessionStorage.setItem("id",JSON.stringify(idArr))
}

function clearValuesInFilterBar(){
  
  document.getElementById("belowRange").value = "";
  document.getElementById("aboveRange").value = "";
  document.getElementById("betweenRange1").value ="" ;
  document.getElementById("betweenRange2").value = "";

  
  document.getElementById("movieFilterSearch").value = "";
  document.getElementById("beforeSearch").value = "";
  document.getElementById("afterSearch").value = "";
  document.getElementById("betweenSearch1").value = "";
  document.getElementById("betweenSearch2").value = "";
  
  }


//22 and 23 SO THIS WILL MAKE THE BUTTON CLOSE THE FILTER DIV ELEMENT MAKE ANIMATION WORK

function closeFilters() {
  let button = document.getElementById("closeFiltersButton");
  let filters = document.getElementById("filtersGrid");

  if (filters.style.display === "none") {
    filters.style.display = "block";
    button.value = "Close Filters";
  } else {
    filters.style.display = "none";
    button.value = "Open Filters";
  }
}

//24

//30

function goToDetails(e) {
  // event delegation

  console.log(e.target.id);

  console.log (e.target.parentNode.dataset.id)
  if (
    e.target.id == "image" ||
    e.target.id == "title" ||
    e.target.id == "year"  ||
    e.target.classList.value == "genre" ||
    e.target.classList.value == "movieinfo"
  ) {

    document.getElementById("Page3").style.display = "block";
    document.getElementById("Page2").style.display = "none";

    let grabbedId = e.target.parentNode.dataset.id

    // let savedInfo = JSON.parse(sessionStorage.getItem(e.target.parentNode.dataset.id))
    // console.log(savedInfo)

    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let savedInfo = getInfoDependingOnThePageForDetails(favoriteTabToggle,grabbedId)

    createDetails(savedInfo)


  }
}

function getInfoDependingOnThePageForDetails(favoriteTabToggle,grabbedId){
let savedInfo
  if (favoriteTabToggle =="true"){
     savedInfo = JSON.parse(localStorage.getItem(grabbedId))
  }else{
    savedInfo = JSON.parse(sessionStorage.getItem(grabbedId))
  }
return savedInfo
}

let tmdbLink = "";
let imbdLink = "";

function createDetails(savedInfo) {
  let title = savedInfo.title;
  console.log(title)

  //section 1 :general stats variable
  let releaseDate = savedInfo.date;

  console.log(releaseDate);
  //ooo javascript has a number formatter neat!
  let revenue = savedInfo.revenue.toLocaleString();
  console.log(revenue);

  let budget = savedInfo.budget.toLocaleString();
  console.log(budget);

  let runtime = timeConvert(savedInfo.runtime);
  console.log(runtime);

  let tagline = savedInfo.tagline;
  console.log(tagline);

  let popularity = savedInfo.popularity;
  console.log(popularity);

  let average = savedInfo.rating;
  console.log(average);

  let votecount = savedInfo.vote_count;
  console.log(votecount);

  let image185, image342
  if (savedInfo.img == null){
    image185 = "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
    image342 = "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
    
  }else{
    image185 = `https://image.tmdb.org/t/p/w185/${savedInfo.img}`;
    console.log(image185);
    image342 = `https://image.tmdb.org/t/p/w342/${savedInfo.img}`;
  }
  
 

  // let image342 = `https://image.tmdb.org/t/p/w342/${savedInfo.img}`;

  //section 2: overview

  let overview = savedInfo.overview;
  console.log(overview);

  //section3: links

  tmdbLink = `https://www.themoviedb.org/movie/${savedInfo.id}`;
  console.log(tmdbLink);

  imbdLink = `https://www.imdb.com/title/${savedInfo.imdb_id}/`;
  console.log(imbdLink);

  //section 4:casts and crew
  let characterList = savedInfo.cast.map(
    (characters) => characters.character
  );
  console.log(characterList);

  let castList = savedInfo.cast.map((actors) => actors.original_name);
  console.log(castList);

  let department = savedInfo.crew.map((dep) => dep.department);
  console.log(department);

  let jobs = savedInfo.crew.map((jobs) => jobs.job);
  console.log(jobs);

  let nameCrew = savedInfo.crew.map((names) => names.name);
  console.log(nameCrew);

  //section 5: four boxes section on side

  let productionCompanies = savedInfo.companies.map(
    (companies) => companies.name
  );
  console.log(productionCompanies);

  let productionCountries = savedInfo.countries.map(
    (countries) => countries.name
  );
  console.log(productionCountries);

  let keywordsList = savedInfo.keywords.map((key) => key.name);
  console.log(keywordsList);


  let genre = savedInfo.genre.map((genreThing) => genreThing);
  console.log(genre);















  //now this is where I put all the info

  //section 1
  document.querySelector("#title-text").textContent = title;
  console.log(  document.querySelector("#title-text").textContent)

  document.querySelector("#release-date").textContent = `Release Date: ${releaseDate}`;

  if (revenue == "0"){
    document.querySelector("#revenue").textContent = `Revenue:  $ N/A`;
  }else{
    document.querySelector("#revenue").textContent = `Revenue:  $ ${revenue}`;
  }
 
   if (budget == "0"){
    document.querySelector("#budget").textContent = `Budget:  $ N/A`;
  }else{
    document.querySelector("#budget").textContent = `Budget:  $ ${budget}`;
  }

  if (runtime == "0"){
    document.querySelector("#budget").textContent = `Runtime:  $ N/A`;
  }else{
    document.querySelector("#runtime").textContent = `Runtime: ${runtime}`;
  }

  if (tagline == ""){
    document.querySelector("#tagline").textContent = `Tagline: N/A`;
  }else{
    document.querySelector("#tagline").textContent = `Tagline: ${tagline}`;
  }
 
  if (popularity == "0"){
    document.querySelector("#popularity").textContent = `Popularity: N/A`;
  }else{
    document.querySelector("#popularity").textContent = `Popularity: ${popularity}`;
  }
 
  if (average == "0"){
    document.querySelector("#average").textContent = `Average: N/A`;
  }else{
    document.querySelector("#average").textContent = `Average: ${average}`;
  }
 
  if (votecount == "0"){
    document.querySelector("#vote-count").textContent = `Vote Count: N/A`;
  }else{
    document.querySelector("#vote-count").textContent = `Vote Count: ${votecount}`;
  }
 
  

    
  //image changes
  console.log(image342);
  document.querySelector("#image-link1").srcset = image342;
  document.querySelector("#image-link2").src = image185;

  //section 2

  if (overview == ""){
    document.querySelector("#overview").textContent = "N/A";
  }else{
    document.querySelector("#overview").textContent = overview;
  }
 

  //section 3 links

  //section 4

  let castgrid = document.querySelector(".cast-grid");
  removeChildNodes(castgrid);
  for (let i = 0; i < savedInfo.cast.length; i++) {
    let p = document.createElement("p");
    document.querySelector(".cast-grid").appendChild(p);
    p.textContent = characterList[i];

    let p2 = document.createElement("p");
    document.querySelector(".cast-grid").appendChild(p2);
    p2.textContent = castList[i];
  }

  let crewgrid = document.querySelector(".crew-grid")
  removeChildNodes(crewgrid)
  console.log("TEST1",department)
  console.log("TEST2",jobs)
  console.log("TEST3",nameCrew)

  for (let i = 0; i < savedInfo.crew.length; i++) {
    let p = document.createElement("p");
    document.querySelector(".crew-grid").appendChild(p);
    console.log("TEST1",department[i])
    if (department[i] == ""){
      p.textContent = "N/A";
    }else{
      p.textContent = department[i];
    }
   
    console.log("TEST2",jobs[i])
    let p2 = document.createElement("p");
    document.querySelector(".crew-grid").appendChild(p2);
    if (jobs[i] == ""){
      p2.textContent = "N/A";
    }else{
      p2.textContent = jobs[i];
    }
   

    console.log("TEST3",nameCrew[i])
    let p3 = document.createElement("p");
    document.querySelector(".crew-grid").appendChild(p3);
    if (nameCrew[i] == ""){
      p3.textContent = "N/A";
    }else{
      p3.textContent = nameCrew[i];
    }
   
  }




  //section 5

 
 
  //here


  if (productionCompanies.length == 0){
    document.querySelector("#production-company").textContent ="N/A"
  }else{
    document.querySelector("#production-company").textContent =
    productionCompanies.join(", ");
  }

  if (productionCompanies.length == 0){
    document.querySelector("#production-countries").textContent ="N/A"
  }else{
    document.querySelector("#production-countries").textContent =
    productionCountries.join(", ");
  }
  
    
  if (productionCompanies.length == 0){
    document.querySelector("#keywords-bubble").textContent ="N/A"
  }else{
    document.querySelector("#keywords-bubble").textContent =
    keywordsList.join(", ");
  }
  

  if (productionCompanies.length == 0){
    document.querySelector("#genre-bubble").textContent = "N/A"
  }else{
    document.querySelector("#genre-bubble").textContent = genre.join(", ");
    
  }
  

 

  console.log(genre);
  
}

//helper i got from https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php

function timeConvert(n) {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + " hours " + rminutes + " minutes";
}

//31
// function returnHome() {
//   document.getElementById("Page1").style.display = "block";
//   document.getElementById("Page2").style.display = "none";
// }

function goToThirdPage() {
  document.getElementById("Page3").style.display = "block";
  document.getElementById("Page2").style.display = "none";
}
