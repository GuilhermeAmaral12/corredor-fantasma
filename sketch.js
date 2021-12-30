var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
    towerImg = loadImage("tower.png");
    doorImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    ghostImg = loadImage("ghost-standing.png");
    spookySound = loadSound("spooky.wav");

    climbersGroup = new Group();
    doorsGroup = new Group();
    invisibleBlockGroup = new Group();

}

function setup() {
    createCanvas(600, 600);
    tower = createSprite(300, 300);
    tower.addImage("tower", towerImg);
    tower.velocityY = 1;

    spookySound.loop();
    ghost = createSprite(200, 200, 50, 50);
    ghost.addImage(ghostImg);
    ghost.scale = 0.3;

    edges = createEdgeSprites();
}

function draw() {
    background(200);
    if (gameState=='play'){
        if (tower.y>400){
            tower.y=300
        }
        if (keyDown('left_arrow')){
            ghost-=3
        }
        if (keyDown('right_arrow')){
            ghost+=3
        }
        if (keyDown('space')){
            ghost.velocityY=-10;
        }
        ghost.velocityY+=0.8
         if (ghost.y>600)    {
             gameState='end'
         }    
    }
    drawSprites();
if (gameState=='end'){
    background('black')
    fill('red')
    textSize(70)
    text('você perdeu',30,200)
}

    

}