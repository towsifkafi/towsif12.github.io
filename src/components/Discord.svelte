<script>
    import { fade } from "svelte/transition";
    export let discord;
    let activities = discord.activities.filter(a => a.type != 4).filter(a => a.type != 2)
    console.log(activities)
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

    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import { types } from '../activity_types'

</script>

<main in:fade={{duration: 250}} out:fade={{duration: 250}}>

    <div class="activities">
        <Splide hasTrack={ false } options={ { 
            rewind: true, 
            type: 'slide', 
            perPage: 1, 
            arrows: false,
            pagination: true,
            wheel: true, 
            wheelSleep: 500, 
            autoplay: true, 
            interval: 3000, 
            pauseOnHover: true
        } }>
    
            <SplideTrack>
                <SplideSlide>
                    <discord>
                        <div class="avatar">
                            <img src="https://api.lanyard.rest/674660356819517440.gif" alt="">
                            <span class="activity" id="{discord.discord_status}"></span>
                        </div>
                        <div class="info {discord.discord_status}">
                            <span> <i class="fa-brands fa-discord"></i> {(discord.discord_status == 'offline') ? 'OFFLINE' : 'ACTIVE NOW'}</span>
                            <h2>{discord.discord_user.username}#{discord.discord_user.discriminator}</h2>
                        </div>
                    </discord>
                </SplideSlide>

                {#if discord.listening_to_spotify}
                    <SplideSlide>
                        <discord>
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
                        </discord>
                    </SplideSlide>
                {/if}
                {#each activities as activity}
                    <SplideSlide>
                        <discord>
                            <div class="image">
                                <img id="large" src="https://cdn.discordapp.com/app-assets/{activity.application_id}/{activity.assets.large_image}.webp" alt="">
                                <div class="wrapper">
                                    <img id="small" src="https://cdn.discordapp.com/app-assets/{activity.application_id}/{activity.assets.small_image}.webp" alt="">
                                </div>
                            </div>
                            <div class="info">
                                <span class="blue"> <i class="{activity.name == "Visual Studio Code" ? "fa-regular fa-code" : types[activity.type]}"></i>{activity.name == "Visual Studio Code" ? " Visual Studio Code" : types[activity.type]}</span>
                                <h2>{activity.name == "Visual Studio Code" ? activity.state : activity.name}</h2>
                            </div>
                        </discord>
                    </SplideSlide>
                {/each}
                
            </SplideTrack>
        </Splide>
    </div>
    

</main>


<style>
    main {
        display: flex;
        align-items: center;
    }
    .activities {
        max-width: 200px;
    }
    discord {
        display: flex;
        flex-direction: row;
        border: 1px solid #1a1a1a;
        padding: 10px;
        margin: 15px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 8px;
        align-items: center;
        min-height: 35px;
    }
    /* .splide__arrows {
        display: none;
    } */
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
        padding: 6px;
        height: 0px;
        border-radius: 999px;
        background-color: #3ba55c;
    }
    .wrapper {
        height: 0px;
        width: 0px;
    }
    #large {
        vertical-align: top;
    }
    #small {
        position: relative;
        float: left;
        top: 19px;
        right: 20px;
        width: 18px;
        height: 18px;
        border-radius: 999px;
    }
    #online {
        background-color: #3ba55c;
    }
    #offline {
        background-color: #858585;
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
        max-width: 130px;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
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
    .blue {
        color: #0d81cf !important;
    }


</style>