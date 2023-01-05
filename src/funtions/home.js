export default function displayHome() {
  document.querySelector("main").innerHTML = `
      <div class="main-content">
        <h1 class="home-text">
          Enjoy the most <span>deliciuos cakes</span> in the
          <span>world.</span>
        </h1>
        <button class="btn btn-primary" id="order-btn">Order Now</button>
      </div>
        `;
}
