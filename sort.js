document.addEventListener("DOMContentLoaded", function () {
  runSort();
});


function runSort(){

  document.querySelector(".sort-title").addEventListener ("click", sortAlphabetically)
  document.querySelector (".sort-title-reversed").addEventListener ("click", sortRevAlphabetically)
 document.querySelector(".sort-rating").addEventListener ("click",ratingHiToLow)
  document.querySelector(".sort-rating-reversed").addEventListener ("click",ratingLowToHi)
  document.querySelector(".sort-year").addEventListener ("click",dateHiToLow)
  document.querySelector(".sort-year-reversed").addEventListener ("click",dateLowToHi)
}


function sortAlphabetically(){
  let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

let movieArr = getInfoDependingOnThePage(favoriteTabToggle)
  // let idArr = JSON.parse(sessionStorage.getItem("id"))
  // console.log(getInfoDependingOnThePage())
  // let test = getInfoDependingOnThePage()

  // console.log("testarr",test)
  
  
  // let movieArr = []
  
  // idArr.forEach((id)=>{
  //   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
  //   movieArr.push (getInfoFromId)
  // })
  // console.log (movieArr)
  
  
  let sortedRev = movieArr.sort((movie1, movie2)=>{
    if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
      return 1;
    } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  })
    console.log(sortedRev)
    removeChildNodes(document.querySelector("#populate"));
    displayDefaultView (sortedRev)

}



function sortRevAlphabetically(){
  let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

  console.log("testarr",movieArr)


// let movieArr = []

// idArr.forEach((id)=>{
//   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
//   movieArr.push (getInfoFromId)
// })
// console.log (movieArr)


let sortedRev = movieArr.sort((movie1, movie2)=>{
  if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
    return 1;
  } else if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
})
  console.log(sortedRev)
  removeChildNodes(document.querySelector("#populate"));
  displayDefaultView (sortedRev)


}


function ratingLowToHi(){
//   let idArr = JSON.parse(sessionStorage.getItem("id"))

// console.log(idArr)


// let movieArr = []

// idArr.forEach((id)=>{
//   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
//   movieArr.push (getInfoFromId)
// })
// console.log (movieArr)
let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

let sortedRev = movieArr.sort((movie1, movie2)=>{
  if (movie1.rating > movie2.rating) {
    return 1;
  } else if (movie1.rating < movie2.rating) {
    return -1;
  } else {
    return 0;
  }
})
  console.log(sortedRev)
  removeChildNodes(document.querySelector("#populate"));
  displayDefaultView (sortedRev)
}

function ratingHiToLow(){
//   let idArr = JSON.parse(sessionStorage.getItem("id"))

// console.log(idArr)


// let movieArr = []

// idArr.forEach((id)=>{
//   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
//   movieArr.push (getInfoFromId)
// })
// console.log (movieArr)
let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

let movieArr = getInfoDependingOnThePage(favoriteTabToggle)


let sortedRev = movieArr.sort((movie1, movie2)=>{
  if (movie1.rating < movie2.rating) {
    return 1;
  } else if (movie1.rating > movie2.rating) {
    return -1;
  } else {
    return 0;
  }
})
  console.log(sortedRev)
  removeChildNodes(document.querySelector("#populate"));
  displayDefaultView (sortedRev)
}

function dateHiToLow(){
//   let idArr = JSON.parse(sessionStorage.getItem("id"))

// console.log(idArr)


// let movieArr = []

// idArr.forEach((id)=>{
//   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
//   movieArr.push (getInfoFromId)
// })
// console.log (movieArr)
let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

let movieArr = getInfoDependingOnThePage(favoriteTabToggle)


let sortedRev = movieArr.sort((movie1, movie2)=>{
  if (movie1.date < movie2.date) {
    return 1;
  } else if (movie1.date > movie2.date) {
    return -1;
  } else {
    return 0;
  }
})
  console.log(sortedRev)
  removeChildNodes(document.querySelector("#populate"));
  displayDefaultView (sortedRev)
}

function dateLowToHi(){
  
  let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

  let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

  let sortedRev = movieArr.sort((movie1, movie2)=>{
    if (movie1.date > movie2.date) {
      return 1;
    } else if (movie1.date < movie2.date) {
      return -1;
    } else {
      return 0;
    }
  })
    console.log(sortedRev)
    removeChildNodes(document.querySelector("#populate"));
    displayDefaultView (sortedRev)
    
}



function getInfoDependingOnThePage(favoriteTabToggle){
 let idArr
 let movieArr =[]
  if (favoriteTabToggle == "true"){
     idArr = JSON.parse(localStorage.getItem ("id"))
     idArr.forEach((id)=>{
      let getInfoFromId = JSON.parse(localStorage.getItem (id))
      movieArr.push (getInfoFromId)
    })
  }else{
    idArr= JSON.parse(sessionStorage.getItem ("id"))
    idArr.forEach((id)=>{
      let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
      movieArr.push (getInfoFromId)
    })
  }
  return movieArr

}


// function sortDependingOnPage(idArr){
//   let movieArr = []

// idArr.forEach((id)=>{
//   let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
//   movieArr.push (getInfoFromId)
// })
// }
