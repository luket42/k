const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const palabras = ["Perdón", "Lo siento", "Discúlpame", "Perdón...", "Perdóname"];
let drops = [];

for (let i = 0; i < 60; i++) {
    drops.push({
        text: palabras[Math.floor(Math.random() * palabras.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 20 + 18
    });
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
        ctx.fillStyle = "rgba(160, 160, 255, 0.9)";
        ctx.font = `${d.size}px Poppins`;
        ctx.fillText(d.text, d.x, d.y);

        d.y += d.speed;

        if (d.y > canvas.height + 50) {
            d.y = -20;
            d.x = Math.random() * canvas.width;
            d.text = palabras[Math.floor(Math.random() * palabras.length)];
        }
    });

    requestAnimationFrame(animar);
}

animar();
