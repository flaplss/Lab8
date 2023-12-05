window.onload = function() {
    canvas1 = document.getElementById("canv1");
    context1 = canvas1.getContext("2d");
    context1.lineWidth=33;
    let mouse = { x:0, y:0};
    let draw = false;
    canvas1.addEventListener("mousedown", function(ev){
        x = ev.offsetX;
        y = ev.offsetY;
        draw = true;
        context1.beginPath();
        context1.moveTo(x, y);
    });
    canvas1.addEventListener("mousemove", function(ev){
        if(draw==true){
            x = ev.offsetX;
            y = ev.offsetY;
            context1.lineTo(x, y);
            context1.stroke();
        }
    });
    canvas1.addEventListener("mouseup", function(ev){
        if(draw==true){
            x = ev.offsetX;
            y = ev.offsetY;
            context1.lineTo(x, y);
            context1.stroke();
            context1.closePath();
            draw = false;
        }
    });
    canvas1.addEventListener("mouseout", function(ev){
        if(draw==true){
            x = ev.offsetX;
            y = ev.offsetY;
            context1.lineTo(x, y);
            context1.stroke();
            context1.closePath();
            draw = false;
        }
    });

}
