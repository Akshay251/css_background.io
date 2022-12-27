var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

function change_background() {
	body.style.background = "linear-gradient(to bottom right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "background: " + body.style.background + ";";
}

color1.addEventListener("input", change_background);

color2.addEventListener("input", change_background);
	