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
function adjustAboutSectionHeight() {
  const aboutContent = document.getElementById("about-content");
  const aboutSection = document.getElementById("about");
  const observer = new ResizeObserver(() => {
    const childBottom = aboutContent.offsetTop + aboutContent.offsetHeight;
    aboutSection.style.minHeight = childBottom + "px";
    // aboutBG.style.minHeight = Math.max(window.innerHeight, childBottom) + "px";
  });

  observer.observe(aboutContent);
}

function adjustSkillsSectionHeight() {
  const skillsContent = document.getElementById("skills-content");
  const skillsSection = document.getElementById("skills");
  const observer = new ResizeObserver(() => {
    const childBottom = skillsContent.offsetTop + skillsContent.offsetHeight;
    skillsSection.style.minHeight = childBottom + "px";
    // aboutBG.style.minHeight = Math.max(window.innerHeight, childBottom) + "px";
  });

  observer.observe(skillsContent);
}

function adjustAOSDelays() {
  const cards = document.querySelectorAll(".about-skill-card");
  if (window.innerWidth < 890) {
    if (window.innerWidth < 640) {
      cards.forEach((card) => {
        if (card.hasAttribute("data-aos-delay")) {
          card.removeAttribute("data-aos-delay");
        }
      });
    } else {
      cards.forEach((card, index) => {
        if(!card.hasAttribute("data-aos-delay")){
          if (index == 1) {
            card.setAttribute("data-aos-delay", "400");
          }
        }else{
          if(index == 2){
            card.removeAttribute("data-aos-delay");
          }
        }
      });
    }
  } else {
    cards.forEach((card, index) => {
      if (!card.hasAttribute("data-aos-delay")) {
        if (index == 1) {
          card.setAttribute("data-aos-delay", "400");
        } else if (index == 2) {
          card.setAttribute("data-aos-delay", "800");
        }
      }
    });
  }
}

const boxes = document.querySelectorAll(".bubble-3d");

boxes.forEach((box) => {
  const randomDelay = (Math.random() * 10 - 5).toFixed(2); // 0 to 5 seconds
  box.style.animationDelay = `${randomDelay}s`;
  box.querySelector(".image-wrapper").style.animationDelay = `${randomDelay}s`;
  box.querySelector(".image-wrapper-2").style.animationDelay =
    `${randomDelay}s`;
  box.querySelector("img").style.animationDelay = `${randomDelay}s`;
});

window.addEventListener("load", () => {
  adjustAboutSectionHeight();
  adjustSkillsSectionHeight();
  adjustAOSDelays();
});
window.addEventListener("resize", () => {
  adjustAboutSectionHeight();
  adjustSkillsSectionHeight();
  adjustAOSDelays();
});
adjustAboutSectionHeight();
adjustSkillsSectionHeight();
adjustAOSDelays();
// Initial start delay
setTimeout(type, 1000);
