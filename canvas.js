// wait for the content of the window element 
// to load, then performs the operations. 
// This is considered best practice. 
window.addEventListener('load', ()=>{ 
		
	resize(); // Resizes the canvas once the window loads 
	document.addEventListener('mousedown', startPainting); 
	document.addEventListener('mouseup', stopPainting); 
	document.addEventListener('mousemove', sketch); 
	window.addEventListener('resize', resize); 
}); 
	
const canvas = document.querySelector('#canvas'); 


    //variables 
    let painting = false;
    let bttn1 = document.querySelector("#button1");
    let bttn2 = document.querySelector("#button2");
    let bttn3 = document.querySelector("#button3");
    let bttn4 = document.querySelector("#button4");
    let bttn5 = document.querySelector("#button5");
    let bttn6 = document.querySelector("#button6");
    let bttn7 = document.querySelector("#button7");
    let bttn8 = document.querySelector("#button8");
    let bttn9 = document.querySelector("#button9");
    let bttn10 = document.querySelector("#button10");
    let bttn11 = document.querySelector("#button11");
    let bttn12 = document.querySelector("#button12");
    let bttn13 = document.querySelector("#button13");
    let bttn14 = document.querySelector("#button14");
    let bttn15 = document.querySelector("#button15");
    let bttn16 = document.querySelector("#button16");
    let bttn17 = document.querySelector("#button17");
    let bttn18 = document.querySelector("#button18");
	let bttn19 = document.querySelector("#button19");
    let size = 5;
	
	//Eventlisteners
bttn1.addEventListener('click', () => ctx.strokeStyle = 'black')
bttn1.addEventListener('click', () => ctx.lineCap = 'round')
bttn2.addEventListener('click', () => ctx.strokeStyle = '#ff0000')
bttn2.addEventListener('click', () => ctx.lineCap = 'round')
bttn3.addEventListener('click', () => ctx.strokeStyle = '#29a329')
bttn3.addEventListener('click', () => ctx.lineCap = 'round')
bttn4.addEventListener('click', () => ctx.strokeStyle = '#009eff')
bttn4.addEventListener('click', () => ctx.lineCap = 'round')
bttn5.addEventListener('click', () => ctx.strokeStyle = '#9800ff')
bttn5.addEventListener('click', () => ctx.lineCap = 'round')
bttn6.addEventListener('click', () => ctx.strokeStyle = '#ffff00')
bttn6.addEventListener('click', () => ctx.lineCap = 'round')
bttn7.addEventListener('click', () => ctx.strokeStyle = '#ffd700')
bttn7.addEventListener('click', () => ctx.lineCap = 'round')
bttn8.addEventListener('click', () => ctx.strokeStyle = '#ff00ff')
bttn8.addEventListener('click', () => ctx.lineCap = 'round')
bttn9.addEventListener('click', () => ctx.strokeStyle = '#b6ffff')
bttn9.addEventListener('click', () => ctx.lineCap = 'round')
bttn10.addEventListener('click', () => ctx.strokeStyle = '#808080')
bttn10.addEventListener('click', () => ctx.lineCap = 'round')
bttn11.addEventListener('click', () => ctx.strokeStyle = '#800000')
bttn11.addEventListener('click', () => ctx.lineCap = 'round')
bttn12.addEventListener('click', () => ctx.strokeStyle = '#666633')
bttn12.addEventListener('click', () => ctx.lineCap = 'round')
bttn13.addEventListener('click', () => ctx.strokeStyle = '#00ff00')
bttn13.addEventListener('click', () => ctx.lineCap = 'round')
bttn14.addEventListener('click', () => ctx.strokeStyle = '#669999')
bttn14.addEventListener('click', () => ctx.lineCap = 'round')
bttn15.addEventListener('click', () => ctx.strokeStyle = '#003399')
bttn15.addEventListener('click', () => ctx.lineCap = 'round')
bttn16.addEventListener('click', () => ctx.strokeStyle = '#ffffff')
bttn16.addEventListener('click', () => ctx.lineCap = 'square')
bttn16.addEventListener('click', () => size = 30)
bttn17.addEventListener('click', () => size = 5)
bttn18.addEventListener('click', () => size = 10)
bttn19.addEventListener('click', () => size = 20)



	

// Context for the canvas for 2 dimensional operations 
const ctx = canvas.getContext('2d'); 

// Resizes the canvas to the available size of the window. 
function resize(){ 
ctx.canvas.width = window.innerWidth ; 
ctx.canvas.height = window.innerHeight ; 
} 
	
// Stores the initial position of the cursor 
let coord = {x:0 , y:0}; 

// This is the flag that we are going to use to 
// trigger drawing 
let paint = false; 
	
// Updates the coordianates of the cursor when 
// an event e is triggered to the coordinates where 
// the said event is triggered. 
function getPosition(event){ 
coord.x = event.clientX - canvas.offsetLeft; 
coord.y = event.clientY - canvas.offsetTop; 
} 

// The following functions toggle the flag to start 
// and stop drawing 
function startPainting(event){ 
paint = true; 
getPosition(event); 
} 
function stopPainting(){ 
paint = false; 
} 
	
function sketch(event){ 
if (!paint) return; 
ctx.beginPath(); 
	
ctx.lineWidth = size; 

// Sets the end of the lines drawn 
// to a round shape. 
ctx.lineCap = 'round';
	
	
// The cursor to start drawing 
// moves to this coordinate 
ctx.moveTo(coord.x, coord.y); 

// The position of the cursor 
// gets updated as we move the 
// mouse around. 
getPosition(event); 

// A line is traced from start 
// coordinate to this coordinate 
ctx.lineTo(coord.x , coord.y); 
	
// Draws the line. 
ctx.stroke(); 
} 

