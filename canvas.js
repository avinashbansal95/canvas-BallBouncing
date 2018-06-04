var canvas=document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// c.fillStyle = "rgba(0,255,0,.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle = "rgba(255,0,0,.5)";
// c.fillRect(400,300,100,100);
// c.fillStyle = "rgba(0,0,255,.5)";
// c.fillRect(750,150,100,100);



// //Drawing a line

// c.beginPath();
// c.moveTo(100,600);
// c.lineTo(200,400);
// c.lineTo(500,200);
// c.lineTo(100,600);
// c.strokeStyle = "rgba(100,255,50,.9)";
// c.stroke();

// //Drwaing an arc
// for(var i=0;i<500;i++)
// {
// 	var x=Math.random() * window.innerWidth;
// 	var y=Math.random() * window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,30,0,Math.PI * 2,false);
// 	var r=Math.floor(Math.random() * 256);
// 	var g=Math.floor(Math.random() * 256);
// 	var b=Math.floor(Math.random() * 256);
// 	c.strokeStyle="rgb(" + r + ", "+ g +", "+ b+")";
// 	c.stroke();
// }



// c.beginPath();
// 	c.arc(200,200,30,0,Math.PI * 2,false);
// 	c.strokeStyle="red";
// 	c.stroke();
	// 



//ONE CIRCLE#######

var mouse ={
	x:undefined,
	y:undefined
}
var minRadius = 2;
var maxRadius = 70;
var colorArray = [
'rgba(255,0,0,.5)',
'rgba(0,255,0,.5)',
'rgba(0,0,255,.5)',
'rgba(100,50,200,.9)',
'rgba(30,160,20,.8)'
];

window.addEventListener('mousemove',function(event)
{
   mouse.x = event.x;
   mouse.y = event.y;
   console.log(mouse);
})
window.addEventListener("resize",function()
{
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
})

function Circle(x,y,dx,dy,radius)
{
	this.x=x;
	this.y=y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius; 
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
	this.draw = function()
	{
       c.beginPath();

		c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
		c.fillStyle = this.color;
	
	     // c.strokeStyle="red";
	//      	var r=Math.floor(Math.random() * 256);
 // 	var g=Math.floor(Math.random() * 256);
	// var b=Math.floor(Math.random() * 256);
	// c.strokeStyle="rgb(" + r + ", "+ g +", "+ b+")";
	// c.stroke();
	c.fill(); 
	}

	this.update = function()
	{

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
         this.dx =  -this.dx;

	}
	if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
	{
		this.dy = -this.dy;
	}
	 this.x += this.dx;

	 this.y += this.dy;
//INTERACTIVITY

    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50  && mouse.y - this.y > -50 )
    {
    	if(this.radius < maxRadius)
    	{
             this.radius +=1;
    	}
    	
    }

    else if(this.radius > this.minRadius)
    {
    	this.radius -= 1;
    }

	 this.draw();

	}
}
var circle = new Circle(200,200,4,5,30);
	
   
   var circleArray = [];

   function init()
   {

   	 for(var i=0;i<600;i++)
   {

   	var x = Math.random()*(innerWidth - radius * 2) + radius;
	console.log(x+" ");
	var y = Math.random()*(innerHeight - radius *2) + radius;
	console.log(y);
	var dx = (Math.random() - .5) * 10;
	var dy =  (Math.random() - .5) * 10;
	var radius=Math.random() * 20 +1;

   	circleArray.push(new Circle(x,y,dx,dy,radius));
   }

   }

  
   console.log(circleArray);

    function animate()
    {
    	c.clearRect(0,0,innerWidth,innerHeight);
    	//circle.update();
       for(var i=0;i<circleArray.length;i++)
       {
       	circleArray[i].update();
       }
	 requestAnimationFrame(animate);
    }

    init();

 animate();

	//MULTIPLE CIrclea
  


	// function Circle(x, y, dx, dy, radius)
	// {
	// 	this.x = x;
	// 	this.y = y;
	// 	this.dx = dx;
	// 	this.dy = dy;
	// 	this.radius = radius; 
	// 	this.draw = function()
	// 	{
 //            c.beginPath();

	// 	c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
	
	//      c.strokeStyle="red";
	// c.stroke();

	// 	}

	// 	this.update = function()
	// 	{


	// if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
 //         this.dx =  -this.dx;

	// }
	// if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
	// {
	// 	this.y = -this.dy;
	// }
	// this.x += this.dx;

	// this.y += this.dy;
	// console.log(this.y+" ");

 //        this.draw();
	// 	}
	// }

 //      //
	// var circleArray =[];
	// for(var i=0;i<100;i++)
	// {
	// 	var x = Math.random()*innerWidth;
	// console.log(x+" ");
	// var y = Math.random()*innerHeight;
	// console.log(y);
	// var dx = (Math.random() - .5) * 20;
	// var dy =  (Math.random() - .5) * 20;
	// var radius=40;
	//      circleArray.push(new Circle(x,y,dx,dy,radius));

	// }
	// console.log(circleArray);

	// animate();
  

    

	// function animate()
	// {
		
	// 	c.clearRect(0,0,innerWidth,innerHeight);
	// 	for(var i=0;i<circleArray.length;i++)
	// 	{
	// 		circleArray[i].update();
	// 	}
	// 	requestAnimationFrame(animate);
	// }


