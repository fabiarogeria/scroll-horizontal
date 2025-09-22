document.addEventListener("DOMContentLoaded", function () {
    // Observadores de animação
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.3 });

    const animatedElements = document.querySelectorAll(".panel-full-content, .panel-video-content, .contact-content");
    animatedElements.forEach((el) => observer1.observe(el));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.3 });

    const targets = document.querySelectorAll(".animate-on-scroll");
    targets.forEach((el) => observer2.observe(el));

    // Typewriter effect
 const texto = "";
    const elemento = document.getElementById("nome");
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 150); // velocidade da digitação
      } else {
        elemento.style.borderRight = "none"; // remove o cursor após digitar
      }
    }

    digitar();

  });

 document.addEventListener("DOMContentLoaded", function () {
    const texto = "BEYONCÉ";
    const nomeDiv = document.getElementById("nome");
    let i = 0;

    function digitarVertical() {
      if (i < texto.length) {
        const span = document.createElement("span");
        span.textContent = texto.charAt(i);
        nomeDiv.appendChild(span);
        i++;
        setTimeout(digitarVertical, 150);
      } else {
        nomeDiv.style.borderRight = "none";
      }
    }

 // Ativa quando o painel 5 estiver visível
    const painel5 = document.querySelector('[data-index="5"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          digitarVertical();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(painel5);
  });


//BUTTONS

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".panels-container");

  document.getElementById("scroll-left").addEventListener("click", function () {
    if (!container) return;
    container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
  });

  document.getElementById("scroll-right").addEventListener("click", function () {
    if (!container) return;
    container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  });
});




