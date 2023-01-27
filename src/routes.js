import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Works from './pages/Works.svelte'
import Likes from './pages/Likes.svelte'

const routes = {
  "/": Home,
  "/about": About,
  "/dev": Works,
  "/etc": Likes
};

export { routes };