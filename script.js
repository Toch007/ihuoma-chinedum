const backgroundChange = document.getElementById("background-switch");
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

   

    document.addEventListener("DOMContentLoaded", () => {
      const backgrounds = [
        './images/chinedu4 - Copy.jpg',
        './images/chinedu5 - Copy.jpg',
        './images/chinedu7 - Copy.jpg',
        './images/chinedu1 - Copy.jpg'
      ];

      let currentIndex = 0;

      function changeBackground() {
        backgroundChange.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % backgrounds.length;
      }

      changeBackground();
      setInterval(changeBackground, 10000);
    });

    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('open-nav');
  });
  
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          document.body.classList.remove('open-nav')
      })    
  });

  const countDownDate = new Date("Dec 10, 2023 00:00:00").getTime();

    let x = setInterval(function() {
  
        let now = new Date().getTime();


        let distance = countDownDate - now;

      
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        
        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Congratulations!!!";
        }
    }, 1000);

  
 