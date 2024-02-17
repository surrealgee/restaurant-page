const elements = [
    {
        title: "About Sakura Savor",
        body: "Welcome to Sakura Savor, where we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other."
    },
    {
        title: "Our Culinary Philosophy",
        body: "At Sakura Savor, we believe that food is more than just sustenance – it's a celebration of culture, tradition, and craftsmanship. Our menu is a tribute to the artistry and heritage of Japanese cuisine, showcasing a harmonious blend of flavors, textures, and culinary techniques."
    },
    {
        title: "The Essence of Japanese Cuisine",
        body: "From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the diversity and complexity of Japanese culinary tradition. Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience."
    },
    {
        title: "Indulge in Authenticity",
        body: "Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location]. Immerse yourself in the sights, sounds, and flavors of Japanese culture as you savor each dish, crafted with precision and passion. Whether you're a seasoned food enthusiast or a curious newcomer, we invite you to experience the beauty and authenticity of Japanese cuisine at Sakura Savor."
    },
    {
        title: "Location Details",
        body: "Find us at [Address], where our doors are always open to welcome you into our culinary haven. Whether you're seeking a quiet dinner for two or a memorable gathering with friends and family, Sakura Savor offers an unforgettable dining experience that will transport you to the heart of Japan."
    },
    {
        title: "Come, Taste the Difference",
        body: "At Sakura Savor, we invite you to taste the difference and discover the true essence of Japanese cuisine. Join us for an unforgettable culinary adventure and let your senses be captivated by the flavors, aromas, and traditions of Japan. We look forward to serving you soon!"
    },
]

function renderAboutPage() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = "";

    elements.forEach(element => {
        const title = document.createElement('h3');
        title.textContent = element.title;

        const body = document.createElement('p');
        body.textContent = element.body;

        contentEl.appendChild(title);
        contentEl.appendChild(body);
    })


}

export { renderAboutPage };