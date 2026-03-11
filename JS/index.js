const text = "Hi, I'm Akinloye Olumide";
const element = document.getElementById("text");

let index = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const pauseAfterTyping = 1200;
const pauseAfterDeleting = 600;
const projectImgs = [
  "./IMGs/ludoApp.png",
  "./IMGs/chatApp.jpg",
  "./IMGs/toDoApp.png",
];
const skills = [
  { name: "HTML5", icon: "<i class='fab fa-html5' style='color: rgb(255, 119, 28)'></i>", color: "#7c2b15", type: "Markup", level: 95 },
  { name: "CSS3", icon: "<i class='fa-brands fa-css3-alt' style='color: rgb(8, 164, 253)'></i>", color: "#264de4", type: "Styling", level: 90 },
  {
    name: "JavaScript",
    icon: "<i class='fa-brands fa-js' style='color: rgb(255, 212, 59)'></i>",
    color: "#af9e18",
    type: "Language",
    level: 88,
  },
  {
    name: "TypeScript",
    icon: "<i class='devicon-typescript-plain' style='color: rgb(8, 164, 253)'></i>",
    color: "#3178c6",
    type: "Language",
    level: 78,
  },
  { name: "React", icon: "<i class='fa-brands fa-react' style='color: #68deff'></i>", color: "#47a2bb", type: "Framework", level: 85 },
  { name: "Node.js", icon: "<i class='fa-brands fa-node-js' style='color: rgb(2, 216, 9)'></i>", color: "#68a063", type: "Runtime", level: 80 },
  { name: "MySQL", icon: "<i class='devicon-mysql-plain' style='color: #63ace4'></i>", color: "#4479a1", type: "Database", level: 75 },
  { name: "PHP", icon: "<i class='fa-brands fa-php' style='color: rgb(153, 180, 195)'></i>", color: "#777bb4", type: "Language", level: 70 },
  {
    name: "GitHub",
    icon: "<i class='devicon-github-original colored'></i>",
    color: "#747474",
    type: "Version Control",
    level: 92,
  },
  {
    name: "MongoDB",
    icon: "<i class='devicon-mongodb-plain' style='color: #00e704'></i>",
    color: "#47a248",
    type: "Database",
    level: 72,
  },
];

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
function adjustAOSDelays() {
  const cards = document.querySelectorAll(".about-aos");
  const projectCards = document.querySelectorAll(".project-aos");
  if (window.innerWidth < 890) {
    if (window.innerWidth < 640) {
      cards.forEach((card) => {
        if (card.hasAttribute("data-aos-delay")) {
          card.removeAttribute("data-aos-delay");
        }
      });
      projectCards.forEach((card) => {
        if (card.hasAttribute("data-aos-delay")) {
          card.removeAttribute("data-aos-delay");
        }
      });
    } else {
      cards.forEach((card, index) => {
        if (!card.hasAttribute("data-aos-delay")) {
          if (index == 1) {
            card.setAttribute("data-aos-delay", "400");
          }
        } else {
          if (index == 2) {
            card.removeAttribute("data-aos-delay");
          }
        }
      });
      projectCards.forEach((card, index) => {
        if (card.hasAttribute("data-aos-delay")) {
          card.removeAttribute("data-aos-delay");
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
    projectCards.forEach((card, index) => {
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

const cards = document.querySelectorAll(".project-img");

projectImgs.forEach((src, index) => {
  const imgElement = cards[index].querySelector("img");
  const skeleton = cards[index].querySelector(".project-img-loader");

  const image = new Image();
  image.src = src;

  image.onload = () => {
    imgElement.src = image.src;
    imgElement.classList.add("loaded");

    skeleton.remove();
  };
});

/* ── 1. MORPHING BLOB ── */
(function () {
  let idx = 0;
  function update(i) {
    document.getElementById("blobIcon").innerHTML = skills[i].icon;
    document.getElementById("blobName").textContent = skills[i].name;
    document.getElementById("blobCounter").textContent =
     i < 9 ? `0${i + 1} / ${skills.length}` : `${i + 1} / ${skills.length}`;
    document.getElementById("morphBlob").style.background =
      `radial-gradient(circle at 38% 35%, ${skills[i].color}, #1a0533 70%)`;
    document.getElementById("morphBlob").style.boxShadow =
      `0 0 60px ${skills[i].color}66, inset 0 0 40px rgb(33, 22, 59)`;
    for (let j = 0; j < 10; j++) {
      const d = document.getElementById("bd" + j);
      d.classList.toggle("active", j === i);
      d.style.background = j === i ? skills[i].color : "";
      d.style.boxShadow = j === i ? `0 0 8px ${skills[i].color}` : "";
    }
  }
  setInterval(() => {
    idx = (idx + 1) % skills.length;
    update(idx);
  }, 2000);
  update(0);
})();

const readMoreBtns = document.querySelectorAll(".read-more-btn");
readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.parentElement.querySelector("p");
    text.classList.add("expanded");
    btn.remove();
  });
});

window.addEventListener("load", () => {
  adjustAOSDelays();
});
window.addEventListener("resize", () => {
  adjustAOSDelays();
});
adjustAOSDelays();
setTimeout(type, 1000);
