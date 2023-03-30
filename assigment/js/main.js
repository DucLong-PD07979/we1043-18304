import {
    ERROR_MESSAGE,
    isEmail,
    isMessage,
    isPhone,
    isName,
    isAddress,
} from "./formValidate.js";
let headerElement = document.querySelector("header");
let btnTogleNavHead = document.querySelector(".btn-menu");
let navbarElment = document.querySelector(".header-navbar");
let linksItem = document.querySelectorAll(".header-navbar ul li a");
let btnScrollToTop = document.querySelector(".btn-scroll-to-top");
let clientFeedbackWrapper = document.querySelector(".client-feedback");
let btnSubmit = document.querySelector(".btn-submit");
let inputsElement = document.querySelectorAll("#form-contact .input-element");

let daysEL = document.querySelector(".time-sale .days");
let hoursEL = document.querySelector(".time-sale .hours");
let minsEL = document.querySelector(".time-sale .minutes");
// let secondsEL = document.querySelector(".time-sale .seconds");

let isViewPoint = null;
let indexSlider = 0;

window.addEventListener("resize", (e) => {
    isViewPoint = { width: e.innerWidth, height: e.innerHeight };
});

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50) {
        headerElement.style.padding = "10px 0";
        headerElement.style.backgroundColor = "var(--white-color)";
    } else if (
        (window.scrollY == 0 && window.innerWidth > 868) ||
        isViewPoint > 868
    ) {
        headerElement.style.backgroundColor = "transparent";
        headerElement.style.padding = "30px 0";
    }

    if (window.scrollY > 600) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

btnScrollToTop.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
});

btnTogleNavHead.addEventListener("click", (e) => {
    navbarElment.classList.toggle("header-navbar--active");
});

linksItem.forEach((link) => {
    link.addEventListener("click", (e) => {
        navbarElment.classList.remove("header-navbar--active");
    });
});

const sliderFeatures = () => {
    const clientsFeebackData = [
        [
            {
                author: "kigiz",
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat facere ab dignissimos expedita voluptates voluptate quas, repellendus accusantium architecto officiis nesciunt, placeat error vero doloremque qui dolore, blanditiis dolorum.",
            },
            {
                author: "kigiz",
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat facere ab dignissimos expedita voluptates voluptate quas, repellendus accusantium architecto officiis nesciunt, placeat error vero doloremque qui dolore, blanditiis dolorum.",
            },
            {
                author: "kigiz",
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat facere ab dignissimos expedita voluptates voluptate quas, repellendus accusantium architecto officiis nesciunt, placeat error vero doloremque qui dolore, blanditiis dolorum.",
            },
        ],
        [
            {
                author: "VanDan",
                message:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos aspernatur exercitationem possimus voluptates, molestiae facilis at quisquam, vero mollitia laudantium tenetur unde et maxime dignissimos hic minima, dolores voluptas est? In, reiciendis.",
            },
            {
                author: "VanDan",
                message:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos aspernatur exercitationem possimus voluptates, molestiae facilis at quisquam, vero mollitia laudantium tenetur unde et maxime dignissimos hic minima, dolores voluptas est? In, reiciendis.",
            },
            {
                author: "VanDan",
                message:
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos aspernatur exercitationem possimus voluptates, molestiae facilis at quisquam, vero mollitia laudantium tenetur unde et maxime dignissimos hic minima, dolores voluptas est? In, reiciendis.",
            },
        ],
        [
            {
                author: "Limater",
                message:
                    "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil dolore ad eveniet sequi voluptatem itaque explicabo quam dolorem doloremque in accusantium, sit mollitia magni aut odio, ducimus qui? Provident, unde? Aperiam, nemo.",
            },
            {
                author: "Limater",
                message:
                    "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil dolore ad eveniet sequi voluptatem itaque explicabo quam dolorem doloremque in accusantium, sit mollitia magni aut odio, ducimus qui? Provident, unde? Aperiam, nemo.",
            },
            {
                author: "Limater",
                message:
                    "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil dolore ad eveniet sequi voluptatem itaque explicabo quam dolorem doloremque in accusantium, sit mollitia magni aut odio, ducimus qui? Provident, unde? Aperiam, nemo.",
            },
        ],
    ];

    let btnContent = `<button class="btn-prev">
                            <i class="bx bx-chevrons-left"></i>
                        </button>
                        <button class="btn-next">
                            <i class="bx bx-chevrons-right"></i>
                        </button>`;

    let contentSlider = clientsFeebackData[indexSlider].map((item) => {
        return ` <div class="col l-4 c-12 m-6">
                            <div class="client-feedback-item">
                                <p class="client-message">
                                    <span> &ldquo;</span> ${item.message}<span>	&rdquo;</span>
                                </p>
                                <a href="#" class="author">${item.author}</a>
                            </div>
                        </div>`;
    });

    let itemContent = btnContent + contentSlider.join("");
    clientFeedbackWrapper.innerHTML = itemContent;

    let btnPrev = document.querySelector(".btn-prev");
    let btnNext = document.querySelector(".btn-next");
    btnNext.addEventListener("click", (e) => {
        indexSlider++;
        if (indexSlider > clientsFeebackData.length - 1) {
            indexSlider = 0;
        }
        sliderFeatures();
    });

    btnPrev.addEventListener("click", (e) => {
        indexSlider--;
        if (indexSlider < 0) {
            indexSlider = clientsFeebackData.length - 1;
        }
        sliderFeatures();
    });
};

sliderFeatures();

// handleForm

const checkIsEmpty = (value = "") => {
    if (value) {
        return false;
    }
    return true;
};

let checkValidation = (value, rule) => {
    switch (rule) {
        case "name-client":
            return isName(value);
        case "email":
            return isEmail(value);
        case "phone":
            return isPhone(value);
        case "address":
            return isAddress(value);
    }
};

const handleValidateField = () => {
    inputsElement.forEach((inputEl) => {
        let value = inputEl.value.trim();
        let nameInput = inputEl.name.toLocaleLowerCase();
        let empty = checkIsEmpty(value);
        let isValidation = checkValidation(value, nameInput);

        let errorElement = inputEl.parentElement.querySelector(".mes-error");
        if (empty) {
            errorElement.innerHTML = ERROR_MESSAGE.required;
            return;
        } else {
            errorElement.innerHTML = "";
        }

        if (!isValidation) {
            errorElement.innerHTML = ERROR_MESSAGE.regexp;
        } else {
            errorElement.innerHTML = "";
        }
    });
};

[...inputsElement].forEach((input) => {
    input.addEventListener("focus", (e) => {
        input.parentElement.querySelector(".mes-error").innerHTML = "";
    });
});

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    handleValidateField();
});

// countdown

const newYears = "20 April 2023";
function cowntDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // const seconds = Math.floor(totalSeconds % 60);

    daysEL.innerHTML = days + " days - ";
    hoursEL.innerHTML = hours + "h - ";
    minsEL.innerHTML = minutes + "p";
    // secondsEL.innerHTML = seconds;

    if (totalSeconds < 0) {
        clearInterval(cowntDown);
    }
}
setInterval(() =>{
    cowntDown();
},1000)