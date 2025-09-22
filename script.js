// 🌸 Pétalos cayendo
function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.innerHTML = "🌼";
  petalo.style.position = "absolute";
  petalo.style.left = Math.random() * window.innerWidth + "px";
  petalo.style.top = "-50px";
  petalo.style.fontSize = Math.random() * 20 + 20 + "px";
  petalo.style.pointerEvents = "none";
  petalo.style.zIndex = "1";
  petalo.style.animation = "caer " + (Math.random() * 5 + 5) + "s linear";
  
  document.getElementById("flores").appendChild(petalo);

  setTimeout(() => petalo.remove(), 10000);
}
setInterval(crearPetalo, 800);

const estilo = document.createElement("style");
estilo.innerHTML = `
@keyframes caer {
  0% { transform: translateY(-50px) rotate(0deg); opacity:1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity:0; }
}`;
document.head.appendChild(estilo);

// 🎶 Música
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("musica-btn");
let sonando = false;

btnMusica.addEventListener("click", () => {
  if (sonando) {
    musica.pause();
    btnMusica.textContent = "🎶 Música";
  } else {
    musica.play();
    btnMusica.textContent = "⏸️ Pausar";
  }
  sonando = !sonando;
});

// 📸 Lightbox
const imagenes = document.querySelectorAll(".slides img");
const lightbox = document.getElementById("lightbox");
const cerrar = document.querySelector(".cerrar");
const imagenAmpliada = document.getElementById("imagen-ampliada");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    imagenAmpliada.src = img.src;
  });
});
cerrar.addEventListener("click", () => lightbox.style.display = "none");

// ⬆️ Botón arriba
const btnArriba = document.getElementById("arriba-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
});
btnArriba.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

// 🎉 Confeti al hacer clic
const canvas = document.getElementById("confeti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetis = [];
document.addEventListener("click", (e) => {
  for (let i = 0; i < 20; i++) {
    confetis.push({
      x: e.clientX,
      y: e.clientY,
      r: Math.random() * 6 + 4,
      dx: (Math.random() - 0.5) * 4,
      dy: Math.random() * -4 - 2,
      color: `hsl(${Math.random()*360}, 100%, 50%)`
    });
  }
});

function animarConfeti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetis.forEach((c, i) => {
    c.x += c.dx;
    c.y += c.dy;
    c.dy += 0.1;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
    ctx.fillStyle = c.color;
    ctx.fill();
    if (c.y > canvas.height) confetis.splice(i,1);
  });
  requestAnimationFrame(animarConfeti);
}
animarConfeti();

// ⏳ Contador de días
const inicio = new Date("2024-10-04"); // 👉 cambia la fecha
const contador = document.getElementById("contador");
function actualizarContador() {
  const hoy = new Date();
  const diff = hoy - inicio;
  const dias = Math.floor(diff / (1000*60*60*24));
  contador.textContent = `Han pasado ${dias} días desde nuestra fecha especial 💛`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 🌟 Frases aleatorias
const frases = [
  "🌻 Gracias por ser parte de mi vida 💙",
  "💙 Eres mi razón de sonreír 🌸",
  "🌞 Contigo, cada día es más bonito 🌈",
  "✨ Eres mi mejor regalo 💕",
  "🌼 Siempre serás especial para mí 💙",
  "🌙 Eres mi estrella en la noche más oscura ⭐",
  "💐 La vida es más linda contigo 🌹",
  "💛 Contigo todo tiene más sentido 🌻"
];

const fraseContenedor = document.getElementById("frase");

function mostrarFraseAleatoria() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  fraseContenedor.textContent = frases[randomIndex];
}

// Mostrar una al inicio
mostrarFraseAleatoria();

// Cambiar frase cada 10 segundos
setInterval(mostrarFraseAleatoria, 10000);
