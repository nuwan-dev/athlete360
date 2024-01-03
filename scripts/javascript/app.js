// nav scroll color change
const navs = document.querySelectorAll(".top-nav, .ath360-m-nav-container");
window.addEventListener("scroll", () => {
  navs.forEach((nav) => {
    window.scrollY > 1
      ? nav.classList.add("top-nav-active")
      : nav.classList.remove("top-nav-active");
  });
});

// whatsapp btn
const whatsApp = document.querySelector(".whatsapp-btn");
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? whatsApp.classList.add("whats-app-active")
    : whatsApp.classList.remove("whats-app-active");
});

const plnBtns = document.querySelectorAll(".plan-btn");
plnBtns.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.classList.add("plan-btn-hvr");
  });
});

// goWhats
function goWhats(value) {
  const email = "info@nuone.tech";
  window.open(`mailto:${email}?subject=${value}&body=${"I would like to enroll in" + " " + value}`);
  // window.open(`https://wa.me/94781154482?text=${"I would like to enroll in" + " " + value}`);
}

//owl
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 30,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      margin: 0,
    },
    600: {
      items: 2,
      nav: false,
      margin: 10,
    },
    900: {
      items: 3,
      nav: false,
      loop: false,
    },
  },
});