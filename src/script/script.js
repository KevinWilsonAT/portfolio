// OPEN-CLOSE MENU WITH OVERLAY

let btnMenu = document.getElementById('btn-menu-open');
let menu = document.getElementById('mobile-menu');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () =>{
    menu.classList.add('menu-open');
})

menu.addEventListener('click', () =>{
    menu.classList.remove('menu-open');
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('menu-open');
})

// SMOOTH SCROLL MENU

const menuItems = document.querySelectorAll('.desktop-menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 0;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// SMOOTH SCROLL TO THE TOP

// Get the button:
let scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.style.display = "none";

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
    scrollBtn.style.classList.add('slideIn');
  }
  else
  {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    smoothScrollTo(0, 0);
}

// Slogan typewriting effect

var i = 0;
var txt = 'TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL.'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("slogan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}