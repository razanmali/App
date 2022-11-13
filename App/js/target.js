// function printTarget() {
//     var canvas = document.getElementById("graph");
//     var ctx = canvas.getContext("2d");

//     ctx.beginPath();
//     ctx.rect(800, 400, 200, 200); //Квадрат
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.arc(900, 500, 99, 0, Math.PI * 2);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = "2";
//     ctx.moveTo(900, 600);
//     ctx.lineTo(1000, 500);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = "2";
//     ctx.moveTo(1000, 500);
//     ctx.lineTo(900, 400);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = "2";
//     ctx.moveTo(900, 600);
//     ctx.lineTo(800, 500);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = "2";
//     ctx.moveTo(800, 500);
//     ctx.lineTo(900, 400);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.rect(750, 499, 300, 2); //Палка ОХ
//     ctx.fillStyle = "black";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.rect(899, 350, 2, 300); //Палка OY
//     ctx.fillStyle = "black";
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.arc(900, 500, 4, 0, Math.PI * 2);
//     ctx.fillStyle = "white";
//     ctx.fill();
//     ctx.closePath();
// }