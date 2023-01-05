import "../css/style.css";
import "../css/menu.css";
import "../imgs/pexels-abhinav-goswami-291528.jpg";
import "../imgs/pexels-quang-nguyen-vinh-2147834.jpg";
import "../imgs/pexels-marta-dzedyshko-6341572.jpg";

export default function displayMenu() {
  document.querySelector("main").innerHTML = `
    <div class="menu-content">
    <div class="card">
      <img src="./pexels-abhinav-goswami-291528.jpg" alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
    </div>
    <div class="card">
      <img src="./pexels-quang-nguyen-vinh-2147834.jpg" alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
    </div>
    <div class="card">
      <img src="./pexels-marta-dzedyshko-6341572.jpg" alt="" />
      <h3>Chocolate Cake</h3>
      <button class="menu-btn btn-secondary">Add to Cart</button>
  </div>
      `;
}
