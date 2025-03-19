let canvas = document.querySelector('canvas')
console.log(canvas)
const c = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth
const gravity = .8;

class Player {
    constructor(position, velocity, color='blue'){
        this.position = position;
        this.velocity = velocity;
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

            if (this.position.x +  this.width <= 0 || 
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

class Platform {
    constructor(position, size, color){
        // {position, size, color}
        this.position = position;
        this.size = size;
        this.color = color;
    }

    draw(){
        c.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
}



const optionA = {
    x: 500,
    y: 100
}

const optionB = {
    x: 300,
    y: 600
}

const optionBSize = {
    width: 200,
    height: 20
}

const player = new Player(optionA,
    velocity = {
        x: 0,
        y: 0
    })
    
const platform = new Platform(optionB, optionBSize, 'blue')


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

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
    platform.draw()

    if (keys.right.pressed == true){
        player.velocity.x = 5
    } 
    else if (keys.left.pressed == true){
        player.velocity.x = -5;
    } 
    else {
        player.velocity.x = 0;
    }
    if (
        player.position.y + player.height >= platform.position.y && // Player is at or below the top of platform
        player.position.y + player.height <= platform.position.y + platform.size.height && // Ensure it's not sinking through
        player.position.x + player.width >= platform.position.x && // Player's right side is past platform's left edge
        player.position.x <= platform.position.x + platform.size.width // Player's left side is before platform's right edge
    ) {
        player.velocity.y = 0;
        // player.position.y = platform.position.y - player.height; // Snap to platform
    }

    // if (
    //     player.position.y + player.height >= platform.position.y + platform.size.height && 
    //     player.position.x + player.width == platform.position.x + platform.size.width
    //  ){
    //     player.velocity.y = 0
    //  }

    
}

console.log(keys.left.pressed)
console.log(keys.right.pressed)


animate()


window.addEventListener('keydown', (event) => {

    switch(event.key){
        case 'a':
            keys.left.pressed = true
            break;
        case 'd':
            keys.right.pressed = true
            break;
        case 'w': 
            player.velocity.y += -15;
            break
    }
    
})
window.addEventListener('keyup', (event) => {

    switch(event.key){
        case 'a':
            keys.left.pressed = false;

            break;
        case 'd':
            keys.right.pressed = false;
            break;
    }
    
})