// This will allow us to run the functions when the page is loaded up

document.addEventListener("DOMContentLoaded" , function(events) {
  runEventsDetails();
});

//this will run our events

function runEventsDetails() {

  document.querySelector("#volumeIcon").addEventListener ("click", textToSpeech)
  document.getElementById("returnButtonDetails").addEventListener("click", returnButton)
  document.getElementById("detailHeader").addEventListener("click", detailHeaderReturns)
  
  document.getElementById("IMDB").addEventListener("click", IMDB)
  document.getElementById("TMDB").addEventListener("click", TMDB)

  document.querySelector ("#castTab").addEventListener("click", clickCast)
  document.querySelector ("#crewTab").addEventListener("click", clickCrew)
}

function clickCast (){
  document.getElementById("Cast").style.display = 'block';
  document.getElementById("Crew").style.display = 'none';
  
  
}


function clickCrew (){
  document.getElementById("Cast").style.display = 'none';
  document.getElementById("Crew").style.display = 'block';
  
}



//2
function textToSpeech (){
  
  let title = document.querySelector('#title-text').textContent;
  let synth = window.speechSynthesis;
  let speech = new SpeechSynthesisUtterance();
  synth.cancel()
  speech.text = title;
  
  synth.speak(speech);
  

 
 
}


//3 CLICK RETURN TO GO BACK TO DEFAULT VIEW

function returnButton() {
  document.getElementById("Page2").style.display = 'block';
  document.getElementById("Page3").style.display = 'none';
}

//4 CLICK HEADER TO GO HOME

function detailHeaderReturns() {
  document.getElementById("Page1").style.display = 'block';
  document.getElementById("Page3").style.display = 'none';
}


//5 CHECK LINKS IN HTML

function IMDB (){
  window.open(imbdLink)
}



//6

function TMDB (){
  window.open(tmdbLink)
}


