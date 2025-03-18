let canvas = document.querySelector('canvas')
console.log(canvas)
const c = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth
const gravity = .8;

class Player {
    constructor(color='blue'){
        this.position = {
            x : 100,
            y : 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 100;
        this.height = 100;
        this.color = color;
    }

    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
            this.draw()
            // while (this.position.y <= 729){
                this.position.y += this.velocity.y  
                this.velocity.y += gravity
            // }
    }
}

const player = new Player()

// let info = addEventListener('mousemove', (event) => {
//     console.log(event.pageY)
// })

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
}


animate()