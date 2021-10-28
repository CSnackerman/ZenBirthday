class Present {
    constructor(x, y) {
        this.w = 125
        this.h = 100
        this.x = x
        this.y = y
        this.image = new Image()
        this.image.src = 'images/present.png'
    }

    draw (context) {
        context.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

export {Present}