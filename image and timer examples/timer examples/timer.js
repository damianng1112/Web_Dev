

const $ = (id) => document.querySelector(id);

const print = () => {
	alert("Hello!");
}

document.addEventListener('DOMContentLoaded', () => {
	//Set the timer to call the print function in 5 seconds
	let timer = setTimeout(print, 5000);
	
	const button = $("#cancel");
	
	button.addEventListener('click', () => {
		//Clear the timeout
		clearTimeout(timer);
		alert("Timer cleared");
	});	
});

