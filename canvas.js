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
    let bttn13 = document.querySelector("#button13");
    let bttn14 = document.querySelector("#button14");
    let bttn15 = document.querySelector("#button15");
    let bttn16 = document.querySelector("#button16");
    let bttn17 = document.querySelector("#button17");
    let bttn18 = document.querySelector("#button18");
    let bttn19 = document.querySelector("#button19");
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

    
    //Eventlisteners
    bttn1.addEventListener('click', () => ctx.strokeStyle ="#000000")
    bttn1.addEventListener('click', () => ctx.lineCap ="round")
    bttn2.addEventListener('click', () => ctx.strokeStyle ="#ff0000")
    bttn2.addEventListener('click', () => ctx.lineCap ="round")
    bttn3.addEventListener('click', () => ctx.strokeStyle ="#29a329")
    bttn3.addEventListener('click', () => ctx.lineCap ="round")
    bttn4.addEventListener('click', () => ctx.strokeStyle ="#009eff")
    bttn4.addEventListener('click', () => ctx.lineCap ="round")
    bttn5.addEventListener('click', () => ctx.strokeStyle ="#9800ff")
    bttn5.addEventListener('click', () => ctx.lineCap ="round")
    bttn6.addEventListener('click', () => ctx.strokeStyle ="#ffff00")
    bttn6.addEventListener('click', () => ctx.lineCap ="round")
    bttn7.addEventListener('click', () => ctx.strokeStyle ="#ffd700")
    bttn7.addEventListener('click', () => ctx.lineCap ="round")
    bttn8.addEventListener('click', () => ctx.strokeStyle ="#ff00ff")
    bttn8.addEventListener('click', () => ctx.lineCap ="round")
    bttn9.addEventListener('click', () => ctx.strokeStyle ="#b6ffff")
    bttn9.addEventListener('click', () => ctx.lineCap ="round")
    bttn10.addEventListener('click', () => ctx.strokeStyle ="#808080")
    bttn10.addEventListener('click', () => ctx.lineCap ="round")
    bttn11.addEventListener('click', () => ctx.strokeStyle ="#800000")
    bttn11.addEventListener('click', () => ctx.lineCap ="round")
    bttn12.addEventListener('click', () => ctx.strokeStyle ="#666633")
    bttn12.addEventListener('click', () => ctx.lineCap ="round")
    bttn13.addEventListener('click', () => ctx.strokeStyle ="#00ff00")
    bttn13.addEventListener('click', () => ctx.lineCap ="round")
    bttn14.addEventListener('click', () => ctx.strokeStyle ="#669999")
    bttn14.addEventListener('click', () => ctx.lineCap ="round")
    bttn15.addEventListener('click', () => ctx.strokeStyle ="#003399")
    bttn15.addEventListener('click', () => ctx.lineCap ="round")
    bttn16.addEventListener('click', () => ctx.strokeStyle ="#ffffff")
    bttn16.addEventListener('click', () => ctx.lineCap ="square")
    bttn16.addEventListener('click', () => x = 30)
    bttn17.addEventListener('click', () => x = 5)
    bttn18.addEventListener('click', () => x = 10)
    bttn19.addEventListener('click', () => x = 20)

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);


});