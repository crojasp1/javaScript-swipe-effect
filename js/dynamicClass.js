import { spanArticle } from './displayCards.js';
import { spanArticle2 } from './displayCards.js';

/* Aside Menus(windows)*/
const rightHamMenu = document.querySelector(".header-right-options");
const playerSkillWindow = document.querySelector(".skills-card");
const tournamentsWindow = document.querySelector(".tournament");

/*Buttons to open*/
const hamburgerButton = document.querySelector('.header-ham-img');
/*const tournamentsButton = document.querySelector('.player-achivements-cup');Comes from displayCards*/
/*const skillsButton = document.querySelector('.player-achievements-skills');Comes from displayCards*/

/*Buttons to close*/
/* Hamburguer close with same button*/
 const skillsCloseButton = document.querySelector(".skills-card-close");
 const tournamentsCloseButton = document.querySelector('.tournament-section-button');

 /*EVENTLISTENERS*/
 /*Button to open and close hamburguer(toggle)*/
hamburgerButton.addEventListener('click', openHamburger);

spanArticle.addEventListener('click', openTournamentAchivements);
spanArticle2.addEventListener('click', openPlayerSkills);

/*listener to close*/
tournamentsCloseButton.addEventListener('click', closeTournamentsWindow);
skillsCloseButton.addEventListener('click', closeSkillsWindow);

/*functions to open the windows or menus*/
function openTournamentAchivements(){
  const isRightHamMenuClosed = rightHamMenu.classList.contains('inactive');
  const isPlayerSkillWindowClosed = playerSkillWindow.classList.contains('inactive');

  if (!isRightHamMenuClosed || !isPlayerSkillWindowClosed){
    rightHamMenu.classList.add('inactive');
    playerSkillWindow.classList.add('inactive');
  }
  tournamentsWindow.classList.toggle('inactive');
}


function openHamburger(){

  const isPlayerSkillWindowClosed = rightHamMenu.classList.contains('inactive');
  const isTournamentsWindowClosed = tournamentsWindow.classList.contains('inactive');
  
  rightHamMenu.classList.toggle('inactive');
  playerSkillWindow.classList.add('inactive');

  if (!isTournamentsWindowClosed) {

    tournamentsWindow.classList.add('inactive');
  };
};

function openPlayerSkills(){
  const isTournamentsWindowClosed = tournamentsWindow.classList.contains('inactive');
  const isRightHamMenuClosed = rightHamMenu.classList.contains('inactive');

  playerSkillWindow.classList.remove('inactive');

  if (!isTournamentsWindowClosed) {
    tournamentsWindow.classList.add('inactive');
  }else if (!isRightHamMenuClosed) {
    rightHamMenu.classList.add('inactive');
  }
};

/*functions to close*/
function closeTournamentsWindow() {
  tournamentsWindow.classList.toggle('inactive'); 
}

function closeSkillsWindow() {
  playerSkillWindow.classList.add('inactive');
}
