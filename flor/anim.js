var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When we're out in a crowd, laughing loud", time: 0 },
  { text: "And nobody knows why", time: 5 },
  { text: "When we're lost at a club, getting drunk", time: 13 },
  { text: "And you give me that smile", time: 17 },
  { text: "Going home in the back of a car", time: 24 },
  { text: "And your hand touches mine", time: 29 },
  { text: "When we're done making love and you look up", time: 36 },
  { text: "And give me those eyes", time: 42 },
  { text: "'Cause all of the small things that you do", time: 48 },
  { text: "Are what remind me why I fell for you", time: 54 },
  { text: "And when we're apart and I'm missing you", time: 60 },
  { text: "I close my eyes and all I see is you", time: 66 },
  { text: "And the small things you do", time: 72 },
  { text: "When you call me at night", time: 84 },
  { text: "While you're out getting high with your friends", time: 87 },
  { text: "(High with your friends)", time: 93 },
  { text: "Every 'hi', every 'bye', every 'I love you' you've ever said", time: 96 },
  { text: "(You've ever said)", time: 105 },
  { text: "'Cause all of the small things that you do", time: 108 },
  { text: "Are what remind me why I fell for you", time: 114 },
  { text: "And when we're apart and I'm missing you", time: 120 },
  { text: "I close my eyes and all I see is you", time: 126 },
  { text: "And the small things you do", time: 131 },
  { text: "When we're done making love", time: 157 },
  { text: "And you look up and give me those eyes", time: 159 },
  { text: "'Cause all of the small things that you do", time: 168 },
  { text: "Are what remind me why I fell for you", time: 174 },
  { text: "And when we're apart and I'm missing you", time: 180 },
  { text: "I close my eyes and all I see is you", time: 186 },
  { text: "And the small things you do", time: 192 },
  { text: "All the small things you do", time: 204 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  
  // Encontrar la línea actual en base al tiempo del audio
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4 // Reduce el margen de tiempo a 4 segundos
  );

  if (currentLine) {
    var fadeDuration = 0.5; // Duración del efecto de aparición
    var fadeOutDuration = 0.5; // Duración del efecto de desaparición
    var lineStart = currentLine.time;
    var lineEnd = lineStart + 4; // Duración de la línea en pantalla
    
    // Calcula el tiempo de desvanecimiento basado en el tiempo actual
    var fadeInTime = Math.max(0, Math.min(1, (audio.currentTime - lineStart) / fadeDuration));
    var fadeOutTime = Math.max(0, Math.min(1, (lineEnd - audio.currentTime) / fadeOutDuration));
    
    // La opacidad final es una combinación de fadeIn y fadeOut
    var opacity = fadeInTime * fadeOutTime;
    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Aumentar la frecuencia de actualización de letras
setInterval(updateLyrics, 100); // Se actualiza cada 100ms para una mejor sincronización

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 219000);

