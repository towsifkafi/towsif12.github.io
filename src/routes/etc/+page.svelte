<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
	<title>Else • Towsif Kafi</title>
    <meta name="description" content="Learn more about my hobbies, interests, what I like to do.">
    <script type="application/ld+json">
        {
            "@context": "http://www.schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    "@id": "https://towsifkafi.com/etc/",
                    "url": "https://towsifkafi.com/etc/",
                    "name": "Etc",
                    "isPartOf": {
                        "@id": "https://towsifkafi.com/#website"
                    },
                    "inLanguage": "en-US",
                    "potentialAction": [
                        {
                            "@type": "ReadAction",
                            "target": [
                                "https://towsifkafi.com/etc/"
                            ]
                        }
                    ]
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://towsifkafi.com/etc/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Etc",
                            "item": "https://towsifkafi.com/etc/"
                        }
                    ]
                }
            ]
        }
    </script>
</svelte:head>

<etc>

    <div out:slide={{ duration: 250 }} class="likes">
        <h1>My Hobbies</h1>
        <p>
            Aside from my love for programming, I also have a passion for <span class="highlight-orange">gaming</span> and <span class="highlight-green">music</span>. Both serve as a form of entertainment and relaxation for me. 
            Additionally, I enjoy meeting and interacting with new people, and find it fulfilling to connect with others and <span class="highlight-cyan">make new friends</span>.
        </p>
        <div class="interests">

            <div class="box games">

                <h2>All Time Favorite Games</h2>
                <div class="gamebox">
                    <div class="game">
                        <img src="https://icon-library.com/images/pokemon-trainer-icon/pokemon-trainer-icon-7.jpg" alt="Pokemon">
                        <h3>Pokemon Emerald (GBA)</h3>
                    </div>
                    <div class="game">
                        <img src="https://lh3.googleusercontent.com/0gR8ROv_PKRBYFMVt00L23Ntf9js1p-wxV1U405UsNFyKqKRnovcEA764TGVs5FvBP3FUFwg-OCoRO4mBbzJDg" alt="Minecraft">
                        <h3>Minecraft</h3>
                    </div>
                    <div class="game">
                        <img src="https://i.pinimg.com/originals/2c/56/c9/2c56c9761b814f3e5ef32b951512a7e9.png" alt="Undertale">
                        <h3>Undertale</h3>
                    </div>
                    
                </div>

            </div>
            <div class="box ques">

                <h2>❓ Questions you might ask..</h2>
                <div class="questions">
                    <p>
                        Q: Can you cook?
                        <br>
                        A: No.
                    </p>
                    <p>
                        Q: Can you dance?
                        <br>
                        A: No.
                    </p>
                </div>
            </div>

        </div>
        <h1>Ending</h1>
        <p>
            Thank you for visiting my website and reading until the end. 
            I hope you learned something about me. You can find the website's code on my Github at 
            <a href="https://github.com/Towsif12/towsif12.github.io"><span class="highlight-blue">Towsif12/towsif12.github.io</span></a>.
        </p>
    </div>
</etc>

<style>
    etc {
        display: flex;
        width: 100%;
    }
    .likes {
        display: flex;
        flex-direction: column;
        padding: 5%;
        margin-left: 15%;
        margin-right: 15%;
        width: 100%;
    }
    .interests {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
    }
    .games {
        width: 40%;
    }
    .questions {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        column-gap: 25px;
    }
    .questions p {
        margin-bottom: 0;
    }
    .box h3 {
        line-height: 1.2;
        color: #ffffffc7;
    }
    .gamebox {
        padding: 5px;
    }
    .game {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .game img {
        width: 25px;
        margin: 3px;
        margin-right: 5px;
    }
    h1 {
        font-size: 20px;
    }
    h2 {
        font-size: 17px;
        line-height: 1.3;
    }
    p {
        margin-top: 15px;
        margin-bottom: 15px;
        color: #ffffffb4;
        line-height: 1.5;
    }

    @media only screen and (max-width: 600px) {

        .likes {
            margin-left: 10px;
            margin-right: 10px;
        }
        .ques {
            display: none;
        }
        .games {
            display: none;
        }

    }
    
</style>