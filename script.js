const navLinks = document.querySelectorAll(".nav-links li");
const menuBtn = document.querySelector(".btn-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".link-mobile li");
const overflow = document.querySelector(".overflow");

menuBtn.addEventListener("click", () => {
	const icon = document.querySelector(".btn-mobile img");
	menuBtn.classList.toggle("active-btn");
	mobileMenu.classList.toggle("active-menu");
	overflow.classList.toggle("active-menu");
	if (menuBtn.classList.contains("active-btn")) {
		icon.src = "./images/icon-close-menu.svg";
	} else {
		icon.src = "./images/icon-menu.svg";
	}
});

navLinks.forEach((link) => {
	const subMenu = link.querySelector(".subMenu");
	link.addEventListener("click", () => {
		link.classList.toggle("active");
		subMenu.classList.toggle("active-menu");
	});
});

mobileLinks.forEach((link) => {
	const subMenu = link.querySelector(".mobile-sub");
	link.addEventListener("click", () => {
		link.classList.toggle("active");
		subMenu.classList.toggle("active-menu");
	});
});