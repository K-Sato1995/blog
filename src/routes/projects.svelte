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
      </div>
    {/each}
  </div>

  <p class="projects-container__more">More scraps to come.......</p>
</div>

<style>
  .projects-container__contet-wrapper {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .projects-container__content {
    border-bottom: solid 1px var(--border-color);
    margin-top: 1.5rem;
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
  }
  .projects-container__content__techstack__item:first-child {
    margin-left: 0;
  }
  .projects-container__content__techstack__item__color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
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
