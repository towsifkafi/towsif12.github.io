<script>
  import Navbar from "../components/Navbar.svelte";
  import { slide } from "svelte/transition";
</script>

<svelte:head>
	<title>About • Towsif Kafi</title>
</svelte:head>

<about>
  <Navbar active="about" />

  <div out:slide={{ duration: 250 }} class="about">
    <h1>About Me</h1>
    <p>
      A warm welcome to my personal website.
      <br>
      As a <span class="highlight-orange">19-year-old computer enthusiast</span>, I find solace in programming and using my free time to code. 
      Not only is it a passion of mine, but it also serves as a stress reliever for me (most of the time 🐞). 
      In addition to pursuing my hobby, I am also a <span class="highlight-cyan">college student</span>, and have a particular interest in the field of <span class="highlight-red">Cyber Security</span>.
    </p>

    <h1>Where to find me</h1>
    <p>
      I currently reside in <span class="highlight-green">Khulna, Bangladesh</span>. Though I prefer to keep my home address private.
      <br>
      While I have a presence on various social media platforms, my primary means of communication is through <span class="highlight-blue">Discord</span>. 
      Feel free to reach out to me there to chat or discuss any projects you may have in mind. Also you can check out my <a target="_blank" rel="noreferrer" href="https://github.com/Towsif12"><span class="highlight-white">GitHub</span></a> profile.
      <br>
      <span style="text-decoration: underline;">Email:</span> 
      <a href="mailto:kafitowsif@gmail.com"><span class="highlight-white">Kafitowsif@gmail.com</span></a>
    </p>

    <div class="links">
      <a target="_blank" rel="noreferrer" href="https://discord.com/users/674660356819517440"><i id="link" class="fa-brands fa-discord"></i></a>
      <a target="_blank" rel="noreferrer" href="https://github.com/Towsif12"><i id="link" class="fa-brands fa-github"></i></a>
    </div>

  </div>
</about>

<style>
  about {
    display: flex;
    width: 100%;
  }
  .about {
    display: flex;
    flex-direction: column;
    padding: 5%;
    margin-left: 15%;
    margin-right: 15%;
    width: 100%;
  }
  h1 {
    font-size: 20px;
  }
  p {
    margin-top: 15px;
    margin-bottom: 15px;
    color: #ffffffb4;
    line-height: 1.5;
  }
  .links {
    font-size: 25px;
  }
  #link:hover {
    color: lightskyblue;
  }

  @media only screen and (max-width: 600px) {

    .about {
      margin-left: 10px;
      margin-right: 10px;
    }

  }

</style>
