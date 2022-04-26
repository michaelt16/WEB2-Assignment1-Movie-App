// This will allow us to run the functions when the page is loaded up

document.addEventListener("DOMContentLoaded", function (events) {
  runEventsHome();
  //  filterTitleReverse()
});

//this will run our events

function runEventsHome() {
  //document.querySelector("#populate").addEventListener("keyup", filterTitle);
  document
    .getElementById("searchButton")
    .addEventListener("click", emptySearch);
  document
    .getElementById("searchButton")
    .addEventListener("click", clearSearch);
  document
    .getElementById("homeViewButtons")
    .addEventListener("click", clearSearch);
  // document
  //   .getElementById("showFavButton")
  //   .addEventListener("click", showFavorites);
  // document.getElementById("test").addEventListener("click", page2);
}



// function page2() {
//   document.getElementById("Page2").style.display = "block";
//   document.getElementById("Page1").style.display = "none";
// }

//1

function clearSearch() {
  // Select the 'searchBar' search box, and set it's value to an empty String
  document.getElementById("homeViewSearch").value = "";
}

//4 when the search bar is empty does not let you click search bar NOT FULLY COMPLETE

function emptySearch() {
  if (document.getElementById("homeViewSearch").value === "") {
    document.getElementById("homeViewSearch").value =
      "Please Enter a Valid Value";
  } else {
    //This will allow us to continue if there is a valid search
    filterTitle();
    document.getElementById("Page2").style.display = "block";
    document.getElementById("Page1").style.display = "none";
  }
}

//Home 5

function sortFunction(movie1, movie2) {
  // movie2.title.toLowerCase().localeCompare(movie1.title.toLowerCase())

  if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
    return 1;
  } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
}

// debugger
// const result = movieDetails.sort((movie1, movie2)=>{
//   movie1.title.localeCompare(movie2.title,"en", { sensitivity: 'base' })
// })

function removeChildNodes(nodeList) {
  while (nodeList.firstChild) {
    nodeList.removeChild(nodeList.firstChild);
  }
}


function filterTitle() {
  let searchedString = document
    .getElementById("homeViewSearch")
    .value.toLowerCase();
  console.log(searchedString);
  
  // sessionStorage.setItem("searched",searchedString)
  removeChildNodes(populated);
  buttonCounter = 0;

  sessionStorage.setItem("favoriteTab",false)
  
  
  clearValuesInFilterBar()
  //this function has fetch in it
  searchTitle(searchedString);
  document.querySelector(".rightH1").textContent = "Searched Movies"
  
  // APIid.forEach ((id)=>{

  //   //now i gotta change print on web (have not changed)
  //   // printOnWeb(id)
  // })

  // sortedResult.filter((movie) => {

  //   let id = movie.id
  //   if (movie.title.toLowerCase().indexOf(searchedString) != -1) {

  //     printOnWeb(id);
  //   }
  // });
}

// function showFavorites() {
//   document.getElementById("Page2").style.display = "block";
//   document.getElementById("Page1").style.display = "none";
//   console.log(localStorage);
//   let population = document.querySelector("#populate");
//   removeChildNodes(population);
//   buttonCounter = 0;

//   let movieId = [];
//   for (let i = 0; i < localStorage.length - 1; i++) {
//     console.log(localStorage.getItem(`key${i}`));

//     movieId.push(localStorage.getItem(`key${i}`));
//   }

//   let movieArray = [];
//   movieId.forEach((id) => {
//     movieArray.push(new Movie(id).title());
//   });

//   console.log(movieArray);

//   let sorted = movieArray.sort((movie1, movie2) => {
//     if (movie1.toLowerCase() > movie2.toLowerCase()) {
//       return 1;
//     } else if (movie1.toLowerCase() < movie2.toLowerCase()) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });

//   sorted.forEach((title) => {
//     let detailsInfo = findDetailsInfoByTitle(title);

//     printOnWeb(detailsInfo.id);
//   });
//   console.log("sup1");

//   document.querySelectorAll("fa fa-heart").forEach((heart) => {
//     console.log("sup");

//     heart.style.color = "red";
//   });

//   // i feel like this is super inefficient
// }
function clearValuesInFilterBar(){
  //sliders
  document.getElementById("belowRange").value = "";
  document.getElementById("aboveRange").value = "";
  document.getElementById("betweenRange1").value ="" ;
  document.getElementById("betweenRange2").value = "";
  
  // checkbox
  
  // searchbox
  document.getElementById("movieFilterSearch").value = "";
  document.getElementById("beforeSearch").value = "";
  document.getElementById("afterSearch").value = "";
  document.getElementById("betweenSearch1").value = "";
  document.getElementById("betweenSearch2").value = "";
  
  }
