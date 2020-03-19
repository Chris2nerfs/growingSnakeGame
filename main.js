/*
    voici toute les variables du code
*/
var vx=30;
var vy=0;

var sx=0;
var sy=0;

var fx=0;
var fy=0;

var score=0;
/*
    l'évènement « onkeydown » récupére le code de la touche saisie
*/
document.onkeydown=divDir;
/*
    Fonction « divDir() » sert à sélectionner la direction du serpent.
*/
function divDir(e) {
    if(e.keyCode==37) { // 37 = flèche gauche du clavier
        vx=-30;
        vy=0;
    }
    if(e.keyCode==38) { // 38 = flèche haut du clavier
        vx=0;
        vy=-30;
    }
    if(e.keyCode==39) { // 39 = flèche droite du clavier
        vx=30;
        vy=0;
    }
    if(e.keyCode==40) { // 40 = flèche bas du clavier
        vx=0;
        vy=30;
    }
}
/*
    Fonction « moved » sert à déplacer le serpent.
*/
function move() {
    sx=sx+vx;
    sy=sy+vy;
    if(sx==fx && sy==fy) {
        score++;
        drawFood();
        updateScore();
    } 
    if(sx>1490) {
        sx=0;
        score=0;
        updateScore();
    }
    if(sx<0) {
        sx=1490;
        score=0;
        updateScore();
    }
    if(sy>1490) {
        sy=0;
        score=0;
        updateScore();
    }
    if(sy<0) {
        sy=1490;
        score=0;
        updateScore();
    }
    document.getElementById("snake").style.left=sx+'px';
    document.getElementById("snake").style.top=sy+'px';
}
/*
    Fonction « updateScore() » sert à mettre le score à jour.
*/
function updateScore() {
    document.getElementById("score").innerHTML=score;
}
/*
    Fonction « drawFood() » sert à dessiner de la nourriture.
*/
function drawFood() {
    fx=Math.floor(Math.random()*19)*30;
    fy=Math.floor(Math.random()*19)*30;
    document.getElementById("food").style.left=fx+'px';
    document.getElementById("food").style.top=fy+'px';
}
/*
    Fonction « start() » sert à débuter le jeu.
*/
function start() {
    setInterval(move,300);
    drawFood();
}

start();
