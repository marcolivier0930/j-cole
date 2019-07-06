// the title of the page
var header_title = document.getElementById("header-title");
header_title.innerHTML = "J. Cole"
header_title.style.color = "white";


// play Music
var music = document.getElementById("play-music").addEventListener("click", function (){
  var noteToSelf = new Audio('middle_child.mp3');
  noteToSelf.play();
});
