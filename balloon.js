class Balloon {
    constructor(x, y) {
        this.w = 100
        this.h = 100
        this.x = x
        this.y = y
        this.image = new Image()
        this.image.src = Balloon.images [ Math.floor (Math.random() * Balloon.images.length) ];
    }

    static images = [
        'images/balloon_blue.png',
        'images/balloon_orange.png',
        'images/balloon_green.png',
        'images/balloon_red.png'
    ]

    draw (context) {
        context.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

export {Balloon}