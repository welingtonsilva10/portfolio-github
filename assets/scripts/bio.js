const canvas = document.getElementById('canvasEffects');
const ctx = canvas.getContext('2d');
const circles = [];

document.addEventListener('DOMContentLoaded', function() {
    updateCanvasSize();
});

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function updateCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    circles.forEach(circle => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;
        
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            circle.speedX = -circle.speedX;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            circle.speedY = -circle.speedY;
        }
        
        drawCircle(circle.x, circle.y, circle.radius, circle.color);
    });
    
    requestAnimationFrame(updateCircles);
}

const circleCharacteristics = [
    { radius: 60,  speedX: 1,    speedY: 1,    color: '#122932b8' },
    { radius: 40,  speedX: -0.5, speedY: 0.5,  color: '#2C514Cb8' },
    { radius: 120, speedX: 0.9,  speedY: -0.9, color: '000000d8' },
    { radius: 50,  speedX: -0.5,  speedY: 0.7, color: '#576066b8' },
    { radius: 150, speedX: -0.1,  speedY: -0.9, color: 'ffffffb8' },
    { radius: 70,  speedX: 2.2, speedY: -1.2, color: '#95818Db8' },
    { radius: 250, speedX: -0.9,  speedY: -0.9, color: '#A6ECE0b8' },
];

circleCharacteristics.forEach(char => {
    circles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 * 7,
        radius: char.radius,
        speedX: char.speedX,
        speedY: char.speedY,
        color: char.color
    });
});

window.addEventListener('resize', () => {
    updateCanvasSize();
});

updateCanvasSize();
updateCircles();