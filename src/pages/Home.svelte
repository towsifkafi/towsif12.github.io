<script>
	import Navbar from "../components/Navbar.svelte";
	import Typewriter from "svelte-typewriter";
	import Discord from "../components/Discord.svelte";
	import { slide } from "svelte/transition";
	import { useLanyard } from "svelte-lanyard";

	const discord = useLanyard("674660356819517440", { type: 'rest', restInterval: 5000 });

</script>

<svelte:head>
	<title>Me • Towsif Kafi</title>
</svelte:head>

<main class="nosel">

	<Navbar discord={discord} active='home'/>

	<div in:slide={{duration: 250}} out:slide={{duration: 250}}>
		<h1>Towsif Kafi</h1>
		<div class="info">
			<h2>A</h2>
			<Typewriter mode=loop cursor={false} wordInterval=2500>
				<h2 class="what" id="boy">Boy</h2>
				<h2 class="what" id="dev">Developer</h2>
				<h2 class="what" id="student">Student</h2>
			</Typewriter>
			<h2>From Bangladesh</h2>
		</div>
	</div>

	

</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #fff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		padding-top: 200px;
		margin-bottom: 10px;
	}
	h2 {
		color:#ffffffb4;
		font-size: 1.3em;
		margin-left: 4px;
		margin-right: 4px;
	}
	.what {
		color: #fff;
	}
	.info {
		display: flex;
		flex-direction: row;
		width: 100%;
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	#dev {
		color: lightblue;
	}
	#student {
		color: lightcoral;
	}
	#boy {
		color: lightgreen;
	}



</style>