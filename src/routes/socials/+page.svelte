<script>

</script>

<svelte:head>
    <title>Socials • Towsif Kafi</title>
    <meta name="description" content="Follow me on social media to discover more about me and feel free to reach out to me there to chat.">
    <script type="application/ld+json">
        {
            "@context": "http://www.schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    "@id": "https://towsifkafi.com/socials/",
                    "url": "https://towsifkafi.com/socials/",
                    "name": "Socials",
                    "isPartOf": {
                        "@id": "https://towsifkafi.com/#website"
                    },
                    "inLanguage": "en-US",
                    "potentialAction": [
                        {
                            "@type": "ReadAction",
                            "target": [
                                "https://towsifkafi.com/socials/"
                            ]
                        }
                    ]
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://towsifkafi.com/socials/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Socials",
                            "item": "https://towsifkafi.com/socials/"
                        }
                    ]
                }
            ]
        }
    </script>
</svelte:head>

<social>

    <div class="social">

        <h1>My Social Media Connections</h1>

        <div class="links">

            <div class="link">
                <a class="instagram" target="_blank" rel="noreferrer" href="https://instagram.com/towsifkafi">
                    <i class="fa-brands fa-instagram"></i>
                    <span>instagr.am/towsif.kafi</span>
                </a>
            </div>
            <div class="link">
                <a class="facebook" target="_blank" rel="noreferrer" href="https://fb.com/towsif.kafi">
                    <i class="fa-brands fa-facebook"></i>
                    <span>fb.com/towsif.kafi</span>
                </a>
            </div>
            <div class="link">
                <a class="twitter" target="_blank" rel="noreferrer" href="https://twitter.com/@TowsifKafi">
                    <i class="fa-brands fa-twitter"></i>
                    <span>@TowsifKafi</span>
                </a>
            </div>
            <div class="link">
                <a class="discord" target="_blank" rel="noreferrer" href="https://discord.com/users/674660356819517440">
                    <i class="fa-brands fa-discord"></i>
                    <span>Werewolf#2427</span>
                </a>
            </div>
            <div class="link">
                <a class="spotify" target="_blank" rel="noreferrer" href="https://open.spotify.com/user/z1vlsoceqsslsxd5bsesbxsq8">
                    <i class="fa-brands fa-spotify"></i>
                    <span>💊 Drugs</span>
                </a>
            </div>
            <div class="link">
                <a class="github" target="_blank" rel="noreferrer" href="https://github.com/Towsif12">
                    <i class="fa-brands fa-github"></i>
                    <span>github.com/Towsif12</span>
                </a>
            </div>
            <div class="link">
                <a class="reddit" target="_blank" rel="noreferrer" href="htps://reddit.com/u/Towsif-Kafi">
                    <i class="fa-brands fa-reddit"></i>
                    <span>u/Towsif-Kafi</span>
                </a>
            </div>
            <div class="link">
                <a class="steam" target="_blank" rel="noreferrer" href="https://steamcommunity.com/id/towsifkafi/">
                    <i class="fa-brands fa-steam"></i>
                    <span>towsifkafi</span>
                </a>
            </div>


        </div>

    </div>

</social>

<style>

    h1 {
        font-size: 20px;
        text-align: center;
    }
    social {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .social {
        justify-content: center;
        width: 100%;
        flex-direction: column;
        padding: 5%;
        margin-left: 15%;
        margin-right: 15%;
    }

    .links {
        margin-top: 50px;
        display: grid;
        /* grid-template-columns: auto auto auto auto auto; */
        grid-template-columns: repeat(4, 1fr);
        row-gap: 25px;
    }

    .links i {
        font-size: 35px;
        margin: 5px;
    }
    .links a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .link {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .instagram {
        color: #fe5b79;
    }
    .facebook {
        color: #0380fc;
    }
    .twitter {
        color: #03cdff;
    }
    .discord {
        color: #5865f2;
    }
    .spotify {
        color: #25d35f;
    }
    .github {
        color: #fff;
    }
    .reddit {
        color: #fd5502;
    }
    .steam {
        color: #12497a;
    }




</style>