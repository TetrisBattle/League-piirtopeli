window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = window.innerHeight/100*98;
    canvas.width = window.innerWidth/100*99;


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
    let x = 10;
    let Cursori = "round"
    ctx.lineCap = Cursori;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth = x;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    function change(cursorType){
        cursor = cursorType;
    }
    //Eventlisteners
    bttn1.addEventListener('click', () => ctx.strokeStyle ="black")
    bttn1.addEventListener('click', () => ctx.lineCap ="round")
    bttn2.addEventListener('click', () => ctx.strokeStyle ="red")
    bttn2.addEventListener('click', () => ctx.lineCap ="round")
    bttn3.addEventListener('click', () => ctx.strokeStyle ="green")
    bttn3.addEventListener('click', () => ctx.lineCap ="round")
    bttn4.addEventListener('click', () => ctx.strokeStyle ="blue")
    bttn4.addEventListener('click', () => ctx.lineCap ="round")
    bttn5.addEventListener('click', () => ctx.strokeStyle ="purple")
    bttn5.addEventListener('click', () => ctx.lineCap ="round")
    bttn6.addEventListener('click', () => ctx.strokeStyle ="yellow")
    bttn6.addEventListener('click', () => ctx.lineCap ="round")
    bttn7.addEventListener('click', () => ctx.strokeStyle ="orange")
    bttn7.addEventListener('click', () => ctx.lineCap ="round")
    bttn8.addEventListener('click', () => ctx.strokeStyle ="pink")
    bttn8.addEventListener('click', () => ctx.lineCap ="round")
    bttn9.addEventListener('click', () => ctx.strokeStyle ="white")
    bttn9.addEventListener('click', () => ctx.lineCap ="square")
    bttn9.addEventListener('click', () => x = 30)
    bttn10.addEventListener('click', () => x = 5)
    bttn11.addEventListener('click', () => x = 10)
    bttn12.addEventListener('click', () => x = 20)
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);


});