const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();

 // mouse vent
canvas.addEventListener('mousemove', function(event) {
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(x, y);
});