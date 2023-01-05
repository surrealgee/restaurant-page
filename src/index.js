import firstLoad from "./funtions/page-loader";
import "./css/style.css";
import bgImg from "./imgs/pexels-pixabay-372851.jpg";
import displayHome from "./funtions/home";
import displayMenu from "./funtions/menu";

firstLoad();

document.querySelector("#home").addEventListener("click", displayHome);
document.querySelector("#menu").addEventListener("click", displayMenu);
