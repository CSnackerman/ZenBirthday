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
var balloon = new Balloon (50, 50)


function main() {

    ctx.drawImage (backgroundImage, 0, 0, 500, 500)

    balloon.draw (ctx)
    present.draw (ctx)
    cake.draw (ctx)


    requestAnimationFrame (main)
}

main()