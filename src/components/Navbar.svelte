<script>
    import {location} from 'svelte-spa-router';
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
	import { useLanyard } from "svelte-lanyard";
    import Discord from "./Discord.svelte";
    const discord = useLanyard("674660356819517440", { type: 'rest', restInterval: 5000 });

    let audio;
    let change = true;

    function click() {
        if(change) {
            change = false
            return
        }
        audio.volume = 0.2
        audio.play()
    }
    onMount(() => {
    })
    $: $location, click();
    

</script>

<navbox class="{$location == '/' ? 'margint' : ''} {`${$location.replace('/', '')+'-bg'}`}">
    <audio src='/assets/click.mp3' bind:this={audio}></audio>
    {#if $discord && $location == '/'}
        <Discord discord={$discord}></Discord>
    {/if}
    {#if $location == '/'}
        <p in:fade out:fade>Click to change pages..</p>
    {/if}
    <div class="nav">
        <a href="/#/"><i class="fa-thin fa-circle-user {$location == '/' ? 'home' : ''}"></i>​</a>
        <a href="/#/about"><i class="fa-thin fa-address-card {$location == '/about' ? 'about' : ''}"></i>​</a>
        <a href="/#/dev"><i class="fa-thin fa-code {$location == '/dev' ? 'nice' : ''}"></i>​</a>
        <a href="/#/etc"><i class="fa-{$location == '/etc' ? 'solid' : 'thin'} fa-heart {$location == '/etc' ? 'likes' : ''}"></i>​</a>
    </div>
</navbox>

<style>

    navbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 60px;
        width: 100%;
    }
    p {
        font-size: 12px;
        font-style: italic;
        color: #ffffffb4;
    }

    a{
        color: #ffffffc5;
    }
    a:hover {
        color: #ffffff;
    }

    .nav {
        display: flex;
        flex-direction: row;
        font-size: 23px;
        padding: 10px;
        /* border: 0.5px solid #fff; */
        border-radius: 10px;
    }

    .nav i {
        padding-bottom: 5px;
        margin-left: 8px;
        margin-right: 8px;
    }
    .home, .about, .nice, .likes {
        color: lightblue;
        border-bottom: 1px solid lightblue;
    }
    .likes {
        color: lightcoral;
        animation:pulse 1s infinite;
        border-bottom: 1px solid transparent;
    }

    @keyframes pulse {
        10% {
            color: #f85e5eea;
            transform: scale(1.1)
        }
    }

    @media only screen and (max-width: 600px) {
        navbox {
            bottom: 0px;
            display: flex;
        }
        .nav {
            margin-top: 5px;
        }
        .margint {
            margin-top: 20%;
        }
        .about-bg, .dev-bg {
            background-color: #010101;
            border-top: 1px solid #1a1a1a;
        }
    }

</style>