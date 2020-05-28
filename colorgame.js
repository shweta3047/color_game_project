var numSquares=6;
var colors=colorArray(numSquares);
var squares=document.querySelectorAll(".square");
var rgb=document.querySelector("#rgb");
var message=document.querySelector("#message");
var jumbotron=document.querySelector(".jumbotron");
var pickedColor=pickColor();
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

rgb.textContent=pickedColor;
easy.addEventListener("click",function()
{
	hard.classList.remove("selected");
	easy.classList.add("selected");
	reset.textContent="NEW COLORS";
	message.textContent="";
	numSquares=3;
	colors=colorArray(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(var i=0;i<3;i++)
    {
    	squares[i].style.backgroundColor=colors[i];
    } 
    for(var i=3;i<6;i++)
    {
    	squares[i].style.display="none";
    }
	jumbotron.style.backgroundColor="rgb(104, 151, 226)";
});
hard.addEventListener("click",function()
{
	hard.classList.add("selected");
	easy.classList.remove("selected");
	reset.textContent="NEW COLORS";
	message.textContent="";
	numSquares=6;
	colors=colorArray(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(var i=0;i<colors.length;i++)
    {
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    } 
	jumbotron.style.backgroundColor="rgb(104, 151, 226)";
});
reset.addEventListener("click",function()
{
	reset.textContent="NEW COLORS";
	message.textContent="";
	colors=colorArray(numSquares);
    pickedColor=pickColor();
    rgb.textContent=pickedColor;
    for(var i=0;i<colors.length;i++)
    {
    	squares[i].style.backgroundColor=colors[i];
    } 
	jumbotron.style.backgroundColor="rgb(104, 151, 226)";
});
for(var i=0;i<colors.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
	{
		if(this.style.backgroundColor==rgb.textContent)
		{
           message.textContent="Correct";
           reset.textContent="PLAY AGAIN"
           changecolor();

		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});

}
function changecolor()
{
	for(i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor=rgb.textContent;
	}
	jumbotron.style.backgroundColor=rgb.textContent;
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length)

	return colors[random];
}
function colorArray(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}