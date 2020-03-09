function save(){
var text_to_save=document.getElementById("textarea1"," ").value;
localStorage.setItem("text", text_to_save); // save the item
}

function retrieve(){
var text=localStorage.getItem("text"); // retrieve
document.getElementById('textarea2').innerHTML = text; // display
}
 
//For notes
function myFunction() {
  var x = document.getElementById("textarea1").value;
  document.getElementById("textarea2").innerHTML = "You Wrote: " + x;
}
//For title
function myFunction2() {
  var x = document.getElementById("title").value;
  document.getElementById("textarea3").innerHTML = "Title: " + x;
}
