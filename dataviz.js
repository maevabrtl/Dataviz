// l'heure actuelle
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

function incrementSeconds() {
  
  seconds++;

  // Depassement des secondes (60 secondes = 1 minute)
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Depassement des minutes (60 minutes = 1 heure)
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Dépassement des heures (24 heures = 1 jour)
  if (hours === 24) {
    hours = 0;
  }

  // Formater les heures, minutes et secondes pour avoir 2 chiffres
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
  document.getElementById('actualTime').innerHTML = formattedTime; // Afficher l'heure mise à jour
}

setInterval(incrementSeconds, 1000) 
