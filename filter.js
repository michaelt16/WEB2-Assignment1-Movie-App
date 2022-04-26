document.addEventListener("DOMContentLoaded", function () {
    runFilter();
  });
  
  
  function runFilter(){

      document.querySelector("#filterButton").addEventListener("click",filter)
      document.querySelector(".side").addEventListener("click",selectOne)
  

   
  }

  function filter(e){

      if (document.getElementById("movieFilterSearch").value != ""){
        let sortTitleString = document.getElementById("movieFilterSearch").value
        filterByTitle(sortTitleString)
      }else if (document.getElementById("beforeSearch").value != ""){
          let inputDate = document.getElementById("beforeSearch").value
        filterBeforeYear(inputDate)
      }else if (document.getElementById("afterSearch").value != ""){
        let inputDate = document.getElementById("afterSearch").value
        filterAfterYear(inputDate)
      }else if ( document.getElementById("betweenSearch1").value != ""&& document.getElementById("betweenSearch2").value != ""){
        let inputDate1 = document.getElementById("betweenSearch1").value
        let inputDate2 = document.getElementById("betweenSearch2").value
      
        filterBetweenYear(inputDate1,inputDate2)
      }else if ( document.getElementById("belowRange").value != ""){
        let inputRange =  document.getElementById("belowRange").value
        filterBelowRange (inputRange)
      }else if ( document.getElementById("aboveRange").value != ""){
        let inputRange =  document.getElementById("aboveRange").value
        filterAfterRange (inputRange)
     
      }else if (document.getElementById("betweenRange1").value != ""&& document.getElementById("betweenRange2").value != ""){
        
        let inputRange1 = document.getElementById("betweenRange1").value
        let inputRange2 = document.getElementById("betweenRange2").value
        filterBetweenRange(inputRange1,inputRange2)
      }
  }


  function filterBetweenRange (inputRange1,inputRange2){
    
    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

      let filteredRatingArr = []
      movieArr.find((movie)=> {
        console.log("rating",movie.rating)
  
        
        if (parseInt(movie.rating) >= (parseInt(inputRange1)) &&  parseInt(movie.rating) <= (parseInt(inputRange2))  ){
          filteredRatingArr.push(movie)
        }
      
    })
    console.log("filtered thing",filteredRatingArr)

    let sorted= filteredRatingArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
      

      displayDefaultView(sorted)
  }

  function filterAfterRange(inputRange){
    
    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

      let filteredRatingArr = []
      movieArr.find((movie)=> {
        console.log("rating",movie.rating)
        console.log((parseInt(inputRange)))
        
        if (parseInt(movie.rating) >= (parseInt(inputRange))){
          filteredRatingArr.push(movie)
        }
      
    })
    console.log("filtered thing",filteredRatingArr)

    let sorted= filteredRatingArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
      
      removeChildNodes(document.querySelector("#populate"));

      displayDefaultView(sorted)
  }


  function filterBelowRange(inputRange){
 
    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

      let filteredRatingArr = []
      movieArr.find((movie)=> {
        console.log("rating",movie.rating)
        console.log((parseInt(inputRange)))
        
        if (parseInt(movie.rating) <= (parseInt(inputRange)-1)){
          filteredRatingArr.push(movie)
        }
      
    })
    console.log("filtered thing",filteredRatingArr)

    let sorted= filteredRatingArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
   
      removeChildNodes(document.querySelector("#populate"));

      displayDefaultView(sorted)
  }



  function filterBetweenYear(inputDate1, inputDate2){
  

    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)
      let filteredYearArr = []
      movieArr.find((movie)=> {
        console.log("date",movie.date)
        //i did +1 because lets say its 2018 i want to include 2018-any month instead of capped at 2018
        if (movie.date >= inputDate1&& movie.date <= inputDate2+1){
            filteredYearArr.push(movie)
        }
      
    })
    console.log("filtered",filteredYearArr)

    let sorted= filteredYearArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      
  
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
      removeChildNodes(document.querySelector("#populate"));

      displayDefaultView(sorted)
  }

  function filterAfterYear(inputDate){
    

    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)

      let filteredYearArr = []
      movieArr.find((movie)=> {
        console.log("date",movie.date)
        //i did +1 because lets say its 2018 i want to include 2018-any month instead of capped at 2018
        if (movie.date >= inputDate){
            filteredYearArr.push(movie)
        }
      
    })
    console.log("filtered",filteredYearArr)

    let sorted= filteredYearArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      
      
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
      removeChildNodes(document.querySelector("#populate"));

      displayDefaultView(sorted)
  }


  function filterBeforeYear(inputDate){
    // let idArr= JSON.parse(sessionStorage.getItem("id"))
    // console.log(idArr)

    // let movieArr = []

    // idArr.forEach((id)=>{
    //     let getInfoFromId = JSON.parse(sessionStorage.getItem (id))
    //     movieArr.push (getInfoFromId)
    //   })
    //   console.log ("movieArrFromSessionStorage",movieArr)

    let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

    let movieArr = getInfoDependingOnThePage(favoriteTabToggle)
      let filteredYearArr = []
      movieArr.find((movie)=> {
        console.log("date",movie.date)
        //i did +1 because lets say its 2018 i want to include 2018-any month instead of capped at 2018
        if (movie.date <= inputDate+1){
            filteredYearArr.push(movie)
        }
      
    })
    console.log("filtered",filteredYearArr)

    let sorted= filteredYearArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
      // let newIdArr = [];
      // sorted.forEach((obj) =>{ 
      //   newIdArr.push(obj.id)
      //   sessionStorage.setItem("id",JSON.stringify(newIdArr))
      // });
      removeChildNodes(document.querySelector("#populate"));

      displayDefaultView(sorted)
  }


  function filterByTitle(searchedString){

  let favoriteTabToggle = sessionStorage.getItem("favoriteTab")

  let movieArr = getInfoDependingOnThePage(favoriteTabToggle)



    let filteredTitleArr = []

    console.log("searcjed",searchedString)
    movieArr.find((movie)=> {
        // console.log(movie.title)
        
        if ( movie.title.toLowerCase().includes(searchedString) ){
           filteredTitleArr.push(movie)
        }
    })
    // console.log("filteredBytitle",filteredTitleArr)
     
    let sorted= filteredTitleArr.sort((movie1, movie2)=>{
        if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
          return 1;
        } else if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
      newIdArrDependingOnPage (favoriteTabToggle,sorted)
   
      
      
      removeChildNodes(document.querySelector("#populate"));
      

      displayDefaultView(sorted)
      
  }

  function newIdArrDependingOnPage (favoriteTabToggle,sorted){
      let newIdArr = [];

      if (favoriteTabToggle =="true"){
        sorted.forEach((obj) =>{ 
          newIdArr.push(obj.id)
          localStorage.setItem("id",JSON.stringify(newIdArr))
        });
      }else{
        sorted.forEach((obj) =>{ 
          newIdArr.push(obj.id)
          sessionStorage.setItem("id",JSON.stringify(newIdArr))
        });
      }

      return newIdArr
      
  }




  function selectOne (e){


    console.log(e.target.id)
    console.log(e.target.type)

    if (e.target.id == "movieFilterSearch"){

      deleteAllButTitle()

    }else if(e.target.id == "beforeSearch"){
        deleteAllButBeforeSearch()
    }else if (e.target.id == "afterSearch"){
        deleteAllButAfterSearch()
    }else if (e.target.id == "betweenSearch1" || e.target.id == "betweenSearch2" ){
        deleteAllButBetweenSearch()
    }else if (e.target.id == "belowRange"){
      deleteAllButBeforeRating()

    }else if (e.target.id == "aboveRange"){
      deleteAllButAfterRating()
    }else if (e.target.id == "betweenRange1" || e.target.id == "betweenRange2" ){
      deleteAllButBetweenRating()
    }
    
  }


  //helpers

  function deleteAllButTitle(){
    document.getElementById("beforeSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    document.getElementById("belowRange").value = "";
    document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";
  }
  
  function deleteAllButBeforeSearch(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    document.getElementById("belowRange").value = "";
    document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";
  }
  
  function deleteAllButAfterSearch(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("beforeSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    document.getElementById("belowRange").value = "";
    document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";
  }


  function deleteAllButBetweenSearch(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("beforeSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("belowRange").value = "";
    document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";
    
  }

  function deleteAllButBeforeRating(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("beforeSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    // document.getElementById("belowRange").value = "";
    document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";

  }

  function deleteAllButAfterRating(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("beforeSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    document.getElementById("belowRange").value = "";
    // document.getElementById("aboveRange").value = "";
    document.getElementById("betweenRange1").value ="" ;
    document.getElementById("betweenRange2").value = "";
  }

  function deleteAllButBetweenRating(){
    document.getElementById("movieFilterSearch").value = "";
    document.getElementById("beforeSearch").value = "";
    document.getElementById("afterSearch").value = "";
    document.getElementById("betweenSearch1").value = "";
    document.getElementById("betweenSearch2").value = "";
    document.getElementById("belowRange").value = "";
     document.getElementById("aboveRange").value = "";
    // document.getElementById("betweenRange1").value ="" ;
    // document.getElementById("betweenRange2").value = "";
  }
  