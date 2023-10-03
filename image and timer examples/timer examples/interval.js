
let counter = 0;

const $ = (id) => document.querySelector(id);

const log = () => {
	$("#counter").firstChild.nodeValue = counter;
	counter++;
}

document.addEventListener('DOMContentLoaded', () => {
	timer = setInterval(log, 1000);

	$("#cancel").addEventListener('click', () => {
		clearInterval(timer);
		alert("Interval cleared");
	});
});


