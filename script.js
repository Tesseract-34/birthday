// Show Love Message on Love Icon Click
function showLoveMessage(iconNumber) {
  const loveMessage = document.createElement("div");
  loveMessage.classList.add("love-message");

  // Add different love messages based on the icon clicked
  switch (iconNumber) {
    case 1:
      loveMessage.innerHTML = "You are the reason love feels like magic😇";
      break;
    case 2:
      loveMessage.innerHTML = "I love you to the moon and back😊";
      break;
    case 3:
      loveMessage.innerHTML = "My heart smiles whenever I think of you🥰";
      break;
    default:
      loveMessage.innerHTML = "I love you!";
      break;
  }

  // Add the love message to the card
  const card = document.querySelector(".card");
  card.appendChild(loveMessage);



  
  // Remove the love message after 3 seconds
  setTimeout(() => {
    card.removeChild(loveMessage);
  }, 3000);
}

// Add Floating Heart Animation
const floatingHeart = document.createElement("div");
floatingHeart.classList.add("floating-heart");
document.body.appendChild(floatingHeart);

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  floatingHeart.style.left = `${x}px`;
  floatingHeart.style.top = `${y}px`;
});
