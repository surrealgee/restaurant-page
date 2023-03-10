function firstLoad() {
  document.querySelector("#content").innerHTML = `
    <header class="header">
    <p class="title">Yummy's</p>
    <nav>
      <ul class="nav-list">
        <li class="list-item" id="home">Home</li>
        <li class="list-item" id="menu">Menu</li>
        <li class="list-item" id="about">About Us</li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="main-content">
      <div class="bg-img"></div>
      <h1 class="home-text">
        Enjoy the most <span>deliciuos cakes</span> in the
        <span>world.</span>
      </h1>
      <button class="btn btn-primary" id="order-btn">Order Now</button>
    </div>
  </main>
  <footer>
    <p>Yummy's</p>
    <p>&#169; 2023</p>
  </footer>
  `;
}

export default firstLoad;
