import "./style.css";
import "./home.css";
import "./menu.css";
import "./contact.css";
import chefImg from "./imgs/chef.jpg";
import indexHtml from "./index-template.html";
import menuHtml from "./menu-template.html";
import contactHtml from "./contact-template.html";

document.body.insertAdjacentHTML("beforeend", indexHtml);
const contentWrapper = document.querySelector(".content-wrapper");
//selects the tab menu options, except for the invisible spacers at the ends
const tabSelectors = document.querySelectorAll(".tab-list>li:not(:first-child, :last-child)");

//IIFE to define home tab html
const homeHtml = (()=>{
  const container = document.createElement("div");
  container.classList = "info-container";
  container.innerHTML = 
  `<h1 class=\"about-title\">About Our Restaurant</h1>` +
  `<img class=\"chef-img\" src=${chefImg} alt=\"Chef Image\">` +
  `<p class=\"about-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit vel arcu varius bibendum. Ut convallis dolor nec diam faucibus, in efficitur magna mollis. In consectetur ultricies lacus, eu tempor enim dignissim non.</p>`;
  return container;
})();
contentWrapper.appendChild(homeHtml);

//tab switch logic
tabSelectors.forEach(node => node.addEventListener("click", e => {
  tabSelectors.forEach(node => node.classList="");
  e.target.classList="selected";
  const newTab = e.target.textContent;
  contentWrapper.innerHTML="";
  switch (newTab) {
    case "Home":
      contentWrapper.appendChild(homeHtml);
      break;
    case "Menu":
      contentWrapper.insertAdjacentHTML("beforeend", menuHtml);
      break;
    case "Contact":
      contentWrapper.insertAdjacentHTML("beforeend", contactHtml);
      break;
  }
}));