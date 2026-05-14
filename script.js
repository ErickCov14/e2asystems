/* ===========================
   MENÚ HAMBURGUESA
   =========================== */

const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("nav-mobile");

hamburger.addEventListener("click", () => {
  navMobile.classList.toggle("open");
  hamburger.classList.toggle("open");
});

function closeMenu() {
  navMobile.classList.remove("open");
  hamburger.classList.remove("open");
}

/* Animación del icono hamburguesa */
hamburger.onclick = () => {
  hamburger.classList.toggle("active");
};


/* ===========================
   DESACTIVAR TILT EN MÓVIL
   =========================== */

function isMobile() {
  return window.innerWidth <= 768;
}

if (!isMobile()) {
  /* Activa efecto 3D solo en PC */
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.25
  });
}


/* ===========================
   SCROLLREVEAL ANIMATIONS
   =========================== */

ScrollReveal().reveal(".hero-title", {
  delay: 200,
  distance: "40px",
  origin: "bottom",
  duration: 800,
});

ScrollReveal().reveal(".hero-sub", {
  delay: 400,
  distance: "40px",
  origin: "bottom",
  duration: 800,
});

ScrollReveal().reveal(".btn-cta", {
  delay: 600,
  distance: "40px",
  origin: "bottom",
  duration: 800,
});

ScrollReveal().reveal(".servicio-foto", {
  interval: 120,
  distance: "60px",
  origin: "bottom",
  duration: 900,
});

ScrollReveal().reveal(".proyecto-card", {
  interval: 200,
  distance: "60px",
  origin: "bottom",
  duration: 900,
});

ScrollReveal().reveal(".nosotros-grid", {
  delay: 200,
  distance: "60px",
  origin: "bottom",
  duration: 900,
});

ScrollReveal().reveal(".contacto-grid", {
  delay: 200,
  distance: "60px",
  origin: "bottom",
  duration: 900,
});


/* ===========================
   GSAP ANIMACIONES
   =========================== */

gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".logo-img", {
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  y: -20
});


/* ===========================
   PARTÍCULAS
   =========================== */

particlesJS("particles-js", {
  particles: {
    number: {
      value: isMobile() ? 28 : 55,
    },
    color: { value: "#00bcd4" },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#00bcd4",
      opacity: 0.35,
      width: 1
    },
    move: {
      enable: true,
      speed: isMobile() ? 1 : 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !isMobile(), mode: "grab" },
      onclick: { enable: false }
    },
    modes: {
      grab: {
        distance: 160,
        line_linked: { opacity: 0.5 }
      }
    }
  },
  retina_detect: true
});


/* ===========================
   ANIMACIÓN SUAVE EN ANCLAS
   =========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const objetivo = document.querySelector(this.getAttribute("href"));
    if (!objetivo) return;

    window.scrollTo({
      top: objetivo.offsetTop - 70,
      behavior: "smooth"
    });

    closeMenu();
  });
});

/* ===========================
   CARRUSELES TÁCTILES (SWIPE)
   =========================== */

const proyectos = document.querySelectorAll(".proyecto-mockup img");

proyectos.forEach(img => {
  let startX = 0;

  img.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  img.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX - startX > 80) {
      img.style.transform = "translateX(20px)";
    } else if (startX - endX > 80) {
      img.style.transform = "translateX(-20px)";
    }
    setTimeout(() => img.style.transform = "translateX(0)", 200);
  });
});
