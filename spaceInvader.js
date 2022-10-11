"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.beginPath();
    context.fillStyle = 'black';
    context.beginPath()
    context.rect(50,50,300,300);
    context.fill();

    context.beginPath(); 
    context.fillStyle = '#66ff00';
    context.beginPath();
    context.rect(130,135,50,50);
    context.rect(180,135,50,50);
    context.rect(230,135,50,50);
    context.rect(180,175,50,50);
    context.rect(80,230,50,50)
    context.rect(280,230,50,50);
    context.fill();


}