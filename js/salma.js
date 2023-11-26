let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Skift billede hvert 2000 millisekunder (2 sekunder)
}

// Kald showSlides funktionen for at starte slideshowet
showSlides();

