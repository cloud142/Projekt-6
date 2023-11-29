// JavaScript-koden herunder vil blive brugt til at indsætte produkter dynamisk baseret på dine data.
// Det er vigtigt at bemærke, at dette er en simpel placeholder, og du skal tilpasse det til dine faktiske data.

const productsColumn1 = [
    { name: "Produkt 1", price: 100 },
    { name: "Produkt 2", price: 150 },
    { name: "Produkt 3", price: 200 }
  ];
  
  const productsColumn2 = [
    { name: "Produkt 4", price: 120 },
    { name: "Produkt 5", price: 180 },
    { name: "Produkt 6", price: 220 }
  ];
  
  // Funktion til at opdatere produktkolonner
  function updateProductColumns() {
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");
  
    column1.innerHTML = "";
    column2.innerHTML = "";
  
    productsColumn1.forEach(product => {
      column1.innerHTML += `<div>${product.name}<br>Pris: ${product.price} DKK</div>`;
    });
  
    productsColumn2.forEach(product => {
      column2.innerHTML += `<div>${product.name}<br>Pris: ${product.price} DKK</div>`;
    });
  }
  
  // Funktion til at anvende filtre (placeholder-funktion)
  function applyFilters() {
    // Implementer logikken til filtrering baseret på valgte filtre
    // Opdater resultCount med det nye antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = "6 result(s)";
  }
  
  // Funktion til at nulstille filtre (placeholder-funktion)
  function resetFilters() {
    // Implementer logikken til at nulstille filtre
    // Opdater resultCount med det samlede antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = "0 result(s)";
  }
  
  // Opdater produktkolonner ved indlæsning af siden
  updateProductColumns();
  