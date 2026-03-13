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
  {
    name: "HTML5",
    icon: "<i class='fab fa-html5' style='color: rgb(255, 119, 28)'></i>",
    color: "#7c2b15",
    type: "Markup",
    level: 95,
  },
  {
    name: "CSS3",
    icon: "<i class='fa-brands fa-css3-alt' style='color: rgb(8, 164, 253)'></i>",
    color: "#264de4",
    type: "Styling",
    level: 90,
  },
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
  {
    name: "React",
    icon: "<i class='fa-brands fa-react' style='color: #68deff'></i>",
    color: "#47a2bb",
    type: "Framework",
    level: 85,
  },
  {
    name: "Node.js",
    icon: "<i class='fa-brands fa-node-js' style='color: rgb(2, 216, 9)'></i>",
    color: "#68a063",
    type: "Runtime",
    level: 80,
  },
  {
    name: "MySQL",
    icon: "<i class='devicon-mysql-plain' style='color: #63ace4'></i>",
    color: "#4479a1",
    type: "Database",
    level: 75,
  },
  {
    name: "PHP",
    icon: "<i class='fa-brands fa-php' style='color: rgb(153, 180, 195)'></i>",
    color: "#777bb4",
    type: "Language",
    level: 70,
  },
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

const form = document.getElementById("contact-form");

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

emailjs.init("ujo5yM-K3MnFQJXzS");
form.addEventListener("submit", function (e) {
  if (this.querySelector("input").value.length > 0) {
    form.querySelector("button span").textContent = "Sending...";
    e.preventDefault();

    emailjs.sendForm("service_zk0k20b", "template_bfs1uu7", this).then(
      function () {
        alert("Message sent!");
        form.reset();
        form.querySelector("button span").textContent = "Send";
      },
      function (error) {
        alert("Failed: " + error.text);
        form.querySelector("button span").textContent = "Send";
      },
    );
  }
});

/* ── 1. MORPHING BLOB ── */

const dotsWrap = document.getElementById("dotsWrap");
skills.forEach((s, i) => {
  const d = document.createElement("div");
  d.className = "blob-dot" + (i === 0 ? " active" : "");
  d.id = "bd" + i;
  d.addEventListener("click", () => {
    idx = i;
    update(i);
    resetAutoPlay();
  });
  dotsWrap.appendChild(d);
});

let idx = 0;
let autoTimer = null;
function update(i) {
  const blob = document.getElementById("morphBlob");
  const icon = document.getElementById("blobIcon");
  const name = document.getElementById("blobName");
  const counter = document.getElementById("blobCounter");

  // Animate text swap
  [icon, name, counter].forEach((el) => {
    el.classList.remove("fade-in");
    void el.offsetWidth; // reflow to restart animation
    el.classList.add("fade-in");
  });

  icon.innerHTML = skills[i].icon;
  name.textContent = skills[i].name;
  counter.textContent = `${String(i + 1).padStart(2, "0")} / ${String(skills.length).padStart(2, "0")}`;

  blob.style.background = `radial-gradient(circle at 38% 35%, ${skills[i].color}, #0a0118 70%)`;
  blob.style.boxShadow = `0 0 70px ${skills[i].color}88, inset 0 0 40px rgba(139,92,246,0.15)`;

  // dots
  skills.forEach((_, j) => {
    const d = document.getElementById("bd" + j);
    d.classList.toggle("active", j === i);
    d.style.background = j === i ? skills[i].color : "";
    d.style.boxShadow = j === i ? `0 0 8px ${skills[i].color}` : "";
    d.style.borderColor = j === i ? skills[i].color : "";
  });
}

window.changeSkill = function (direction) {
  idx = (idx + direction + skills.length) % skills.length;
  update(idx);
  resetAutoPlay();
};

function resetAutoPlay() {
  clearInterval(autoTimer);
  // restart progress bar animation
  const bar = document.getElementById("autoBar");
  bar.classList.remove("paused");
  bar.style.animation = "none";
  void bar.offsetWidth;
  bar.style.animation = "";
  autoTimer = setInterval(() => changeSkill(1), 2000);
}

// Pause autoplay on hover
document.getElementById("morphBlob").addEventListener("mouseenter", () => {
  clearInterval(autoTimer);
  document.getElementById("autoBar").classList.add("paused");
});
document.getElementById("morphBlob").addEventListener("mouseleave", () => {
  resetAutoPlay();
});

resetAutoPlay();
update(0);

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

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
