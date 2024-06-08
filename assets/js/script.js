// hamburger menu to toggle sidebar
const navbarLinks = document.querySelector(".navbar-links");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

// click outside sidebar to remove sidebar
document.addEventListener("click", (e) => {
	if (!hamburgerMenu.contains(e.target) && !navbarLinks.contains(e.target)) {
		navbarLinks.classList.remove("active");
	}
});

// Generate menu card
const menuCard = document.querySelector(".menu-card");

for (let i = 8; i > 1; i--) {
	let cardClone = menuCard.cloneNode(true);
	cardClone.id = 'menu-card' + i
	menuCard.after(cardClone);
}
