<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";
  import { projects } from "../data/projects";

  const meta = {
    title: "Projects | K-Sato",
    description: "Here are some of my random creations",
    url: envVariables.basePath,
    siteName: "K-Sato",
    image: {
      url: `${envVariables.basePath}/background.jpeg`,
      width: 1000,
      height: 523,
      alt: "k-sato-image",
    },
  };
</script>

<MetaTags
  title={meta.title}
  description={meta.description}
  canonical={meta.url}
  openGraph={{
    description: meta.description,
    images: [
      {
        ...meta.image,
      },
    ],
    site_name: meta.siteName,
    title: meta.title,
    type: "website",
    url: meta.url,
  }}
  twitter={{
    cardType: "summary_large_image",
    title: meta.title,
    description: meta.description,
    image: meta.image.url,
    imageAlt: meta.image.alt,
  }}
/>

<div class="projects-container">
  <h1>Here are some of my random creations</h1>

  <div class="projects-container__contet-wrapper">
    {#each projects as project}
      <div class="projects-container__content">
        <a href={project.link} class="projects-container__content__name"
          >{project.name}</a
        >
        <p class="projects-container__content__description">
          {project.description}
        </p>
        <div class="projects-container__content__techstack">
          {#each project.techStack as techstack}
            <div class="projects-container__content__techstack__item">
              <span
                class={`projects-container__content__techstack__item__color ${techstack.toLowerCase()}`}
              /><span class="projects-container__content__techstack__item__name"
                >{techstack}</span
              >
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <p class="projects-container__more">More scraps to come.......</p>
</div>

<style>
  .projects-container {
    --typescript-color: #2b7489;
    --react-color: #61dafb;
    --svelte-color: #ff3d00;
    --eslint-color: #4b31c3;
    --github-action-color: #242a2f;
    --ruby-color: #a91500;
    --go-color: #79d4fd;
  }
  .typescript {
    background-color: var(--typescript-color);
    border: 1px solid var(--typescript-color);
  }
  .react {
    background-color: var(--react-color);
    border: 1px solid var(--react-color);
  }
  .svelte,
  .sveltekit {
    background-color: var(--svelte-color);
    border: 1px solid var(--svelte-color);
  }
  .eslint {
    background-color: var(--eslint-color);
    border: 1px solid var(--eslint-color);
  }
  .githubaction {
    background-color: var(--github-action-color);
    border: 1px solid var(--github-action-color);
  }
  .ruby {
    background-color: var(--ruby-color);
    border: 1px solid var(--ruby-color);
  }
  .go {
    background-color: var(--go-color);
    border: 1px solid var(--go-color);
  }

  .projects-container__contet-wrapper {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .projects-container__content {
    border-bottom: solid 1px var(--border-color);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: 48%;
  }

  @media screen and (max-width: 600px) {
    .projects-container__content {
      width: 100%;
    }
  }

  .projects-container__content__name {
    font-size: 1.3rem;
    text-decoration: none;
  }

  .projects-container__content__description {
    padding: 0.5rem 0;
    color: var(--secondary-color);
  }

  .projects-container__content__techstack {
    display: flex;
    flex-direction: row;
  }

  .projects-container__content__techstack__item {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
  .projects-container__content__techstack__item:first-child {
    margin-left: 0;
  }
  .projects-container__content__techstack__item__color {
    position: relative;
    display: inline-block;
    top: 1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .projects-container__content__techstack__item__name {
    color: var(--secondary-color);
    font-weight: lighter;
    margin-left: 5px;
  }

  .projects-container__more {
    margin-top: 1rem;
    color: var(--secondary-color);
  }
</style>
