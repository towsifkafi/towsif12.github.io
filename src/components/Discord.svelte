<script>
    import { fade } from "svelte/transition";
    export let discord;
    console.log(discord)

    // let start = discord.spotify?.timestamps?.start || 0
    // let getProgress = (start, end) => {
    //     let current = Date.now()
    //     let length = end - start
        
    //     let elapsed = current - start
    //     console.log(elapsed)
    //     if( (elapsed/length)*100 > 100) {
    //         return 100
    //     } else return (elapsed/length)*100
    // }
    // let progress = getProgress(start, discord.spotify?.timestamps?.end)
    // setInterval(() => {
    //     progress = getProgress(start, discord.spotify?.timestamps?.end)
    // }, 1000)
    // console.log(progress)

</script>

<discord in:fade={{duration: 250}} out:fade={{duration: 250}}>

    {#if discord.listening_to_spotify}
        <div class="image">
            <img src="{discord.spotify.album_art_url}" alt="">
        </div>
        <div class="info">
            <span> <i class="fa-brands fa-spotify"></i> LISTENING TO</span>
            <a href="https://open.spotify.com/track/{discord.spotify.track_id}" target="_blank" rel="noreferrer"><h2>{discord.spotify.song}</h2></a>
            <!-- <div class="progress">
                <div class="progress-bar" style="width: {progress}%;"></div>
            </div> -->
        </div>
    {:else}
        <div class="avatar">
            <img src="https://api.lanyard.rest/674660356819517440.gif" alt="">
            <span class="activity" id="{discord.discord_status}"></span>
        </div>
        <div class="info {discord.discord_status}">
            <span> <i class="fa-brands fa-discord"></i> {(discord.discord_status == 'offline') ? 'OFFLINE' : 'ACTIVE NOW'}</span>
            <h2>{discord.discord_user.username}#{discord.discord_user.discriminator}</h2>
        </div>
    {/if}

</discord>


<style>
    discord {
        display: flex;
        flex-direction: row;
        border: 1px solid #1a1a1a;
        padding: 10px;
        margin: 15px;
        border-radius: 8px;
        align-items: center;
    }
    .avatar img {
        display: flexbox;
        width: 30px;
        border-radius: 999px;
        margin: 0;
    }
    .image img {
        width: 35px;
        border-radius: 5px;
        margin-right: 10px;
    }
    .image, .avatar {
        display: flex;
    }
    .activity {
        position: relative;
        top: 18px;
        right: 12px;
        padding: 5px;
        height: 0px;
        border-radius: 999px;
        background-color: #3ba55c;
        border: 1px solid #7ef2a2;
    }
    #online {
        background-color: #3ba55c;
        border: 1px solid #7ef2a2;
    }
    #offline {
        background-color: #858585;
        border: 1px solid #858585;
    }
    .offline span {
        color: #ffffffb4 !important;
    }
    /* #idle {
        background-color: #faa61a;
        border: 1px solid #fac870;
    } */
    .info {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* min-width: 130px; */
    }
    .info span {
        font-size: 10px;
        color: #3ba55c;
    }
    .info h2 {
        font-size: 13px;
        color: #ffffffb4;
    }
    /* .idle span {
        color: #faa61a;
    } */
    /* .progress {
        margin-top: 5px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.119);
    }
    .progress-bar {
        background-color: #3ba55c;
        padding: 1px;
    } */


</style>