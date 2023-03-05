<script>

	import Typewriter from "svelte-typewriter";
	import { slide } from "svelte/transition";
  	import { onMount } from "svelte";

	onMount(() => {
		if(location.hostname !== 'localhost') {
			fetch("https://hmm-api.fly.dev/metrics").then(function(response) {}).then(function(data) {}).catch(function() {});
		}
	})

</script>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "http://www.schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": "https://towsifkafi.com/",
					"url": "https://towsifkafi.com/",
					"name": "Towsif Kafi",
					"isPartOf": {
						"@id": "https://towsifkafi.com/#website"
					},
					"inLanguage": "en-US",
					"potentialAction": [
						{
							"@type": "ReadAction",
							"target": [
								"https://towsifkafi.com/"
							]
						}
					]
				},
				{
					"@type": "BreadcrumbList",
					"@id": "https://towsifkafi.com/#breadcrumb",
					"itemListElement": [
						{
							"@type": "ListItem",
							"position": 1,
							"name": "Home"
						}
					]
				}
			]
		}
	</script>
</svelte:head>

<main class="nosel">

	<div in:slide={{duration: 250}} out:slide={{duration: 250}}>
		<h1>Towsif Kafi</h1>
		<div class="info">
			<h2>A</h2>
			<Typewriter mode="loop" cursor="{false}" wordInterval="{2500}">
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