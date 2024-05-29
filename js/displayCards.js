const swipePage = document.querySelector(".cards");
const playerDetail = document.querySelector(".details");

/* Aside Menus*/
const rightHamMenu = document.querySelector(".header-right-options");
const playerSkill = document.querySelector(".skills-card");
const tournamentAchivements = document.querySelector(".tournament");

/*Buttons*/
spanArticle.addEventListener("onClick", openTournamentAchivements);
spanArticle2.addEventListener('onClick', openPlayerStadistics);


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

/*
<div class="cards">
<article>
<img src="./assets/players/ricardo_kaka.jpg" alt="jugador kaka. Bogota, Suba. Campeon local.">
<h2>Ricardo Kaka</h2>
<div class="choice-nop"></div>
<div class="choice-yes"></div>
</article>
<article>
<img src="./assets/players/cristiano_ronaldo.jpg" alt="jugador Cristiano ronaldo. Bogota, Suba. Campeon local.">
<h2>Cristiano Ronaldo </h2>
<div class="choice-nop"></div>
<div class="choice-yes"></div>
</article>
<article>
<img src="./assets/players/messi.jpg" alt="jugador Messi. Bogota, Chapinero. Campeon local.">
<h2>Messi </h2>
<div class="choice-nop"></div>
<div class="choice-yes"></div>
</article>
<article>
<img src="./assets/players/neymar.jpg" alt="jugador Neymar. Bogota, Quirigua. Campeon local.">
<h2>Neymar Jr</h2>
<div class="choice-nop"></div>
<div class="choice-yes"></div>
</article>
</div>


<div class="details">
<img src="copa_champions.png" alt="Champions cup image" class="details-backgroundImg">
<h2><span class="trophy-icon"><img src="./assets/icons/cup-icon.png" alt="trophy icon"></span>Bogota, Quirigua. Campeon local</h2>
<article>

<p>Ganador torneo Municipal 2017</p>
<p>Subcampeones regionales</p>
</article>
<p><span><img class="details-thumbUp details-icons" src="./assets/icons/thumb-up.png" alt="thumb up image"></span>Has ganado 1, <span><img class="details-thumbDown details-icons" src="./assets/icons/thumb-down.png" alt=""></span>perdido 2, y empatado 0 partidos con el psg</p>
<p class="details-redText">No has programado un proximo partido con Neymar</p>
</div>
*/

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

playerList.forEach((item) => {
const detailTwoContainer = document.createElement('div');
detailTwoContainer.classList.add('details-article');

const backgroundContainerImg = document.createElement('img');
backgroundContainerImg.classList = 'details-backgroundImg';
backgroundContainerImg.src = 'copa_champions.png';
backgroundContainerImg.alt = 'Champions cup image';

const containerPlayerName = document.createElement('h2');
containerPlayerName.innerText = "Jugador Golden";

const detailArticleContainer = document.createElement('article');
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
matchParagraph.innerText = item.programacion;
matchParagraph.classList ='details-redText';

detailTwoContainer.append(backgroundContainerImg, containerPlayerName, detailArticleContainer, matchParagraph);
playerDetail.append(detailTwoContainer);
});


