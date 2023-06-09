const heroSection = document.querySelector(".section--hero");

const scrollDetector = new IntersectionObserver(
  (entry) => {
    const projectNav = document.querySelector(".projects-nav");

    projectNav.classList.toggle("stuck", !entry[0].isIntersecting);
  },
  { threshold: 0.55 }
);

scrollDetector.observe(heroSection);

const projectsSection = document.querySelector("#projects");
const aboutSection = document.querySelector(".section--about");
const contactSection = document.querySelector(".section--contact");
const sections = [projectsSection, aboutSection, contactSection];

const navProjects = document.querySelector(".nav-projects");
const navAbout = document.querySelector(".nav-about");
const navContact = document.querySelector(".nav-contact");

const options = {
  threshold: 0.1, // Adjust this value based on your needs
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const section = entry.target;
    const navLink = getNavLink(section);

    if (entry.isIntersecting) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
}, options);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

function getNavLink(section) {
  if (section === projectsSection) {
    return navProjects;
  } else if (section === aboutSection) {
    return navAbout;
  } else if (section === contactSection) {
    return navContact;
  }
}
