document.addEventListener("DOMContentLoaded",()=>{
    runFavorites()
})

function runFavorites(){

    document.querySelector("#populate").addEventListener("click", favoriteMovie);
    document.getElementById("showFavButton").addEventListener("click", showFavorites);
}

let idArrayLocal = []

function favoriteMovie (e){

    console.log(e.target.classList.value)
    let clickedId = e.target.parentNode.dataset.id
    let savedInfo = JSON.parse(sessionStorage.getItem(clickedId))
   
   

    
    if (e.target.classList.value == "fa fa-heart"){
        console.log("thing",e.target.classList.value)
        if (e.target.style.color != "grey") {
                  e.target.style.color = "grey";

                  localStorage.removeItem(clickedId)
                  idArrayLocal =idArrayLocal.filter ((id)=> id !== clickedId)
                  console.log(idArrayLocal)
                  localStorage.setItem("id",JSON.stringify(idArrayLocal))
                  let favoriteTab = sessionStorage.getItem("favoriteTab")
                    //if in the favorite tab i unheart it it updates rightaway
                    console.log(favoriteTab)
                  if (favoriteTab == "true"){ 
                   
                    // console.log("str",allStorage())
                    displayFavorites()
                  }

                } else {
                  e.target.style.color = "red";

                  
                  console.log (e.target.parentNode.dataset.id)
                  idArrayLocal.push(clickedId)
                 localStorage.setItem("id",JSON.stringify(idArrayLocal))
                 
                 
                //  let clickedId = e.target.parentNode.dataset.id
                //  let savedInfo = JSON.parse(sessionStorage.getItem(clickedId))

                 console.log(savedInfo)
                 

                 localStorage.setItem(clickedId,JSON.stringify(savedInfo))


    }
    }
    
}

function showFavorites(){


    document.getElementById("Page2").style.display = "block";
    document.getElementById("Page1").style.display = "none";
    console.log(allStorage())

// let ordered = orderMovies(allStorage()) 
// console.log(ordered)
// let population = document.querySelector("#populate");
//  removeChildNodes(population);
// displayDefaultView(ordered)
    displayFavorites()


    
document.querySelector(".rightH1").textContent = "Favorited Movies"
//if i click a heart then i get rid of it and refresh



sessionStorage.setItem("favoriteTab",true)





}

function displayFavorites(){
let ordered = orderMovies(allStorage()) 
console.log(ordered)
let population = document.querySelector("#populate");
 removeChildNodes(population);
displayDefaultView(ordered)
allHeartsAreRed()
}

function allHeartsAreRed(){
  let allHearts = document.querySelectorAll (".fa-heart")
allHearts.forEach((heart)=>{
    
    heart.style.color = "red"
})



}

function allStorage() {

    let values = []
    let  keys = Object.keys(localStorage)
     let  i = keys.length;

    while ( i-- ) {

      if (keys[i]!="id"){
        values.push( JSON.parse(localStorage.getItem(keys[i]) ));
      }
    }

    return values;
}