/*
//New DOM for the player features
playerList.forEach((item) => {
  //Detail article
  const articleDetailContainer = document.createElement("article");
  articleDetailContainer.classList = "details-article";

  //Detail background img
  const backCupImage = document.createElement("img");
  backCupImage.classList.add("details-backgroundImg");
  backCupImage.setAttribute("src", "copa_champions.png");
  backCupImage.alt = "Champions cup image";
  //Detail player name
  const detailSpecification = document.createElement("h2");
  detailSpecification.innerText = item.location;

  const specificationSpan = document.createElement("span");
  specificationSpan.classList = "trophy-icon";

  const specificationImg = document.createElement("img");
  specificationImg.setAttribute("src", "./assets/icons/cup-icon.png");
  specificationImg.setAttribute("alt", "trophy icon");

  //Image into Span
  specificationSpan.append(specificationImg);

  //H2 append span
  detailSpecification.append(specificationSpan);
  //Article container
  const detailArticle = document.createElement("article");

  const articleParagraph1 = document.createElement("p");
  articleParagraph1.innerText = item.campeonato1;

  const articleParagraph2 = document.createElement("p");
  articleParagraph2.innerText = item.campeonato2;
  //Article container append
  detailArticle.append(articleParagraph1, articleParagraph2);

  const detailStadistics = document.createElement("p");
  detailStadistics.innerText = "Has ganado 1, empatado 2 y perdido 3";

  const matches = document.createElement("p");
  matches.classList.add("details-redText");
  matches.innerText = item.programacion;

  const matchesSpan = document.createElement("span");
  const matchThumbUp = document.createElement("img");
  matchThumbUp.classList.add("details-thumbUp");
  matchThumbUp.classList.add("details-icons");
  matchThumbUp.img = "./assets/icons/thumb-up.png";

  matchesSpan.append(matchThumbUp);

  const matchesSpan2 = document.createElement("span");
  const matchThumbDown = document.createElement("img");
  matchThumbDown.classList.add("details-thumbDown");
  matchThumbDown.classList.add("details-icons");
  matchThumbDown.src = "./assets/icons/thumb-down.png";
  matchThumbDown.alt = "Thumb down icon";
  matchesSpan2.append(matchThumbDown);

  //Stadistics info append
  detailStadistics.append(matchesSpan, matchesSpan2);

  articleDetailContainer.append(
    backCupImage,
    detailSpecification,
    detailArticle,
    detailStadistics,
    matches
  );

  playerDetail.append(articleDetailContainer);
});
*/

/*
for (let i = 0; i = playerList.length; i++) {
  const card = document.createElement("div");
  card.classList.add("cards");

  const articleContainer = document.createElement("article");

  const playerPicture = document.createElement("img");
  playerPicture.setAttribute("src", "./assets/players/ricardo_kaka.jpg");

  const playerName = document.createElement("h2");
  playerName.innerText = playerList[i].name;

  const noChoice = document.createElement("div");
  const checkChoice = document.createElement("div");

  //Append for the Article
  articleContainer.append(playerPicture, playerName, noChoice, checkChoice);
  card.append(articleContainer);

  //Detail container
  const playerDetails = document.createElement("div");
  playerDetails.classList = "details";

  //Detail Container append
  const backCupImage = document.createElement("img");
  backCupImage.classList.add("details-backgroundImg");
  backCupImage.setAttribute("src", "copa_champions.png");
  backCupImage.alt = "Champions cup image";
  //Detail Container append
  const detailSpecification = document.createElement("h2");
  detailSpecification.innerText = playerList[i].location;

  const specificationSpan = document.createElement("span");
  specificationSpan.classList = "trophy-icon";

  const specificationImg = document.createElement("img");
  specificationImg.setAttribute("src", "./assets/icons/cup-icon.png");
  specificationImg.setAttribute("alt", "trophy icon");
  //Contained inside h2
  detailSpecification.append(specificationSpan, specificationImg);
  //Article container
  const detailArticle = document.createElement("article");

  const articleParagraph1 = document.createElement("p");
  articleParagraph1.innerText = playerList[i].campeonato1;

  const articleParagraph2 = document.createElement("p");
  articleParagraph2.innerText = playerList[i].campeonato2;
  //Article container append
  detailArticle.append(articleParagraph1, articleParagraph2);

  const detailStadistics = document.createElement("p");
  detailStadistics.innerText = "Has ganado 1, empatado 2 y perdido 3";

  const matches = document.createElement("p");
  matches.classList.add("details-redText");
  matches.innerText = playerList[i].programacion;

  const matchesSpan = document.createElement("span");
  const matchThumbUp = document.createElement("img");
  matchThumbUp.classList.add("details-thumbUp");
  matchThumbUp.classList.add("details-icons");
  matchThumbUp.img = "./assets/icons/thumb-up.png";
  matchThumbUp.alt = "thumb up image";

  matchesSpan.append(matchThumbUp);

  const matchesSpan2 = document.createElement("span");
  const matchThumbDown = document.createElement("img");
  matchThumbDown.classList.add("details-thumbDown");
  matchThumbDown.classList.add("details-icons");
  matchThumbDown.src = "./assets/icons/thumb-down.png";
  matchThumbDown.alt = "Thumb down icon";
  matchesSpan2.append(matchThumbDown);

  //Stadistics info append
  detailStadistics.append(matchesSpan, matchesSpan2);

  playerDetails.append(
    backCupImage,
    detailSpecification,
    detailArticle,
    detailStadistics,
    matches
  );

  swipePage.append(card);
}
*/
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
