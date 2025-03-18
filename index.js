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
            y: 0
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

            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            if (this.position.x +  this.width <= 0 && 
                this.position.x + this.width >= canvas.width
            ){
                this.velocity.x = 0;
            }

            if (this.position.y + this.velocity.y + this.height <= canvas.height){
                this.position.y += this.velocity.y;
                this.velocity.y += gravity
            } else {
                this.velocity.y = 0;
            }
    }
}

const player = new Player()

// let info = addEventListener('mousemove', (event) => {
//     console.log(event.pageY)
// })

// let info = addEventListener('keydown', (event) => {
//     console.log(event)
// })




function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
}



animate()

window.addEventListener('keydown', (event) => {
    // if (event.key === 'd'){
    //     this.position.x + 1;
    // }
    switch(event.key){
        case 'a':
            player.velocity.x += 1;
            break;
        case 'd':
            player.velocity.x -= 1;
            break;
        case 'w': 
            player.velocity.y += -20;
            break
    }
    
})
window.addEventListener('keyup', (event) => {
    if (event.key === 'd'){
        player.velocity.x = 0;
    } 
    if (event.key === 'a'){
        player.velocity.x = 0;
    }

    // switch(event.key){
    //     case 'a':
    //         player.velocity.x = 0;
    //         break;
    //     case 'd':
    //         player.velocity.x = 0;
    //         break;
    // }
    
})