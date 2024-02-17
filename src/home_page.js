import mainImage from "./assets/restaurant.jpg";

function renderHomePage() {
    const contentEl = document.querySelector('#content');

    contentEl.innerHTML = "";

    const image = new Image();
    image.src = mainImage;

    const headline = document.createElement('h2');
    headline.textContent = 'Immerse Yourself in Authentic Japanese Cuisine and Culture'

    const description = document.createElement('p');
    description.textContent = `At Sakura Savor, we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other. From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the artistry and tradition of Japanese cuisine.
    Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience.Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location].`;

    contentEl.appendChild(headline);
    contentEl.appendChild(image);    
    contentEl.appendChild(description);
}

export { renderHomePage };