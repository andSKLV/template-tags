const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

function renderItems() {
	items.forEach(renderItem);
}

function renderItem(text) {
	const htmlElement = itemTemplate.cloneNode(true);
	htmlElement.querySelector('.item__text').innerText = text;

	setEventListeners(htmlElement);

	list.appendChild(htmlElement);
}

function handleSubmit() {
	renderItem(formInput.value);
}

function handleDelete(evt) {
	evt.target.closest('.list__item').remove();
}

function setEventListeners(element) {
	element.querySelector('.delete').addEventListener('click', handleDelete);
}

formButton.addEventListener('click', handleSubmit);

renderItems();