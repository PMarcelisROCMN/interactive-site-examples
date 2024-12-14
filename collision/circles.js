const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;

class Target {

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        canvas.addEventListener('click', (event) => {
            this.checkIfClicked(event);
        });
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    checkIfClicked(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; // Mouse X relative to canvas
        const mouseY = event.clientY - rect.top; // Mouse Y relative to canvas
    
        // The circle's center is already (this.x, this.y)
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
    
        if (distance <= this.radius) {
            this.getHit();
        }
    }
    

    getHit() {
        console.log('Circle clicked');
        this.radius = Math.random() * 300 + 30;
        this.x = Math.random() * canvas.width + 1;
        this.y = Math.random() * canvas.height + 1;
        console.log('New Circle X:', this.x, 'New Circle Y:', this.y, 'New Circle Radius:', this.radius);
    }
}

const smallTarget = new Target(200, 200, 50, 'target.png');


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    smallTarget.draw();
    requestAnimationFrame(update);
}

update();