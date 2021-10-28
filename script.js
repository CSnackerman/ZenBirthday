import {Cake} from './cake.js'
import {Present} from './present.js'
import {Balloon} from './balloon.js'

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext ('2d');



var backgroundImage = new Image()
backgroundImage.src = "images/wallpaper.jpg"


// Birthday Objects
var cake = new Cake()

var present = new Present(25, 375)

var balloons = []
spawnBalloons()


function main() {

    ctx.drawImage (backgroundImage, 0, 0, 500, 500)

    
    // update birthday objects
    updateBalloons()

    // render balloons
    balloons.forEach ( (balloon) => {
        balloon.draw (ctx)
    })

    // render present
    present.draw (ctx)

    // render cake
    cake.draw (ctx)


    requestAnimationFrame (main)
}

main()

// EXTRA STUFF
function spawnBalloons () {
    setInterval ( () => {

        let x = Math.floor (Math.random() * 500)
        let balloon = new Balloon (x, 500)
        balloons.push (balloon)

    }, 1000)
}

function updateBalloons () {

    let numBalloons = balloons.length
    for (let i = 0; i < numBalloons; i++) {
        
        balloons [i].move()

        if (balloons[i].y < 0) {
            balloons.splice (i, 1)
            numBalloons--;
        }
    }
}