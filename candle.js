import {Flame} from './flame.js'

class Candle {
    constructor(x, y) {
        
        this.w = 25
        this.h = 75
        this.x = x
        this.y = y

        this.image = new Image()
        this.image.src = Candle.images [Math.floor ( Math.random() * Candle.images.length )]

        this.lit = true

        this.flame = new Flame(this.x, this.y)
        this.flame.animate()
    }

    static images = [
        'images/candle_blue.png',
        'images/candle_green.png',
        'images/candle_red.png'
    ]

    draw (context) {

        context.drawImage (this.image, this.x, this.y, this.w, this.h)

        if (this.lit) {
            this.flame.draw (context)
        }
    }

}

export {Candle}