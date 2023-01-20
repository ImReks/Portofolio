let ballX=1;
let ballY=1;
let Mx=0;
let My=0;
let EscapeSpeed = 15;
let mevent = new MouseEvent("mousemove")
window.onload=
setInterval(RunFromCursor, 5);
function RunFromCursor()
{
    Mx = mevent.movementX;
    My = mevent.movementY;
    console.log(`X${Mx}Y${My}`)
    /*let dirX = ballX-Mx;
    let dirY = ballY-My;
    let magnitude = Math.sqrt(dirX*dirX+dirY*dirY)
    dirX/=magnitude;
    dirY/=magnitude;
    if(ballX-100>0 && ballX-100<window.innerWidth){
    ballX+=dirX*EscapeSpeed;
    }
    if(ballY-100>0 && ballY-100<window.innerHeight){
    ballY+=dirY*EscapeSpeed;
    }*/
    document.getElementById("ball").style.left = My+'px';
    document.getElementById("ball").style.top = Mx+'px';
}