var canvas;
var music;
var floor1,floor2,floor3,floor4;
var ball,edges; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
floor1 = createSprite(0,580,360,30)
floor1.shapeColor = rgb(255,255,0)

floor2 = createSprite(295,580,200,30)
floor2.shapeColor = rgb(255,0,0)

floor3 = createSprite(515,580,200,30)
floor3.shapeColor = rgb(0,255,0)

floor4 = createSprite(740,580,220,30)
floor4.shapeColor = rgb(0,0,255)

ball = createSprite(random(20,720),100,40,40)
ball.shapeColor = rgb(255,192,203)
ball.velocityX = 7;
ball.velocityY = 5;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));
    edges = createEdgeSprites()
    ball.bounceOff(edges)
    if (floor1.isTouching(ball) && ball.bounceOff(floor1)){
        ball.shapeColor = rgb(255,255,0)
    }

    if (floor2.isTouching(ball) && ball.bounceOff(floor2)){
        ball.shapeColor = rgb(255,0,0)
    }

    if (floor3.isTouching(ball) && ball.bounceOff(floor3)){
        ball.shapeColor = rgb(0,255,0)
    }

    if (floor4.isTouching(ball)){
        ball.shapeColor = rgb(0,0,255)
        ball.velocityX = 0;
        ball.velocityY = 0; 
    }
drawSprites()


    //add condition to check if box touching surface and make it box
}
