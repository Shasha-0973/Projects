const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');
    
        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1);
        arrSecs.forEach(arrSecs => {
            if(arrSecs.classList.contains('active')) {
                sections[4].classList.add('action-contact');
            }
            if (sections[0].classList.contains('active')) {
                sections[4].classList.remove('action-contact');
            }
        })
    });
});

const typingAnimationElement = document.getElementById('typing-animation');

const typingTexts = [
    'Front End Developer',
    'Web Developer'
];

let currentTextIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 80;
let newTextDelay = 1500; 
function type() {
    if (charIndex < typingTexts[currentTextIndex].length) {
        typingAnimationElement.textContent += typingTexts[currentTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingAnimationElement.textContent = typingTexts[currentTextIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        currentTextIndex++;
        if (currentTextIndex >= typingTexts.length) currentTextIndex = 0;
        setTimeout(type, typingDelay + 300);
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if (typingTexts.length) setTimeout(type, newTextDelay + 250);
});


resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

