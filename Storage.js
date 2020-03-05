// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("textarea1");
  // Retrieve
  document.getElementById("textarea2").innerHTML = localStorage.getItem("textarea1");
} else {
  document.getElementById("textarea2").innerHTML = "Sorry, your browser does not support Web Storage...";
}


function myFunction() {
  var x = document.getElementById("textarea1").value;
  document.getElementById("textarea2").innerHTML = "Title: " + x;
}


function myFunction2() {
  var x = document.getElementById("title").value;
  document.getElementById("textarea3").innerHTML = "You wrote: " + x;
}


