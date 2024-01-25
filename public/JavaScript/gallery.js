const animalSelector = () => {
	const animals = {
		dogs: document.querySelectorAll('.dog'),
		cats: document.querySelectorAll('.cat'),
		foxes: document.querySelectorAll('.fox'),
		parrots: document.querySelectorAll('.parrot')
	};

	for (let animalKey of Object.keys(animals)) {
		if (animals[animalKey].length > 0) {
			return animals[animalKey];
		} else {
			console.log('Animal not found');
		}
	};
};

document.addEventListener('DOMContentLoaded', () => {
	const hideAllAnimals = () => {
		document.querySelector('.gallery-items').forEach(item => {
			item.style.display = 'none';
		})
	};

	const showAnimals = (animalClass) => {
		hideAllAnimals();
		document.querySelectorAll(animalClass).forEach(animal => {
			animal.style.display = 'flex';
		});
	};

	document.querySelectorAll('#singleAnimalFilter div').forEach(filter => {
		filter.addEventListener('click', (event) => {
			const animalType = event.currentTarget.classList[0];
			showAnimals(`.${animalType}`);
		});
	});
});
