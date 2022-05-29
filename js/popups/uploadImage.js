/*basic*/
const open = document.querySelector('.quality__decor');
const close = document.querySelector('.popup-uploadImage__close');
const popup = document.querySelector('.popup-uploadImage');

var previousScroll = 0;

open.onclick = () =>{
	previousScroll = window.pageYOffset;;
	popup.classList.toggle('active');
	document.body.classList.add('lock');
	window.scrollTo(0, 0);
}

close.onclick = () =>{
	popup.classList.remove('active');
	document.body.classList.remove('lock');
	window.scrollTo({top: previousScroll});
}


/*check File*/
const file = document.querySelector('.popup-uploadImage__input');
const label = document.querySelector('.popup-uploadImage__label');

const uploadBtn = document.querySelector('.popup-uploadImage__button--upload');
const deleteBtn = document.querySelector('.popup-uploadImage__button--delete');
const image = document.querySelector('.quality__image');


file.oninput = () =>{
	uploadBtn.classList.add('on');
	deleteBtn.classList.add('on');

	var name = file.files[0].name;
	label.setAttribute('data-value', name);
}

uploadBtn.onclick = () =>{
	var url = URL.createObjectURL(file.files[0]);
	image.src = url;
}

deleteBtn.onclick = () =>{
	uploadBtn.classList.remove('on');
	deleteBtn.classList.remove('on');
	label.setAttribute('data-value', 'Выбрать картинку');
	image.src = 'img/quality/image.jpg';
}

