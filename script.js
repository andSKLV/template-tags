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
	list.appendChild(htmlElement);
}

function handleSubmit() {
	renderItem(formInput.value);
}

formButton.addEventListener('click', handleSubmit);

renderItems();