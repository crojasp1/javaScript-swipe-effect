/*export const tournamentsButton = document.querySelector('.player-achivements-cup');
export const skillsButton = document.querySelector('.player-achievements-skills');*/

const swipePage = document.querySelector(".cards");
const playerDetail = document.querySelector(".details");




/*Objet Library created to simulate Json get*/
export const playerList = [
  {
    img: "./assets/players/ricardo_kaka.jpg",
    alt: "jugador kaka. Bogota, Suba. Campeon local.",
    nombre: "Ricardo Kaka",
    location: "Bogota, Quirigua. Campeon local",
    campeonato1: "Ganador torneo Municipal 2017",
    campeonato2: "Subcampeones regionales",
    programacion: "Nada programado con Kaka",
  },
  {
    img: "./assets/players/cristiano_ronaldo.jpg",
    alt: "jugador Cristiano ronaldo. Medellin, Robledo. Campeon local.",
    nombre: "Cristiano Ronaldo",
    location: "Medellin, Robledo. Campeon local",
    campeonato1: "Ganador torneo Departamental 2020",
    campeonato2: "Subcampeones Nacional",
    programacion: "Nada programado con Cristiano Ronaldo",
  },
  {
    img: "./assets/players/messi.jpg",
    alt: "jugador Messi. Cali, San Antonio. Campeon Nacional.",
    nombre: "Messi",
    location: "Cali, Robledo. Campeon Nacional",
    campeonato1: "Ganador torneo Nacional 2022",
    campeonato2: "Campeon Nacional",
    programacion: "Nada programado con Messi",
  },
  {
    img: "./assets/players/neymar.jpg",
    alt: "jugador Neymar. Barranquilla, Olimpo. Tercer lugar departamental.",
    nombre: "Neymar",
    location: "Barranquilla, Olimpo. Tercero Regional",
    campeonato1: "Tercer lugar departamentel 2022",
    campeonato2: "",
    programacion: "Nada programado con Neymar",
  },
];


playerList.forEach((item) => {
  const articleContainer = document.createElement("article");
  articleContainer.classList = "cards-articleContainer";

  const playerPicture = document.createElement("img");
  playerPicture.setAttribute("src", item.img);

  const playerName = document.createElement("h2");
  playerName.innerText = item.nombre;

  const noChoice = document.createElement("div");
  const checkChoice = document.createElement("div");

  //Append for the Article and for the first Query
  articleContainer.append(playerPicture, playerName, noChoice, checkChoice);
  swipePage.append(articleContainer);
});


//Buttons to display player features and championships


const detailTwoContainer = document.createElement('div');
detailTwoContainer.classList.add('details-article');

const backgroundContainerImg = document.createElement('img');
backgroundContainerImg.classList = 'details-backgroundImg';
backgroundContainerImg.src = 'copa_champions.png';
backgroundContainerImg.alt = 'Champions cup image';

const containerPlayerName = document.createElement('h2');
containerPlayerName.innerText = "Jugador Golden";

const detailArticleContainer = document.createElement('div');
detailArticleContainer.classList = 'article-player-achievements';

const spanArticle = document.createElement('span');

const imgArticle = document.createElement('img');
imgArticle.classList = 'player-achivements-cup';
imgArticle.src = './assets/icons/cup-icon.png';
imgArticle.alt = 'Champions cup image';

spanArticle.append(imgArticle);

const spanArticle2 = document.createElement('span');

const imgArticle2 = document.createElement('img');
imgArticle2.classList = 'player-achievements-skills';
imgArticle2.src = './assets/stadistics/feature1.jpg';
imgArticle2.alt = 'Skill player stadistic';

spanArticle2.append(imgArticle2);

detailArticleContainer.append(spanArticle, spanArticle2);

//Value of the last paragraph
const matchParagraph = document.createElement('p');
matchParagraph.innerText = "Nada programado con Neymar";
matchParagraph.classList ='details-redText';

detailTwoContainer.append(backgroundContainerImg, containerPlayerName, detailArticleContainer, matchParagraph);
playerDetail.append(detailTwoContainer);



/*-----------------------------------------------------------------------*/
/*Swipe cards logic and functions*/


const maxMovement = 120;
let isAnimated = false; //For the card
let distanceX = 0; //Draging card distance

function startDrag(e) {
  if (isAnimated) return;

  //get the first article member
  const selectedCard = e.target.closest("article");

  //Recover initial mouse or finger position
  const initialX = e.pageX ?? e.touches[0].pageX;

  //Listen touch and mouse movement
  document.addEventListener("mouseup", onEnd);
  document.addEventListener("mousemove", onMove);

  document.addEventListener("touchend", onEnd, { passive: true });
  document.addEventListener("touchmove", onMove, { passive: true });

  function onMove(e) {
    //current mouse or finger position
    const finalX = e.pageX ?? e.touches[0].pageX;

    //Distance between initial and current position
    distanceX = finalX - initialX;

    console.log(distanceX);

    //There is no distance traveled
    if (distanceX === 0) return;
    isAnimated = true;

      const deg = distanceX / 8;
      selectedCard.style.cursor = "grabbing";
      selectedCard.style.transform = `translateX(${distanceX}px) rotate(${deg}deg)`;
    

  }

  function onEnd(e) {
    document.removeEventListener("mousemove", onMove);

    document.removeEventListener("touchmove", onMove, { passive: true });


    if (distanceX >= maxMovement) {
      selectedCard.classList.add("swipeCompleteRight");

        selectedCard.remove()

        isAnimated = false;


    } else if (distanceX <= -maxMovement) {
      selectedCard.classList.add("swipeCompleteLeft");

        selectedCard.remove()

        isAnimated = false;
    
    } else {
      selectedCard.classList.add("reset");
      selectedCard.classList.remove("swipeCompleteRight", "swipeCompleteLeft");
      distanceX = 0;
      selectedCard.style.cursor = 'grab';

    }

    
    selectedCard.addEventListener('transitionend', ()=>{
      selectedCard.removeAttribute('style');
      selectedCard.classList.remove('reset');
      distanceX = 0;
      isAnimated = false;

    })

  }

}

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: true });

export { spanArticle };
export { spanArticle2 };