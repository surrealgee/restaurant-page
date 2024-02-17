import { renderHomePage } from "./home_page";
import { renderMenuPage } from './menu_page';
import { renderAboutPage } from "./about_page";
import './style.css';

window.onload = () => {
    renderHomePage();
};

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', renderHomePage);
menuBtn.addEventListener('click', renderMenuPage);
aboutBtn.addEventListener('click', renderAboutPage);