function myFunction3(){
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("textarea1"," ");
  // Retrieve
  document.getElementById("textarea2").innerHTML = localStorage.getItem("textarea1");
} else {
  document.getElementById("textarea2").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function myFunction4(){
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("title"," ");
  // Retrieve
  document.getElementById("textarea3").innerHTML = localStorage.getItem("title");
} else {
  document.getElementById("textarea3").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}


function myFunction() {
  var x = document.getElementById("textarea1").value;
  document.getElementById("textarea2").innerHTML = "You Wrote: " + x;
}


function myFunction2() {
  var x = document.getElementById("title").value;
  document.getElementById("textarea3").innerHTML = "Title: " + x;
}


