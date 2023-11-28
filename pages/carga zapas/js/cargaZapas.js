const zapatillas = [];
const form = document.getElementById("cargaZP");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  try {
    const zapa = {
      image: evento.target.image.value,
      title: evento.target.title.value,
      price: evento.target.price.value,
      description: evento.target.description.value,
      details: evento.target.details.value,
    };
    window.localStorage.setItem("zapa", JSON.stringify(zapa));
    window.location.href = "../../../index.html";
  } catch (error) {
    console.error(error)
  }

});




