import Post from "./post.js";
import "./css/style.css";
import cyberpunk_city from "../assets/images/cyberpunk_city.jpg";
import dark_mountains from "../assets/images/dark_mountains.jpg";
import neon_waves from "../assets/images/neon_waves.jpg";
import cosmic_nebula from "../assets/images/cosmic_nebula.jpg";
import "./css/font.css";

const post = new Post('Webpack Post1 Title', {
  cyberpunk_city,
  dark_mountains,
  neon_waves,
  cosmic_nebula
});

console.log('Post to string:', post.toString());
