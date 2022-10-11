"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.beginPath();
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();

    context.beginPath(); 
    context.fillStyle = '#66ff00';
    context.beginPath();
    context.rect(65,65,50,50);
    context.rect(100,100,50,50);
    context.rect(135,135,50,50);

    context.rect(285,65,50,50);
    context.rect(250,100,50,50);
    context.rect(215,135,50,50);

    context.rect(65,285,50,50);
    context.rect(100,250,50,50);
    context.rect(135,215,50,50);

    context.rect(285,285,50,50);
    context.rect(250,250,50,50);
    context.rect(215,215,50,50);

    context.rect(175,175,50,50);
    context.fill();


}