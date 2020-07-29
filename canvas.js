window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //resizing
    canvas.height = "1000";
    canvas.width = "1400";

    //variables 
    let painting = false;

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
        //ctx.lineWidth = 5;
        ctx.lineWidth = 10;
        //ctx.lineWidth = 15;
        //ctx.lineCap = "triangle";
        //ctx.lineCap = "square";
        ctx.lineCap = "round";
        ctx.strokeStyle = "Black";

        ctx.lineTo(e.clientX-530, e.clientY-95);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-530, e.clientY-95);
    }
    //Eventlisteners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

});