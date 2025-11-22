const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas
function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

// Palabras que caerán
const palabras = ["Perdón", "Lo siento", "Discúlpame", "Perdóname", "fui un idiota", "estoy arrepentido"];
let drops = [];

// Crear drops de palabras
function crearDrops() {
    drops = [];
    const cantidad = window.innerWidth < 600 ? 35 : 60;

    for (let i = 0; i < cantidad; i++) {
        drops.push({
            text: palabras[Math.floor(Math.random() * palabras.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 1.5 + 1,  // velocidad más suave
            size: Math.random() * 18 + 16
        });
    }
}

crearDrops();
window.addEventListener("resize", crearDrops);

// Animar caída de palabras
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
        ctx.fillStyle = "rgba(160, 160, 255, 0.9)";
        ctx.font = `${d.size}px Poppins`;
        ctx.textBaseline = "top"; // mejora posición vertical
        ctx.fillText(d.text, d.x, d.y);

        d.y += d.speed;

        // Reiniciar drop cuando sale de la pantalla
        if (d.y > canvas.height + 20) {
            d.y = -d.size;
            d.x = Math.random() * canvas.width;
            d.text = palabras[Math.floor(Math.random() * palabras.length)];
            d.size = Math.random() * 18 + 16;
            d.speed = Math.random() * 1.5 + 1;
        }
    });

    requestAnimationFrame(animar);
}

animar();
