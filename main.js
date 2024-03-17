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


function myFunction() {
    var header = document.getElementById("header");
    var sticky = 100; 
  
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
}

window.addEventListener('scroll', function() {
    myFunction();
});