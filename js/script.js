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

function logEmail() {
  // Obter o valor do campo de email
  var email = document.getElementsByName('EMAIL')[0].value;

  // Logar o email no console
  console.log('Email digitado:', email);

  // Esconder o formulário
  document.getElementsByName('formdiv')[0].style.display = 'none';
}