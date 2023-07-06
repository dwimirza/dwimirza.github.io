

const tabButton = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".card-content");
const tabCard = document.querySelectorAll(".card");

tabButton.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabButton.forEach(tab => {tab.classList.remove("active")});
        tab.classList.add("active");

    tabContent.forEach(tab => {tab.classList.remove("active")});
    tabContent[index].classList.add("active");
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    loopFillGroupWithBlank: true,
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      468: {
        slidesPerView : 1,
        spaceBetween : 20,
      }
    }

  });