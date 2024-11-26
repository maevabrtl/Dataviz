function waterGradient() {
  const water = document.querySelector('.coloredWater');
  const elapsedSeconds = seconds;            //permet de calculer le temps déja passé
  const remainingTime = 60 - elapsedSeconds;
  water.style.animation = `none`;  //commence l'animation
  void water.offsetWidth; 
  
  water.style.animation = `fillWater ${remainingTime}s ease-in-out forwards`; //l'animation réagit selon les secondes passées
}


function incrementSeconds() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    waterGradient(); 
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
  document.getElementById('actualTime').innerHTML = formattedTime; 
}


function initializeClock() {        //FONCTION POUR SYNCHRONISER L'ANIMAtION AVEC LES SECONDES
  const currentDate = new Date();
  hours = currentDate.getHours();
  minutes = currentDate.getMinutes();
  seconds = currentDate.getSeconds();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById('actualTime').innerHTML = formattedTime;

  waterGradient(); 
}

initializeClock();
setInterval(incrementSeconds, 1000);