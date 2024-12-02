const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


canvas.addEventListener('mousedown', (event) => {
    getMousePosition(canvas, event);
});

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);

    circles.forEach(element => {
        if (element.isClicked(x, y)) {
            console.log('clicked');
            circles.splice(circles.indexOf(element), 1);
        }
    });
}

function pointInsideCircle(x, y, cx, cy, radius) {
    const distance =
    Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    return distance < radius;
}

class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    isClicked(x, y) {
        const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distance < this.radius;
    }
}

var circles = [];

for (let i = 0; i < 10; i++){
    const ball = new Ball(Math.random() * canvas.width, Math.random() * canvas.height, 20);
    circles.push(ball);
    // ball.draw();
}

function update () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(ball => {
        ball.draw();
    });
    requestAnimationFrame(update);
}

update();