const body = document.querySelector("body");

const footerElement = document.createElement("footer");

body.appendChild(footerElement);

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `© Marzia Hakimi ${thisYear}`;

footer.appendChild(copyright);

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub"
];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}