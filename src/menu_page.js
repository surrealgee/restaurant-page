import sushiImg from './assets/sushi.jpg';
import tempuraImg from './assets/tempura.jpg';
import ramenImg from './assets/ramen.jpg';

const dishes = [
    {
        name: "Sushi",
        image: sushiImg,
        description: 'Dive into a world of exquisite flavors and delicate craftsmanship with sushi, the iconic Japanese dish that has captured the hearts and palates of food enthusiasts worldwide. Experience the perfect harmony of seasoned rice, premium seafood, and fresh vegetables expertly crafted into bite-sized masterpieces. From the buttery richness of salmon nigiri to the vibrant hues of tuna sashimi, each piece of sushi is a work of art that tantalizes the senses and leaves a lasting impression.'
    },
    {
        name: "Tempura",
        image: tempuraImg,
        description: 'Crispy, golden perfection awaits with tempura, a culinary delight that showcases the artistry of Japanese frying techniques. Delicate morsels of seafood, vegetables, and mushrooms are encased in a light, airy batter and gently fried to crispy perfection. Experience the symphony of textures as you bite into a tender shrimp or a crisp slice of sweet potato, enveloped in the subtle flavors of the sea and earth. With its irresistible crunch and delicate balance of flavors, tempura is a true indulgence for the senses.'
    },
    {
        name: "Ramen",
        image: ramenImg,
        description: `Embark on a culinary journey through the bustling streets of Japan with a steaming bowl of ramen, the ultimate comfort food that warms the soul and delights the palate. Immerse yourself in the rich, complex flavors of savory broth infused with umami goodness, paired with springy noodles that slurp up every drop of flavor. Whether you prefer the hearty richness of tonkotsu, the comforting warmth of miso, or the clean simplicity of shoyu, there's a bowl of ramen to satisfy every craving. Topped with succulent slices of chashu pork, tender bamboo shoots, and a perfectly seasoned egg, each bowl of ramen is a symphony of flavors that transports you to the vibrant streets of Japan.`,
    },
];


function renderMenuPage() {
    const contentEl = document.querySelector('#content');

    contentEl.innerHTML = "";

    dishes.forEach(dish => {
        const name = document.createElement('h3');
        name.textContent = dish.name;

        const image = new Image();
        image.src = dish.image;

        const description = document.createElement('p');
        description.textContent = dish.description;

        contentEl.appendChild(image);
        contentEl.appendChild(name);
        contentEl.appendChild(description);
    })
}

export { renderMenuPage };