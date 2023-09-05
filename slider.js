const sliderCont = document.querySelector(".slider");
const sliderCards = document.querySelectorAll(".slider-card");
const rightArrow = document.querySelector(".arrow--right");
const leftArrow = document.querySelector(".arrow--left");
const sliderParent = document.querySelector(".slider-parent");

let currSlide = 2;

const slideTo = () => {
  sliderCards.forEach((card, i) => {
    card.style.transform = `translateX(-${
      100 * currSlide
    }%) translateY(${Math.abs(58 * (currSlide - i) ** 2)}px) rotateZ(${
      7.5 * (i - currSlide)
    }deg)`;
  });
};

slideTo();

const goRight = () => {
  if (currSlide === sliderCards.length - 1) return;
  currSlide++;
  slideTo();
};

const goLeft = () => {
  if (currSlide === 0) return;
  currSlide--;
  slideTo();
};

rightArrow.addEventListener("click", goRight);

leftArrow.addEventListener("click", goLeft);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") leftArrow.click();
  if (e.key === "ArrowRight") rightArrow.click();
});

document.addEventListener("DOMContentLoaded", () => {
  sliderCont.classList.remove("no-transition");
});

sliderCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const clickedCard = Number(e.target.closest(".slider-card").dataset.card);
    if (currSlide === clickedCard - 1) return;
    currSlide = clickedCard - 1;
    slideTo();
  });
});
