function Canvas({WIDTH, HEIGHT,WIN, callbacks}) {
    const canvas = document.getElementById('graph');

    const context = canvas.getContext('2d');
    const {wheel,mousedown,mouseup,mousemove,render}=callbacks;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    canvas.addEventListener('mousedown',function(){mousedown()});
    canvas.addEventListener('mouseup',function(){mouseup()});
    canvas.addEventListener('mousemove',function(){mousemove(event)});
    canvas.addEventListener('mousemove',function(){setTimeout(render(event), 1000)});
    canvas.addEventListener('wheel',function(event){wheel(event)});


    

    this.clear = function () {
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.sx = (x) => (x*WIN.width/WIN.width);
    this.sy = (y) => (-y*WIN.height/WIN.height);

    this.s1 = (xs) => (xs*WIN.width/canvas.width+WIN.left);
    this.s2 = (ys) => (-ys*WIN.height/canvas.height + WIN.bottom + WIN.height);

    const xs = (x) => WIDTH * (x - WIN.left) / WIN.width;
    const ys = (y) => HEIGHT - (y - WIN.bottom) / WIN.height * HEIGHT;

    this.printRect = (xss,yss,width,height,color) =>{
        const heightRect = height * canvas.height/WIN.height;
        const widthRect = width * canvas.width/WIN.width;

        context.fillStyle=color;
        context.fillRect(xs(xss),ys(yss),widthRect,heightRect);
        context.fillText(String(xss),xs(xss+0.2),ys(yss+0.2));
        context.fillText(String(yss),xs(xss-0.2),ys(yss - 0.2));
        //console.log(xss,yss,width,height);
    }

    this.text = (text,x,y) => {
        context.fillStyle = "black";
        context.fillText(text,xs(x),ys(y));
    };

    this.line = function (x1, y1, x2, y2, color) {

        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = color || "black";
        context.moveTo(xs(x1), ys(y1));
        context.lineTo(xs(x2), ys(y2));
        context.stroke();
        context.closePath();
    };
    this.line_square = function (x1, y1, x2, y2, color = "black") {

        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = color;
        context.moveTo(xs(x1), ys(y1));
        context.lineTo(xs(x2), ys(y2));
        context.stroke();
        context.closePath();
    };
}
