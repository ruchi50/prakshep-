 canvas = document.getElementById("canvas_new");
ctx = canvas.getContext("2d");
color = "blue" ;
var mouse_event = "empty" ; 
var last_position_x , last_position_y;
width_of_line = 2 ; 
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value ; 
    width_of_line = document.getElementById("width_line").value ; 
    mouse_event = "mouseDown";

}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e) {
 currentpositionmousex = e.clientX - canvas.offsetLeft ; 
 currentpositionmousey = e.clientY - canvas.offsetTop ;
 if (mouse_event == "mouseDown") { 
    ctx.beginPath();
    ctx.strokeStyle = color ; 
    ctx.lineWidth = width_of_line ;
    console.log("last position of x and y coordinates =  ");
    console.log("x =  " + last_position_x + "y =   " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
    console.log("current position of x and y coordinates =  ");
    console.log("x =  " + currentpositionmousex + "y =   " + currentpositionmousey);
    ctx.lineTo(currentpositionmousex, currentpositionmousey);
    ctx.stroke();
 }
 
   
 last_position_x = currentpositionmousex ;
 last_position_y = currentpositionmousey ;
}
    canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e) {
    mouse_event = "mouseUp";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e) {
    mouse_event = "mouseleave";

}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log("my_touchstart") ;
    color = document.getElementById("color").value ; 
    width_of_line = document.getElementById("width_line").value ; 
   
   last_position_x = e.touches[0].clientX - canvas.offsetLeft  ;
   last_position_y = e.touches[0].clientY - canvas.offsetTop   ;

}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
   
 currentpositiontouchx = e.touches[0].clientX - canvas.offsetLeft ; 
 currentpositiontouchy = e.touches[0].clientY - canvas.offsetTop ;
 console.log("my touch move");

    ctx.beginPath();
    ctx.strokeStyle = color ; 
    ctx.lineWidth = width_of_line ;
    console.log("last position of x and y coordinates =  ");
    console.log("x =  " + last_position_x + "y =   " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
    console.log("current position of x and y coordinates =  ");
    console.log("x =  " +currentpositiontouchx  + "y =   " + currentpositiontouchy );
    ctx.lineTo(currentpositiontouchx, currentpositiontouchy );
    ctx.stroke();
 
 
   
 last_position_x = currentpositiontouchx  ;
 last_position_y = currentpositiontouchy ;
}

function clear_area () {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

