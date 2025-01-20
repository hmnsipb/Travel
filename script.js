function toggleMenu() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('active');
}

const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0; 
const totalSlides = indicators.length;


function updateSlide(index) {
  const offset = index * -100; 
  carouselInner.style.transform = `translateX(${offset}%)`;
  
  
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}


indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  });

  animatedElements.forEach((el) => observer.observe(el));
});
