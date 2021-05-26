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

let editing = null;

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
	resetEditMode();
}

function handleDuplicate(evt) {
	const text = evt.target.closest('.list__item').querySelector('.item__text').textContent;
	renderItem(text);
	resetEditMode();
}

function handleEdit(evt) {
	//Сохранить в памяти редактируемый элемент
	editing = evt.target.closest('.list__item');

	//Скопировать содержимое элемента в инпут
	formInput.value = editing.querySelector('.item__text').textContent;

	//Изменить название кнопки
	formButton.value = "Изменить";

	formButton.removeEventListener('click', handleSubmit);
	formButton.addEventListener('click', handleEditSubmit);
}

function handleEditSubmit() {
	editing.querySelector('.item__text').textContent = formInput.value;
	resetEditMode();
}

function resetEditMode(){
	editing = null;
	formInput.value = '';

	formButton.value = "Добавить";

	formButton.removeEventListener('click', handleEditSubmit);
	formButton.addEventListener('click', handleSubmit);
}

function setEventListeners(element) {
	element.querySelector('.delete').addEventListener('click', handleDelete);
	element.querySelector('.duplicate').addEventListener('click', handleDuplicate);
	element.querySelector('.edit').addEventListener('click', handleEdit);
}

formButton.addEventListener('click', handleSubmit);

renderItems();