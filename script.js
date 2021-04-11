const bg = document.querySelector('.jumbotron');
window.addEventListener('scroll', function() {
	bg.style.backgroundSize = 100 - +window.pageYOffset/12+'%';
	bg.style.opacity = 1 - +window.pageYOffset/700+'';
})

const navbar = document.querySelector('.menu');
const slide = document.querySelector('nav ul')
navbar.onclick = function() {
	navbar.classList.toggle('active');
	slide.classList.toggle('slide');

}

// bagian galery project 
const galery = document.querySelector('.galery');
const layar = document.querySelector('.figure-img');
// const tumb = document.querySelectorAll('.tumb');

galery.addEventListener('click' , function(e) {
	if ( e.target.className == 'img-thumbnail' ) {
		layar.src = e.target.src;
	}
	if ( e.target.className == 'd-block w-100') {
		layar.src = e.target.src;
	}
})
