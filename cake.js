import {Candle} from './candle.js'

class Cake {
    constructor() {
        this.w = 250
        this.h = 200
        this.x = 250 - this.w / 2
        this.y = 300
        this.image = new Image()
        this.image.src = 'images/cake.png'

        this.candles = [
                
        ]
    }

    draw (context) {

        this.candles.forEach ( (candle) => {

            candle.draw (context)
        })

        context.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

export {Cake}