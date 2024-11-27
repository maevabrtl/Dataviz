function waterGradient() {                       //fonction pour le comportement (montée) du gradient
  const water = document.querySelector('.coloredWater');
  const elapsedSeconds = seconds;            //permet de calculer le temps déja passé
  const remainingTime = 60 - elapsedSeconds;  //fait 60 secondes - les secondes déjà passées
  water.style.animation = `none`;  //commence l'animation
  void water.offsetWidth;   //fait partie du reset
  
  water.style.animation = `fillWater ${remainingTime}s ease-in-out forwards`; //l'animation réagit selon les secondes passées + fluidité
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

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;  //formate les heures (2 caractères pour chaque unité)
  
  document.getElementById('actualTime').innerHTML = formattedTime; 
}


function initializeClock() {        //FONCTION POUR SYNCHRONISER L'ANIMAtION AVEC LES SECONDES
  const currentDate = new Date();    //créer l'objet date
  hours = currentDate.getHours();   //on recupere independemment les heures
  minutes = currentDate.getMinutes();  //...les minutes
  seconds = currentDate.getSeconds();  //...les secondes

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById('actualTime').innerHTML = formattedTime;

  waterGradient();   
}

initializeClock();
setInterval(incrementSeconds, 1000);   