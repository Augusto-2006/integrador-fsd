const zapa = JSON.parse(localStorage.getItem('zapa'));
const card = `
  <div class="card">
    <div class="img-zapatilla zapas">
      <img src="${zapa.image}">
    </div>
    <div class=" text-card">
      <h2 class="nombres-zapa">${zapa.title}</h2>
      <p class="precios">${zapa.price}</p>
      <p class="info-zapas">${zapa.description}</p>
      <p class="link-zapa"><a href="${zapa.details}">
          Ver Detalles</a></p>
    </div>
  </div>
  `
const containerCard = document.getElementById("cardContainer");
if (window.localStorage) {
  console.log("entre")
  containerCard.innerHTML += card
}
else {
  console.log("no hay zapa")
}
