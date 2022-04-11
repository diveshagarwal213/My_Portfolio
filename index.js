function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("scroll", reveal);

/* const printSentence = (id, sentence, speed = 50) => {
    let index = 0;
    let element = document.getElementById(id);
    
    let timer = setInterval(function() {
      const char = sentence[index];
      
      if (char === '<') {
        index = sentence.indexOf('>', index);  // skip to greater-than
      }
      
      element.innerHTML = sentence.slice(0, index);
      
      if (++index === sentence.length) {
        clearInterval(timer);
      }
    }, speed);
} */ // printSentence
  
  /* printSentence(
    'typeEffect',
    ' "In this universe Life has an end but, <br> in Life <span class="txt-p" >Learning</span> never ends" ',
    50
  ); */
