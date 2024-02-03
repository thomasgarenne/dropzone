const cards = document.querySelectorAll('.card');
const dropZone = document.querySelector('.drop-zone');
const cardContainer = document.querySelector('.card-container');

let dragged = null;

// Select Card
cards.forEach(card => {
	card.addEventListener('dragstart', (e) => {
		dragged = e.target;
	})
});

// Drop Zone
dropZone.addEventListener('dragover', (e) => {
	e.preventDefault();
})

dropZone.addEventListener('drop', (e) => {
	e.preventDefault();

	if (e.target.className === 'drop-zone') {
		dragged.parentNode.removeChild(dragged);
		e.target.appendChild(dragged);
	}
})

// Card Container
cardContainer.addEventListener('dragover', (e) => {
	e.preventDefault();
})

cardContainer.addEventListener('drop', (e) => {
	e.preventDefault();

	if (e.target.className === 'card-container') {
		dragged.parentNode.removeChild(dragged);
		e.target.appendChild(dragged);
	}
})