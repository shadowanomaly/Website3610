//Title
var c = document.getElementById("myCanvas11");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Cartoon.html Page", 500, 50);

//circle
var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,60,50,0,2*Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

//box
var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(75, 105, 50, 150);

//building
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 280);

//Window 1
//Window left right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(50, 20);
ctx.lineTo(50, 50);
ctx.stroke();

//Window bottom left
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(20, 50);
ctx.lineTo(50, 50);
ctx.stroke();

//Window left left
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(20, 20);
ctx.lineTo(20, 50);
ctx.stroke();

//Window top left
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(20, 20);
ctx.lineTo(50, 20);
ctx.stroke();

//Window 2
//Window left right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(120, 20);
ctx.lineTo(120, 50);
ctx.stroke();

//Window top right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(120, 20);
ctx.lineTo(150, 20);
ctx.stroke();

//Window bottom right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(120, 50);
ctx.lineTo(150, 50);
ctx.stroke();

//Window right right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(150, 50);
ctx.lineTo(150, 20);
ctx.stroke();

//Door
//Door right right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(110, 200);
ctx.lineTo(110, 290);
ctx.stroke();

//Door
//Door left right
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(70, 200);
ctx.lineTo(70, 290);
ctx.stroke();

//Door
//Door top
var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.moveTo(70, 200);
ctx.lineTo(110, 200);
ctx.stroke();

//Sun
var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");


// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "black");
// Fill with gradient
ctx.fillStyle = grd;


ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//label for sun
var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Mountain", 20, 150);

//label for sun
var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Sun", 140, 50);
ctx.fillStyle = "yellow";
ctx.fill();


//Mountain right
var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.moveTo(50, 50);
ctx.lineTo(130, 300);
ctx.stroke();

//Mountain left
var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.moveTo(50, 50);
ctx.lineTo(0, 300);
ctx.stroke();

//Moon
var c = document.getElementById("myCanvas6");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//label for moon
var c = document.getElementById("myCanvas6");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Moon", 60, 130);


//Cloud
var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 120, 20, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
//Cloud
var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
//Cloud
var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(120, 150, 20, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//label for cloud
var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Cloud", 60, 100);

//Water
var c = document.getElementById("myCanvas8");
var ctx = c.getContext("2d");
//Color for label word
// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "Blue");
grd.addColorStop(1, "white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.beginPath();
ctx.arc(150, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();
//Water
var c = document.getElementById("myCanvas8");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();
//Water
var c = document.getElementById("myCanvas8");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(50, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();

//label for Water
var c = document.getElementById("myCanvas8");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Water", 60, 260);

//Caption
var c = document.getElementById("myCanvas10");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Caption: This is the caption section.", 10, 50);

