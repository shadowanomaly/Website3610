//TextArea Storage
function save(){
var text_to_save=document.getElementById("textarea1"," ").value;
localStorage.setItem("text", text_to_save); // save the item
}
function retrieve(){
var text=localStorage.getItem("text"); // retrieve
document.getElementById('textarea2').innerHTML = text; // display
}
//============================================================================================================
//Title Storage
function save2(){
var text2_to_save=document.getElementById("title"," ").value;
localStorage.setItem("text2", text2_to_save); // save the item
}
function retrieve2(){
var text2=localStorage.getItem("text2"); // retrieve
document.getElementById('textarea3').innerHTML = text2; // display
}
//===========================================================================================================
//For notes
function myFunction() {
  var x = document.getElementById("textarea1").value;
  document.getElementById("textarea2").innerHTML = "You Wrote: " + x;
}
//For title
function myFunction2() {
  var y = document.getElementById("title").value;
  document.getElementById("textarea3").innerHTML = "Title: " + y;
}
//=============================================================================================================
//Buttons
//Clear function
function myClear(){
  localStorage.clear();
}
//Undo function
function myUndo(){
  localStorage.removeItem('textarea2');
}
