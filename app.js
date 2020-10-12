var burger = document.querySelector('.burger');
var uno = document.querySelector('.burger span:first-child');
var dos = document.querySelector('.burger span:nth-child(2)');
var tres = document.querySelector('.burger span:last-child');
var menu = document.querySelector('.menu');

burger.addEventListener('click', function (e) {
	if (menu.classList.contains('show')) {
		menu.classList.add('hide');
		menu.classList.remove('show');
		uno.classList.remove('top');
		dos.classList.remove('middle');
		tres.classList.remove('bottom');
	} else {
		menu.classList.add('show');
		uno.classList.add('top');
		dos.classList.add('middle');
		tres.classList.add('bottom');
		menu.classList.remove('hide');
	}
});
