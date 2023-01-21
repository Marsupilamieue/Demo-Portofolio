const menuBtn = document.querySelector(".menu-btn");
let openMenu = false;
menuBtn.addEventListener("click", () => {
  if (!openMenu) {
    menuBtn.classList.add("open");
    openMenu = true;
  } else {
    menuBtn.classList.remove("open");
    openMenu = false;
  }
});

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector(".menu-btn").onclick = function () {
  navbarNav.classList.toggle("active");
};

// Observer
const textTarget = document.querySelectorAll(".text-highlight");

textTarget.forEach((textElement) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      textElement.classList.add("animated");
    } else {
      textElement.classList.remove("animated");
    }
  });

  observer.observe(textElement);
});

const paraTarget = document.querySelectorAll(".para-highlight");

paraTarget.forEach((textElement) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      textElement.classList.add("animated");
    } else {
      textElement.classList.remove("animated");
    }
  });
  observer.observe(textElement);
});

const perTarget = document.querySelectorAll(".skill-per");

perTarget.forEach((textElement) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      textElement.classList.add("animated");
    } else {
      textElement.classList.remove("animated");
    }
  });
  observer.observe(textElement);
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  const options = {
    rootMargin: "0px 0px 0px 0px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        for (
          let i = 0;
          i < document.querySelectorAll(".progress-val").length;
          i++
        ) {
          console.log(
            document.querySelectorAll(".progress-val")[i].textContent
          );
          let circularProgress =
              document.querySelectorAll(".circular-progress")[i],
            progressValue = document.querySelectorAll(".progress-val")[i];

          let progressStartValue = 0,
            progressEndValue = `${
              document.querySelectorAll(".progress-val")[i].textContent
            }`,
            speed = 20;

          let progress = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}`;
            circularProgress.style.background = `conic-gradient(rgb(80, 80, 80) ${
              progressStartValue * 3.6
            }deg, #ededed 0deg)`;

            if (progressStartValue == progressEndValue) {
              clearInterval(progress);
            }
          }, speed);
        }
      } else {
        for (
          let i = 0;
          i < document.querySelectorAll(".progress-val").length;
          i++
        ) {
          let circularProgress =
            document.querySelectorAll(".circular-progress")[i];
          circularProgress.style.background = `conic-gradient(rgb(80, 80, 80) ${3.6}deg, #ededed 0deg)`;
        }
        return;
      }
    });
  }, options);
  const para = document.querySelector(".progress-val");
  observer.observe(para);
}
