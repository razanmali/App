
function shotHandler() {
    var x = document.getElementById("x").value - 0;
    var y = document.getElementById("y").value - 0;
    var score = shot(x, y);
    document.getElementById('result').innerHTML = "Итог " + score;
}

function shoterHandler() {
    var count = document.getElementById("count").value - 0;
    var max = document.getElementById("max").value - 0;
    var min = document.getElementById("min").value - 0;
    var score = shoter(count, min, max);
    document.getElementById('resultate').innerHTML = "Итог " + score;
}
function cclick() {
    var ans = document.getElementById('answer');
    return ans;
}
function getRoots(a, b, c, d, e) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e))
        return 4;
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d))
        return 3;
    if (!isNaN(a) && !isNaN(b) && !isNaN(c))
        return 2;
    if (!isNaN(a) && !isNaN(b))
        return 1;
    return null;
}

function getRootsHandler() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var roots = getRoots(
        a ? a - 0 : NaN,
        b ? b - 0 : NaN,
        c ? c - 0 : NaN,
        d ? d - 0 : NaN,
        e ? e - 0 : NaN
    );

    console.log(roots);
}

function menuHandler(event) {
    var contents = document.querySelectorAll('.content-item');
    console.log(contents);
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add('hide');
    }
    var id = event.target.dataset.content;
    console.log(id);
    document.getElementById(id).classList.remove('hide');
}

