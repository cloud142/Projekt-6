let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Display the first slide
showSlides(slideIndex);

// Handle button click event
document.getElementById("discoverButton").addEventListener("click", () => {
  // Redirect to the winter collection page or handle as needed
  alert("Redirecting to Winter Collection!");
});
