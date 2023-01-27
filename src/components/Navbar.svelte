<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import Discord from "./Discord.svelte";

    let count = 0;

    let audio;
    export let active;

    onMount(() => {
        audio.volume = 0.2
        audio.play()
    })
    export let discord = undefined;

</script>

<navbox>
    <audio src='/assets/click.mp3' bind:this={audio}></audio>
    {#if $discord}
        <Discord discord={$discord}></Discord>
    {/if}
    {#if active == 'home'}
        <p in:fade out:fade>Click to change pages..</p>
    {/if}
    <div class="nav">
        <a href="/#/"><i class="fa-thin fa-circle-user {active == 'home' || active == '/' ? active : ''}"></i></a>
        <a href="/#/about"><i class="fa-thin fa-address-card {active == 'about' ? active : ''}"></i></a>
        <a href="/#/dev"><i class="fa-thin fa-code {active == 'nice' ? active : ''}"></i></a>
        <a href="/#/etc"><i class="fa-{active == 'likes' ? 'solid' : 'thin'} fa-heart {active == 'likes' ? active : ''}"></i></a>
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

</style>