window.onload = function () {
    var shotButton = document.getElementById("shot");
    shotButton.addEventListener('click', shotHandler);

    var shoterButton = document.getElementById("shoter");
    shoterButton.addEventListener('click', shoterHandler);

    var getRootsButton = document.getElementById('getRoots');
    getRootsButton.addEventListener('click', getRootsHandler);

 

    var menuButtons = document.querySelectorAll('.menu-item');

    for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].addEventListener('click', menuHandler);
    }
    setQuest();

    const WIDTH = window.innerWidth-105;
    const HEIGHT = window.innerHeight;
    console.log(WIDTH,HEIGHT);
    const WIN = {
        left: -5,
        bottom: -5,
        width: 10,
        height: 10
    }

    const ZOOM=0.5;

    let canvas = new Canvas({WIDTH:500, HEIGHT:500, WIN, callbacks:{wheel,render,mousedown,mouseup,mousemove,Rect}});

 

    

  
  

    function wheel(event){
        const delta=(event.wheelDelta > 0) ? - ZOOM : ZOOM;
        //if(WIN.widht+delta>0){
        WIN.width+=delta;
        WIN.height+=delta;
        WIN.left-=delta/2;
        WIN.bottom-=delta/2;
        render(event);
        //}
    }

    function render(event){
        canvas.clear();
        // printCells();
        printOXY();
        for(let i=0; i<funcs.length; i++){ 
        printFunction(funcs[i].f,funcs[i].color);
       
        }
        Rect(event);

    }

    const funcs=[
        // {
        //     f: Math.cos,color: "red"
        // },
        // {
        //     f: Math.sin, color: "#00ff00"
        // },
        // {
        //     f:(x) => x*x, color: "#ff0099"
        // },
        // {
        //     f:(x) => Math.sin(x)*1/x,color:"#00ffcc"
        // },
        // {
        //     f: (x) => x, color:"#330066"
        // }
    ]
    let canMove=false;

    function Rect(event) {
        const x = Math.floor(canvas.s1(event.offsetX));
        const y = Math.ceil(canvas.s2(event.offsetY));

        canvas.printRect(x,y,1,1,"pink");

     }

    function mousedown(){
        canMove=true;
    }

    function mouseup(){
        canMove=false;
    }

    function mousemove(event){
        if(canMove){
            WIN.left-=canvas.sx(event.movementX/10);
            WIN.bottom+=canvas.sy(event.movementY/10);
            render(event);
        }
    }

    // function printOXY() {
    //     canvas.line(WIN.left, 0, WIN.width + WIN.left, 0,"black");
    //     canvas.line(0, WIN.bottom, 0, WIN.height + WIN.bottom, "black");
    // }

    // function printCells() {
    //     for (let i = 0; i <= WIN.width+WIN.left; i = i + 1) {
    //         canvas.line(i, WIN.bottom, i, WIN.height+WIN.bottom, '#d7d7d7')
    //     }
    //     for (let i = 0; i <= WIN.width+WIN.left; i = i + 1) {//number
    //         canvas.text(String(i),i,-0.5)
    //     }
    //     for (let i = 0; i <= WIN.height+WIN.bottom; i = i + 1) {
    //         canvas.line(WIN.left, i, WIN.width+WIN.left, i, '#d7d7d7')
    //     }
    //     for (let i = 1; i <= WIN.height+WIN.bottom; i = i + 1) {//nuber
    //         canvas.text(String(i),-0.5,i)
    //     }
    //     for (let i = 0; i >= WIN.left; i = i - 1) {
    //         canvas.line(i, WIN.bottom, i, WIN.height+WIN.bottom, '#d7d7d7')
    //     }
    //     for (let i = 0; i >= WIN.left; i = i - 1) {//number
    //         canvas.text(String(i),i,-0.5)
    //     }
    //     for (let i = 0; i >= WIN.bottom+WIN.bottom; i = i - 1) {
    //         canvas.line(WIN.left, i, WIN.width+WIN.left, i, '#d7d7d7');
    //     }
    //     for (let i = 0; i >= WIN.bottom+WIN.bottom; i = i - 1) {
    //         canvas.text(String(i),-0.5,i)
    //     }

    //     for (let i = 0; i < WIN.width; i = i + 1) {//черточки
    //         canvas.line(i, WIN.bottom / 46, i, WIN.height / 76, '#787d85')
    //     }
    //     for (let i = 0; i < WIN.width; i = i + 1) {
    //         canvas.line(WIN.left / 46, i, WIN.width / 76, i, '#787d85')
    //     }
    //     for (let i = 0; i > WIN.left; i = i - 1) {
    //         canvas.line(i, WIN.bottom / 46, i, WIN.height / 76, '#787d85')
    //     }
    //     for (let i = 0; i > WIN.left; i = i - 1) {
    //         canvas.line(WIN.left / 46, i, WIN.width / 76, i, '#787d85')
    //     }
        
    
    // } 

    // function printFunction(f, color) {
    //     const dx = WIN.width / 100;
    //     let x = WIN.left;
    //     while (x <= WIN.width + WIN.left) {
    //         canvas.line(x, f(x), x + dx, f(x + dx), color);
    //         x += dx;
    //     }
    // }

    function printOXY(){
        const {left, bottom,width,height} = WIN;
        for (let i = 0; i < width + left ; i++){
            canvas.line(i,bottom,i,height + bottom , '#ddd');
            canvas.line(i,0,i+0.005,-0.2, '#000');
            canvas.text(String(i),i,-0.5)
        }
        for (let i = 0; i < height + bottom ; i++){
            canvas.line(left,i,width + left,i , '#ddd');
            canvas.line(0,i,0.2,i+0.005, '#000');
            canvas.text(String(i),-0.5,i)
    
        }
        for (let i = 0; i >left ; i--){
            canvas.line(i,bottom,i,height + bottom , '#ddd');
            canvas.line(0,i+0.005,0.2,i, '#000');
            canvas.text(String(i),i,-0.5)
           
        }
        for (let i = 0; i > bottom ; i--){
            canvas.line(left,i,width + left,i , '#ddd');
            canvas.line(i,0,i+0.005,-0.2, '#000');
            canvas.text(String(i),-0.5,i)
        }
    
        //osi
        canvas.line(left, 0 , width + left , 0);
        // drawing the arrow on OX.
        canvas.line(width + left,0, width+left - 0.2,(0.2)* Math.sin(0.785));
        canvas.line(width + left,0, width+left - 0.2, -(0.2)* Math.sin(0.785));
        canvas.line(0,bottom,0,height+ bottom);
        // darwing the arrow on OY.
        canvas.line(0, height+ bottom,(0.2)* Math.sin(0.785), height+ bottom -0.2);
        canvas.line(0, height+ bottom,-(0.2)* Math.sin(0.785), height+ bottom -0.2);
        
      
    }
    
    
    
    function printFunction (f,color){
        var dx = WIN.width / 100;
        var x = WIN.left;
        while(x <= WIN.width + WIN.left){
            canvas.line(x,f(x),x + dx,f(x+dx),color);
            x +=dx;
            
        }
    }
    
    canvas.clear();

    // printCells();
    printOXY();
    // printFunction(Math.cos, "green");
    // printFunction(Math.sin, "red");
    // printFunction(function(x){return x*x}, "purple");
    // printFunction(function(x){return -x*x}, "purple");
    // printFunction(function(x){return x}, "purple");

}