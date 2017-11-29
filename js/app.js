//No youser interaction couses no change to aplication
//Solution: When youser interact couses changes properly

var lastEvent;
var $canvas= $('canvas');
var context= $("canvas")[0].getContext("2d");
var color= $('.selected').css('background-color');
var $clickingColors= $('.controls li');
var mousedown= false;

//when clicking list items
$('.controls').on('click', 'li', function(){
	//deselect siblings elements
	$(this).siblings().removeClass('selected');
	//select click one
	$(this).addClass('selected');
	//cache current color
	color= $(this).css('background-color');
});
	
	
//when add color is presed 
$('#revealColorSelect').click(function(){
	//show color select or hide color slect
	changeColor();
	$("#colorSelect").toggle();
})
	
	
function changeColor() {
	var r= $('#red').val();
	var g= $('#green').val();
	var b= $('#blue').val();
	$('#newColor').css('background-color', 'rgb('+r+', '+g+', '+b+')');
}
	
//when color sliders change 
$('input[type=range]').change(changeColor);
	//update to new color span
	
//when add new color is preset 
$('#addNewColor').click(function(){
	//append the color to the controls ul
	var $newColor= $('<li></li>');
	$newColor.css('background-color', $('#newColor').css('background-color'));
	$('.controls ul').append($newColor);
	$newColor.addClass('selected');
});
	
	//select the new color
	
//On mouse events on the canvas
$canvas.mousedown(function(e){
	lastEvent= e
	mousedown= true;
}).mousemove(function(e){
	
	if(mousedown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle= color;
		context.stroke();
		lastEvent = e;
	}
	
}).mouseup(function(){
	mousedown= false;
}).mouseleave(function() {
	$canvas.mouseup();
});


	//draw lines


//On mouse down begin path
