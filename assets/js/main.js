document.addEventListener("DOMContentLoaded", function (event) {
	setTimeout(function () {
		document.getElementById("preloader").style.opacity = "0";
		document.getElementById("preloader").style.display = "none";
		document.getElementById("main-content").classList.add("show");
	}, 2000);
	window.addEventListener("load", function () {
		document.getElementById("my-audio").play();
	});

	const preloaderText = document.getElementById("preloader-text");
	const text = preloaderText.innerText;
	preloaderText.innerText = "";

	let i = 0;
	setInterval(() => {
		if (i >= text.length) return;
		preloaderText.innerText += text.charAt(i);
		i++;
	}, 200);

	let progressElement = document.querySelector("progress");
	let value = 100;
	progressElement.setAttribute("value", value);
	progressElement.style.setProperty("--value", value);
});

//change header
const scrollHeader = () => {
	const header = document.getElementById("header");
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >= 50
		? header.classList.add("scroll-header")
		: header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

//services modal
const modalViews = document.querySelectorAll(".services__modal"),
	modalBtns = document.querySelectorAll(".services__button"),
	modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
	modalViews[modalClick].classList.add("active-modal");
	document.body.style.overflow = "hidden";
};

modalBtns.forEach((mb, i) => {
	mb.addEventListener("click", () => {
		modal(i);
	});
});

modalClose.forEach((mc) => {
	mc.addEventListener("click", () => {
		modalViews.forEach((mv) => {
			mv.classList.remove("active-modal");
			document.body.style.overflow = "auto";
		});
	});
});
//mixitup filter portfolio
let mixerPortfolio = mixitup(".work__container", {
	selectors: {
		target: ".work__card",
	},
	animation: {
		duration: 400,
		effectsIn: "fade translateY(-100%)",
	},
});

//link active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
	linkWork.forEach((l) => l.classList.remove("active-work"));
	this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

//swiper slider
let swiperTest = new Swiper(".testimonial__container", {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 48,
		},
	},
});

//responsive textarea
var textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", function () {
	if (this.scrollTop > 0) {
		this.style.height = this.scrollHeight + "px";
	}
});

//scroll sections active link
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionsClass = document.querySelector(
				".nav__menu a[href*=" + sectionId + "]"
			);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add("active-link");
		} else {
			sectionsClass.classList.remove("active-link");
		}
	});
};
window.addEventListener("scroll", scrollActive);

//ligth-dark theme
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		lightTheme
	);
	themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the light / icon theme
	document.body.classList.toggle(lightTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

//scroll reveal animation
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: "2500",
	delay: 400,
	// reset: true,
});
sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, home__scroll`, { delay: 900, origin: "bottom" });
