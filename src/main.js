import Main from './Main.svelte';
import Navbar from './components/Navbar.svelte'

const app = new Main({
	target: document.getElementById('main')
});
const nav = new Navbar({
	target: document.getElementById('nav')
})

export default app;