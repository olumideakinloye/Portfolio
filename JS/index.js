const text = "Hi, I'm Akinloye Olumide";
const element = document.getElementById("text");

let index = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const pauseAfterTyping = 1200;
const pauseAfterDeleting = 600;

function type() {
  // Pause when typing finishes
  if (!isDeleting && index === text.length) {
    isDeleting = true;
    setTimeout(type, pauseAfterTyping);
    return;
  }

  // Pause when deleting finishes
  if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(type, pauseAfterDeleting);
    return;
  }

  // Typing forward
  if (!isDeleting) {
    index++;
  }
  // Deleting backward
  else {
    index--;
  }

  element.textContent = text.slice(0, index);

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}
function adjustAboutSectionHeight(){
  const aboutContent = document.getElementById("about-content");
  const aboutSection = document.getElementById("about");
  const aboutBG = document.getElementById("about-BG")
  if(aboutContent.clientHeight > window.innerHeight){
  aboutSection.style.height = `${aboutContent.clientHeight}px`;
  aboutBG.style.height = `${aboutContent.clientHeight}px`;
  }
}
window.addEventListener("resize", adjustAboutSectionHeight);
adjustAboutSectionHeight();

// Initial start delay
setTimeout(type, 1000);