var hidden = document.getElementsByClassName("hide");
var show = document.getElementById("security");
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var panel = this.nextElementSibling;
		if (panel.style.display == "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}


show.addEventListener("change", function () {
	if (this.value == "175") {
		for (let i = 0; i < hidden.length; i++) {
			hidden[i].style.display = "block";
		}
	} else {
		for (let i = 0; i < hidden.length; i++) {
			hidden[i].style.display = "none";
		}
	}
})