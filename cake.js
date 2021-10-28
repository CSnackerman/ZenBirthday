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
            new Candle (this.x + 50, this.y - 20),
            new Candle (this.x + 61, this.y - 20),
            new Candle (this.x + 72, this.y - 20),
            new Candle (this.x + 83, this.y - 20),
            new Candle (this.x + 94, this.y - 20),
            new Candle (this.x + 105, this.y - 20),
            new Candle (this.x + 116, this.y - 20),
            new Candle (this.x + 127, this.y - 20),
            new Candle (this.x + 138, this.y - 20),
            new Candle (this.x + 149, this.y - 20),
            new Candle (this.x + 160, this.y - 20),
            new Candle (this.x + 171, this.y - 20),
            new Candle (this.x + 171, this.y - 20),
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