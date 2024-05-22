const swipePage = document.querySelector(".cards");
const playerDetail = document.querySelector(".details");

const playerList = [
  {
    img: "./assets/players/ricardo_kaka.jpg",
    alt: "jugador kaka. Bogota, Suba. Campeon local.",
    nombre: "Ricardo Kaka",
    location: "Bogota, Quirigua. Campeon local",
    campeonato1: "Ganador torneo Municipal 2017",
    campeonato2: "Subcampeones regionales",
    programacion: "No has programado un proximo partido con Kaka",
  },
  {
    img: "./assets/players/cristiano_ronaldo.jpg",
    alt: "jugador Cristiano ronaldo. Medellin, Robledo. Campeon local.",
    nombre: "Cristiano Ronaldo",
    location: "Medellin, Robledo. Campeon local",
    campeonato1: "Ganador torneo Departamental 2020",
    campeonato2: "Subcampeones Nacional",
    programacion: "No has programado un proximo partido con Cristiano Ronaldo",
  },
  {
    img: "./assets/players/messi.jpg",
    alt: "jugador Messi. Cali, San Antonio. Campeon Nacional.",
    nombre: "Messi",
    location: "Cali, Robledo. Campeon Nacional",
    campeonato1: "Ganador torneo Nacional 2022",
    campeonato2: "Campeon Nacional",
    programacion: "No has programado un proximo partido con Messi",
  },
  {
    img: "./assets/players/neymar.jpg",
    alt: "jugador Neymar. Barranquilla, Olimpo. Tercer lugar departamental.",
    nombre: "Neymar",
    location: "Barranquilla, Olimpo. Tercero Regional",
    campeonato1: "Tercer lugar departamentel 2022",
    campeonato2: "",
    programacion: "No has programado un proximo partido con Neymar",
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
  articleContainer.classList = 'cards-articleContainer';

  const playerPicture = document.createElement("img");
  playerPicture.setAttribute("src", item.img);

  const playerName = document.createElement("h2");
  playerName.innerText = item.nombre;

  const noChoice = document.createElement("div");
  const checkChoice = document.createElement("div");

  //Append for the Article and for the first Query
  articleContainer.append(playerPicture, playerName, noChoice, checkChoice);
  swipePage.append(articleContainer);
},
)

  //New DOM for the player features
  playerList.forEach((item) => {
  //Detail article
  const articleDetailContainer = document.createElement('article');
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

  
}
)



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
