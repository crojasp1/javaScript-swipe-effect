

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
    const distanceX = finalX - initialX;

    console.log(distanceX);

    //There is no distance traveled
    if (distanceX === 0) return;
    isAnimated = true;
    if (distanceX>10 || distanceX<180) {
      isAnimated = true
      const deg = distanceX/8;
      selectedCard.style.cursor = "grabbing";
      selectedCard.style.transform = `translateX(${distanceX}px) rotate(${deg}deg)`;
      
      if(distanceX>=180 || distanceX<=-180){
        playerList.pop();
      }
    }

  }

  function onEnd(e) {}
}

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: true });
