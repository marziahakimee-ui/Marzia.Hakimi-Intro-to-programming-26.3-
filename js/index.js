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

fetch("https://api.github.com/users/marziahakimee-ui/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let repositories = data;
    console.log(repositories);

    let projectSection = document.getElementById("Projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.log("Error fetching repositories:", error);
  });