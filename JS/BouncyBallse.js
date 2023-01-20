let ballsPosX = [500, 300, 700,300, 900]
let ballsPosY = [600, 300, 400, 650, 600]
let ballsDirectionX = [1, -0.5, 0.75, 0.5, -1];
let ballsDirectionY = [-1, 0.5, -1, -1 , 0.5];
const ballSpeed = 2;
const ballsAmount = 5;
const ballRadius = 200;
setInterval(SimBalls, 10);
function SimBalls() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    for (let i = 0; i < ballsAmount; i++) {
        ballsPosX[i] += ballsDirectionX[i] * ballSpeed;
        ballsPosY[i] += ballsDirectionY[i] * ballSpeed;
        if (ballsPosX[i]< 0) {
            //ballsPosX[i] = ballRadius/2;
            ballsDirectionX[i] *= -1;
        }
        if (ballsPosX[i] +ballRadius/8 > width-ballRadius) {
            //ballsPosX[i] = width - ballRadius/2;
            ballsDirectionX[i] *= -1;
        }
        if (ballsPosY[i] < 0) {
            //ballsPosY[i] = ballRadius/2;
            ballsDirectionY[i] *= -1;
        }
        if (ballsPosY[i]+ballRadius/8> height-ballRadius) {
          //  ballsPosY[i] = height - ballRadius/2;
            ballsDirectionY[i] *= -1;
        }
        for(let b = 0;b<ballsAmount;b++)
        {
            if(b==i)
            {
                continue
            }
            else
            {
                let dx = ballsPosX[i]-ballsPosX[b];
                let dy = ballsPosY[i]-ballsPosY[b];
                let distance = Math.sqrt(dx*dx+dy*dy);
                if(distance<=ballRadius)
                {
                    ballsDirectionX[i] = (ballsPosX[i]-ballsPosX[b]);
                    ballsDirectionX[i] = ballsDirectionX[i]/Math.abs(ballsDirectionX[i])
                    ballsDirectionY[i] = (ballsPosY[i]-ballsPosY[b]);
                    ballsDirectionY[i] = ballsDirectionY[i]/Math.abs(ballsDirectionY[i])
                    ballsDirectionX[b] = (ballsPosX[b]-ballsPosX[i]);
                    ballsDirectionX[b] = ballsDirectionX[b]/Math.abs(ballsDirectionX[b])
                    ballsDirectionY[b] = (ballsPosY[b]-ballsPosY[i]);
                    ballsDirectionY[b] = ballsDirectionY[b]/Math.abs(ballsDirectionY[b])
                }
            }
        }
        document.getElementById("ball"+i.toString()).style.left = ballsPosX[i]+'px';
        document.getElementById("ball"+i.toString()).style.top = ballsPosY[i]+'px';
    }
}