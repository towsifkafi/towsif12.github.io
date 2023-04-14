<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Works • Towsif Kafi</title>
    <meta name="description" content="Learn about the technologies and tools that I use to create my projects, and get a behind-the-scenes look at my development process.">

    <script type="application/ld+json">
        {
            "@context": "http://www.schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    "@id": "https://towsifkafi.com/dev/",
                    "url": "https://towsifkafi.com/dev/",
                    "name": "Development",
                    "isPartOf": {
                        "@id": "https://towsifkafi.com/#website"
                    },
                    "inLanguage": "en-US",
                    "potentialAction": [
                        {
                            "@type": "ReadAction",
                            "target": [
                                "https://towsifkafi.com/dev/"
                            ]
                        }
                    ]
                },
                {
                    "@type": "BreadcrumbList",
                    "@id": "https://towsifkafi.com/dev/#breadcrumb",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Development",
                            "item": "https://towsifkafi.com/dev/"
                        }
                    ]
                }
            ]
        }
    </script>

</svelte:head>

<dev>

    <div out:slide={{ duration: 250 }} class="works">

        <h1>Technologies</h1>
        <p>
            While I am always eager to learn new languages, the ones I am currently experienced in these. Among them, I hold a special fondness for JavaScript.
            Also the tools i am proficient at.
        </p>
        <div class="techs">

            <div class="langs">
                <div class="lang javascript">
                    <i class="devicon-javascript-plain"></i>
                    <h2>Javascript</h2>
                </div>
                <div class="lang go">
                    <i class="devicon-go-original-wordmark"></i>
                    <h2>Go Lang</h2>
                </div>
                <div class="lang html">
                    <i class="devicon-html5-plain"></i>
                    <h2>HTML/CSS</h2>
                </div>
                <div class="lang java">
                    <i class="devicon-java-plain"></i>
                    <h2>Java</h2>
                </div>
                <div class="lang python">
                    <i class="devicon-python-plain"></i>
                    <h2>Python</h2>
                </div>
            </div>
            <div class="frameworks">
                <div class="lang react">
                    <i class="devicon-react-original"></i>
                    <h2>ReactJS</h2>
                </div>
                <div class="lang svelte">
                    <i class="devicon-svelte-plain"></i>
                    <h2>Svelte</h2>
                </div>
                <div class="lang node">
                    <i class="devicon-nodejs-plain"></i>
                    <h2>Node.js</h2>
                </div>
                <div class="lang mongo">
                    <i class="devicon-mongodb-plain"></i>
                    <h2>MongoDB</h2>
                </div>
                <div class="lang redis">
                    <i class="devicon-redis-plain"></i>
                    <h2>Redis</h2>
                </div>
            </div>
            <div class="tools">
                <div class="lang vscode">
                    <i class="devicon-vscode-plain"></i>
                    <h2>VSCode</h2>
                </div>
                <div class="lang photoshop">
                    <i class="devicon-photoshop-plain"></i>
                    <h2>Photoshop</h2>
                </div>
                <div class="lang illustrator">
                    <i class="devicon-illustrator-plain"></i>
                    <h2>Illustrator</h2>
                </div>
            </div>

        </div>

        <h1>Projects</h1>
        <div class="projects">
            <a target="_blank" rel="noreferrer" href="https://github.com/Towsif12/DNSTool-Extension">
                <div class="project">
                    <p>DNSTool - Extension</p>
                    <i class="devicon-chrome-plain"></i>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://top.gg/bot/887797915207208990">
                <div class="project">
                    <p>BanglaLofi - Bot</p>
                    <i class="devicon-discordjs-plain"></i>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Towsif12/ShareX-Image-Server-Deta">
                <div class="project">
                    <p>Image Server - ShareX</p>
                    <i class="devicon-express-original"></i>
                </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Towsif12/DiscordMOTD">
                <div class="project">
                    <p>DiscordMOTD - Plugin</p>
                    <i class="devicon-java-plain"></i>
                </div>
            </a>
        </div>

    </div>
</dev>

<style>
    dev {
        display: flex;
        width: 100%;
    }
    .works {
        display: flex;
        flex-direction: column;
        padding: 5%;
        margin-left: 15%;
        margin-right: 15%;
        width: 100%;
    }
    .techs {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        margin-bottom: 50px;
    }
    .tools {
        padding-left: 20px;
        border-left: 1px solid #fff;
    }
    
    .lang {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .lang i {
        margin-right: 8px;
        font-size: 18px;
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

    .projects {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin-top: 15px;
        gap: 15px;
    }
    .project {
        border-radius: 8px;
        border: 0.01em solid #191919;
        transition: 0.3s;
        padding: 8px;

        background-color: #00000047;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .project p {
        margin-top: 0px;
        margin-bottom: 0px;
        transition: 0.3s;
    }
    .project p:hover {
        color: #fff;
    }
    .project:hover {
        border: 0.01em solid #1d1d1d;
    }

    @media only screen and (max-width: 1000px) {

        .projects {
            grid-template-columns: auto auto;
        }

    }

    @media only screen and (max-width: 600px) {

        .projects {
            grid-template-columns: auto;
        }
        .techs {
            grid-template-columns: auto auto;
            row-gap: 15px;
            column-gap: 15px;
            padding: 10px;
            margin-bottom: 10px;
        }
        .tools {
            padding-left: 0;
            border-left: none;
        }
        .works {
            margin-left: 10px;
            margin-right: 10px;
        }

    }

</style>