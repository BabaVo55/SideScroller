let canvas = document.querySelector('canvas')
console.log(canvas)
const c = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth

class Player {
    constructor(){
        this.position = {
            x : 100,
            y : 100
        }
        this.width = 100;
        this.height = 100;
    }

    draw(){
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
player.draw()