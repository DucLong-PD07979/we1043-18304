const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");
const dots = slider.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPrevSlide() {
    showSlide(currentSlide - 1);
}

function showSlideByDot(n) {
    showSlide(n);
}

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => showSlideByDot(i));
}

showSlide(0);

slides.forEach((silde) => {
    let img = silde.querySelector("img");

    img.addEventListener("mouseover", (e) => {
        img.style.borderRadius = "25px";
    });

    img.addEventListener("mouseout", (e) => {
        img.style.borderRadius = "0";
    });
});
