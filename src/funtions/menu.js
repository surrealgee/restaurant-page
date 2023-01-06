import "../css/style.css";
import "../css/menu.css";
import img1 from "../imgs/pexels-abhinav-goswami-291528.jpg";
import img2 from "../imgs/pexels-quang-nguyen-vinh-2147834.jpg";
import img3 from "../imgs/pexels-marta-dzedyshko-6341572.jpg";

export default function displayMenu() {
  document.querySelector("main").innerHTML = `
    <div class="menu-content">
    <div class="card">
      <img src=${img1} alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
    </div>
    <div class="card">
      <img src=${img2} alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
    </div>
    <div class="card">
      <img src=${img3} alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
  </div>
      `;
}
