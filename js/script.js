document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".info-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      if (card.classList.contains("open")) {
        card.classList.remove("open");
      } else {
        cards.forEach((otherCard) => {
          otherCard.classList.remove("open");
        });
        card.classList.add("open");
      }
    });
  });
});
