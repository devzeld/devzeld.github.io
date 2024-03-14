// const headContent = '<link type="text/css" rel="stylesheet" href="assets/css/style.css"> ' + '<link rel="icon" type="image/png" href="assets/img/logo-site.png"/>';

const title = '<h1 class="type-effect big-text"><span class="center-title"></span></h1>';

const menu = '<ul class="center">' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="projects.html">Projects</a></li>' +
    '<li><a href="about.html">About</a></li>' +
    '</ul>';

const footer = '';

// document.querySelector("head").innerHTML = headContent;
document.querySelector("nav").innerHTML = menu;
document.querySelector("header").innerHTML = title;
document.querySelector("footer").innerHTML = footer;

//In what "class" it will do the typing thing.
const typeHere = document.querySelector('.type-effect span');
const words = ["Hello World!", "Everything", "devzeld"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingAnimation = () => {
    const currentWord = words[wordIndex];
    typeHere.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typingAnimation, 300);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        //to block the sequence of the words array
        //if is not necessary you can comment the "if condition"
        if (wordIndex !== words.length - 1) {
            setTimeout(typingAnimation, 150);
        }
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typingAnimation, 600);
    }
};

typingAnimation();

//block inspection function ;)
/*document.addEventListener("keydown", function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
        if (event.keyCode === 123) {
            event.preventDefault();
        }
    }
);*/
document.addEventListener('contextmenu',
    event => event.preventDefault()
);
