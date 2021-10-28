class Flame {

    constructor (candle_x, candle_y) {

        this.x = candle_x
        this.y = candle_y

        this.w = 50
        this.h = 50
        
        this.frame = Math.floor (Math.random() * Flame.frames.length)

        this.image = new Image()
        this.image.src = Flame.frames [this.frame]
    }

    static frames = [
        'images/flame1.png',
        'images/flame2.png',
        'images/flame3.png',
        'images/flame4.png',
        'images/flame5.png',
        'images/flame6.png',
        'images/flame7.png',
    ]

    animate () {
        setInterval ( () => {
            this.frame = (this.frame + 1) % Flame.frames.length
            this.image.src = Flame.frames [this.frame]
        }, 100)
    }

    draw (context) {
        context.drawImage (this.image, this.x, this.y, this.w, this.h)
    }
}

export {Flame}