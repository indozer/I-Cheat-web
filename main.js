document.addEventListener('DOMContentLoaded', function () {
    const textToTypeElement = document.getElementById('text-to-type');
    const texts = ['First month free!', 'Download Right Now!'];
    let index = 0;

    function cycleText() {
        if (index < texts.length) { 
            setTimeout(() => {
                textToTypeElement.textContent = '';
                textToTypeElement.textContent = texts[index];
                textToTypeElement.classList.remove('typewriter');
                void textToTypeElement.offsetWidth;
                textToTypeElement.classList.add('typewriter');
                index++;
            }, 1500);
        } else {
            textToTypeElement.removeEventListener('animationend', cycleText); 
        }
    }

    textToTypeElement.addEventListener('animationend', cycleText);
});


window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.76)";
  } else {
    header.style.backgroundColor = "transparent"; 
  }
}