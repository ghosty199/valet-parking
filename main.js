canvas = document.getElementById('myCanvas'); 
ctx = canvas.getcontext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imagetag = new Image;
	background_imagetag.onload = uploadBackground;
	greencar_imagetag.src = background_image;

	background_imagetag = new Image;
	background_imagetag.onload = uploadgreencar;
	greencar_imagetag.src = greencar_image;
}

function uploadBackground() {
	function uploadBackground() {
	ctx.drawimage(background_imagetag, 0, 0, canvas.greencar_width, canvas_height);
	}
function uploadgreencar
ctx.drawimage(greencar_imagetag, greencar_x, greencar_y, greencar_width, greencar_height);

}

function uploadgreencar() {
	

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
