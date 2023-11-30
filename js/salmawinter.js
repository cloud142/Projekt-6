const products = [
  { name: "White LRActive", price: 679, image: "./img/trak1.jpg" },
  { name: "LR Winter Jacket 2", price: 1.800, image: "./img/jakke1.jpg" },
  { name: "LR Winter Jacket 2", price: 1.800 , image: "./img/jakke2.jpg" },
  { name: "LR Winter Jacket 2", price: 1.800, image: "./img/jakke3.jpg" },
  { name: "White LRActive", price: 679 , image: "./img/trak2.jpg" },
  { name: "LR Winter Jacket 2", price: 1.800, image: "./img/jakke4.jpg" }
];

function updateProducts() {
  const row1 = document.getElementById("row1");
  const row2 = document.getElementById("row2");

  row1.innerHTML = "";
  row2.innerHTML = "";

  products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;

    const infoElement = document.createElement("div");
    infoElement.classList.add("product-info");
    infoElement.innerHTML = `
      <p class="product-name">${product.name}</p>
      <p class="product-price">Pris: ${product.price} DKK</p>
    `;

    productElement.appendChild(imageElement);
    productElement.appendChild(infoElement);

    if (index < 3) {
      row1.appendChild(productElement);
    } else {
      row2.appendChild(productElement);
    }
  });
}
  
  function applyFilters() {
    // Implementer logikken til filtrering baseret på valgte filtre
    // Opdater resultCount med det nye antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = `${products.length} result(s)`;
  }
  
  function resetFilters() {
    // Implementer logikken til at nulstille filtre
    // Opdater resultCount med det samlede antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = "0 result(s)";
  }
  
  // Opdater produkter ved indlæsning af siden
  updateProducts();
  