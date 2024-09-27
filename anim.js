// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

const carousel = document.getElementById('carousel'); // Cambiado a getElementById
    
for (let i = 1; i <= 97; i++) {
    const div = document.createElement('div');
    div.classList.add('fotos');
    div.innerHTML = `<img src="img/imagen${i}.jpg" alt="Imagen ${i}">`;
    carousel.appendChild(div);
}

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me han preguntado que si tú eres mi verdadero amor, y yo", time: 28 },
  { text: "Yo les digo es el amor de mi vida", time: 33 },
  { text: "Gracias por quererme como yo te quiero", time: 37 },
  { text: "No me veo sin ti y no te exagero", time: 43 },
  { text: "Y si a lo mejor no todo es perfecto pero...", time: 52 },
  { text: "Pero se soluciona con besos", time: 58 },
  { text: "Igual te hago enojar", time: 62 },
  { text: "Hasta a veces llorar", time: 65 },
  { text: "Mas sabes que te amo y quiero que recuerdes esto", time: 68 },
  { text: "Siempre te voy a querer", time: 77 },
  { text: "Me aseguraré de enamorarte cada día", time: 82 },
  { text: "Aun con mis defectos, aún con mis locuras", time: 87 },
  { text: "Y mis tonterías", time: 93 },
  { text: "Siempre te voy a querer", time: 99 },
  { text: "Te voy a cuidar por el resto de mi vida", time: 104 },
  { text: "Hasta que la muerte, un día nos separe", time: 110 },
  { text: "Yo voy a ser tuyo", time: 115 },
  { text: "y tú mía", time: 120 },
  { text: "Y es cierto a lo mejor y no todo es perfecto pero", time: 151 },
  { text: "Pero se soluciona con besos", time: 157 },
  { text: "Igual te hago enojar, Hasta a veces llorar", time: 163 },
  { text: "Mas sabes que te amo y quiero que recuerdes esto...", time: 168 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  
  // Añade la clase de animación
  titulo.classList.add("fadeOut"); 

  // Espera que termine la animación antes de ocultar el elemento
  setTimeout(function () {
    titulo.style.display = "none"; // Oculta el elemento
  }, 5000); // Coincide con la duración de la animación
}

// Llama a la función después de 10 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 10000);