const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;

class Target {

    constructor(x, y, radius, imagePath) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = new Image();
        this.image.src = imagePath;
        this.imageLoaded = false;
        this.image.onload = () => {
            this.imageLoaded = true;
        };

        canvas.addEventListener('click', (event) => {
            this.checkIfClicked(event);
        });
    }

    draw() {
        if (this.imageLoaded) {
            ctx.drawImage(this.image, this.x, this.y, this.radius * 2, this.radius * 2);
        }
    }

    checkIfClicked(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Adjust the circle's center
        const centerX = this.x + this.radius;
        const centerY = this.y + this.radius;

        const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

        if (distance <= this.radius) {
            console.log('Clicked on the circle');
        }
    }
}

const smallTarget = new Target(300, 100, 50, 'target.png');
const bigTarget = new Target(50, 400, 100, 'target.png');


const circle1 = new Target(300, 100, 50, 'target.png');
const circle2 = new Target(50, 100, 80, 'target.png');

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    circle1.draw();
    circle2.draw();
    requestAnimationFrame(update);
}

update();