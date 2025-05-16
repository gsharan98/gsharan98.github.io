// Typing Animation
const words = [
  "Web Developer",
  "UI/UX Designer",
  "Coding Enthusiast",
  "Problem Solver",
  "Creative Thinker"
];
//these words will display one by one

let currentIndex = 0;              //tracks the word index
let typingElement = document.getElementById("typing");      //this is hwere text will show up on the page

function typeWord(word, index = 0) {
  if (index < word.length) {
    typingElement.textContent += word.charAt(index);      //adds 1 word at a time
    setTimeout(() => typeWord(word, index + 1), 100);     //adds each word after 100ms
  } else {
    setTimeout(() => eraseWord(word), 2000);              //after the word is diaplay it will wait for 2 second before erasing it
  }
}

function eraseWord(word, index = word.length) {
  if (index > 0) {
    typingElement.textContent = word.substring(0, index - 1);    //removes one character at a time
    setTimeout(() => eraseWord(word, index - 1), 50);             //removes each character within-50ms
  } else {
    currentIndex = (currentIndex + 1) % words.length;
    setTimeout(() => typeWord(words[currentIndex]), 500);     // Start typing the next word after 0.5s pause
  }
}

// Swhen page loads the animation starts displaying
window.addEventListener('DOMContentLoaded', () => {
  typeWord(words[currentIndex]);
  
  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {             //prevent default jump behaviour
      e.preventDefault();
      const targetId = this.getAttribute('href');              //get sectionID
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'     //smooth scroll animation
        });
      }
    });
  });
  
  // Highlight active section in navigation
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;             //distance from top
      const sectionHeight = section.offsetHeight;       //height of the section
      const sectionId = section.getAttribute('id');     //get section ID
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');     //highlight navigation link
      } else {
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');   //remove hightlight in navigation link
      }
    });
  });
});    













