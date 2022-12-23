const hamburger = document.querySelector(".menuImg");
const menuList = document.querySelector(".menu_items");
const lists = document.querySelectorAll(".menu_items li a");
const closeHamburger = document.querySelector("#btn_close");
const logoName = document.querySelector(".logo-name");
const projectContainer = document.querySelector("#seeProjects");
const modalMainContainer = document.querySelector("#popup-container");
const modalContainer = document.querySelector("#modal");
const blurGround = document.querySelector("#blurBg");
const contactForm = document.getElementById('contact-form');
const errorMsg = document.querySelector('#submitMessage');


hamburger.addEventListener("click", () => {
  if (menuList.style.display !== "block") {
    menuList.style.display = "block";
    logoName.style.display = "none";
    hamburger.style.display = "none";
  }
});

closeHamburger.addEventListener("click", () => {
  menuList.style.display = "none";
  logoName.style.display = "block";
  hamburger.style.display = "block";
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    menuList.style.display = "none";
    logoName.style.display = "block";
    hamburger.style.display = "block";
  });
});

const projectArray = [
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    img: "./images/placeholder.png",
    technologies: ["html", "bootstrap", "Ruby"],
    linkDemo: "https://til2to.github.io/porfolio_projects/",
    sourceCode: "https://github.com/til2to/porfolio_projects/tree/main",
  },
];

projectArray.forEach((project, index) => {
  let tech = "";
  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  project.technologies.forEach((item) => {
    tech += `<li class="tech-item">
    <span>${item}</span>
    </li>`;
  });

  const projectItem = `
    <div id="cardWork">
      <div class="prjectDescription">
        <h3>
          ${project.name}
        </h3>
        <p>
          ${project.description}
        </p>
      </div>
      <ul>
        ${tech}
      </ul>
      <button class="recent-work-project-btn" id=${index}>See Project</button>
    </div>
    
    projectContainer.innerHTML += projectItem;
    `;
});

const projectBtns = document.querySelectorAll(".recent-work-project-btn");
const modalBtn = document.querySelector("#modal-close");

modalBtn.addEventListener("click", () => {
  modalMainContainer.style.display = "none";
  blurGround.style.filter = "blur(0)";
});

const modalContent = (project) => {
  blurGround.style.filter = "blur(3px)";

  const modal = `
  <div id='modal-container'>
    <div>
      <h2>${project.name}</h2>
    </div>

    <ul class="stack-tags">
      <li>html</li>
      <li>Bootstrap</li>
      <li>Ruby on rails</li>
    </ul>

    <section id="modal-buttons-image-info">
      <div class="modal-image">
        <img src='./images/SnapshootPortfolio.svg' alt="Project Image">
      </div>
      <div class="modal-buttons-info">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it 1960s with the releaLorem Ipsum is simply 
          dummy text of the printing and typesetting industry. Lorem Ipsum 
          has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it 
          1960s with the releax map lapora verita.
        </p>
        <div id="button-group">
          <button type="button" class="button-group-items demo-button">
            <span>See Live</span> 
            <span><img class="live-icon" src="./images/live.svg" alt="live icon"></span>
          </button>
          <button type="button" class="button-group-items source-button">
            <span>See Source</span> 
            <span><img class="github-icon" src="./images/one.png" alt="live icon"></span>
          </button> 
        </div>
      </div>
    </section>
  </div>
  `;

  modalContainer.innerHTML = modal;
  modalMainContainer.style.display = "block";
};

projectBtns.forEach((projectBtn) => {
  projectBtn.addEventListener("click", (e) => {
    console.log("see project");
    const getBtnId = e.target.getAttribute("id");
    const projectObj = projectArray[getBtnId];
    modalContent(projectObj);
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = contactForm.elements.email.value;
  if (email === email.toLowerCase()) {
    contactForm.submit();
  } else {
    errorMsg.innerText = 'Email should be in lowercase';
  }
});

const nameof = contactForm.elements;
console.log(nameof)