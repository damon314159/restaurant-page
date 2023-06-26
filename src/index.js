import "./style.css";
import "./home.css";
import "./menu.css"
import chefImg from "./imgs/chef.jpg";
import indexHtml from "./index-template.html";
import menuHtml from "./menu-template.html";

document.body.insertAdjacentHTML("beforeend", indexHtml);
const contentWrapper = document.querySelector(".content-wrapper");

const homeTab = (()=>{
  const container = document.createElement("div");
  container.classList = "info-container";
  container.innerHTML = 
  `<h1 class=\"about-title\">About Our Restaurant</h1>` +
  `<img class=\"chef-img\" src=${chefImg} alt=\"Chef Image\">` +
  `<p class=\"about-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit vel arcu varius bibendum. Ut convallis dolor nec diam faucibus, in efficitur magna mollis. In consectetur ultricies lacus, eu tempor enim dignissim non.</p>`;
  return container;
})();

//contentWrapper.appendChild(homeTab);
contentWrapper.insertAdjacentHTML("beforeend", menuHtml);