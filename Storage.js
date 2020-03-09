  localStorage.setItem("textarea1");
  localStorage.setItem("textarea2");
console.log(localStorage.getItem("textarea1"));
console.log(localStorage.getItem("textarea2"));

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
