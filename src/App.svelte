<script lang="ts">
  import { links } from './config'
  import Avatar from './lib/Avatar.svelte'
  import Discord from './lib/icons/Discord.svelte'
  import GitHub from './lib/icons/GitHub.svelte'
  import GitLab from './lib/icons/GitLab.svelte'
  import Google from './lib/icons/Google.svelte'
  import Reddit from './lib/icons/Reddit.svelte'
</script>

<div>
  <Avatar />

  <h1>Hello, I'm Oskar</h1>

  <p>I'm a self-taught programmer. I use Fedora Linux and I like open source software.</p>

  <footer>
    <a href={links.github}>
      <GitHub />
    </a>

    <a href={links.gitlab}>
      <GitLab />
    </a>

    <a href={links.googleDevelopers}>
      <Google />
    </a>

    <a href={links.discord}>
      <Discord />
    </a>

    <a href={links.reddit}>
      <Reddit />
    </a>
  </footer>
</div>

<style>
  :root {
    margin: 0;
    padding: 0;
    color: #f2f0ed;
    background-color: #080a0b;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  div {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-bottom: 0px;
  }

  footer {
    margin-top: 0.5em;
  }

  a {
    color: #f2f0ed;
    text-decoration: none;
  }
</style>
