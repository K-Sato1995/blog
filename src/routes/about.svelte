<script>
  import Emoji from "$lib/components/Emoji.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import { envVariables } from "$lib/envVariables";

  import { Swiper, SwiperSlide } from "swiper/svelte";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "../assets/styles/swiper.css";

  import { Navigation } from "swiper";
  const meta = {
    title: "About | K-Sato",
    description: "About K-Sato. And Social links.",
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
<div class="about-container">
  <Swiper
    navigation={true}
    modules={[Navigation]}
    pagination={{
      clickable: true,
    }}
    class="mySwiper"
  >
    <SwiperSlide>
      <div class="about-container__slide-content">
        <h1 class="about-container__slide-content__title">Who I am</h1>
        <img
          src="me.png"
          class="about-container__slide-content__my-pic"
          alt="me"
        />
        <p class="about-container__slide-content__first-description">
          Aspiring web developer. Rediscovering love for coding and building
          stuff.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide
      ><div class="about-container__slide-content">
        <h1 class="about-container__slide-content__title">What I like</h1>
        <ul class="about-container__slide-content__hobbies">
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="⚾️" label="baseball" />{" "}Baseball
          </li>
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="👨🏻‍💻" label="baseball" />{" "}Coding
          </li>
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="🗺" label="baseball" />{" "}Traveling
          </li>
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="🐶" label="baseball" />{" "}Dogs
          </li>
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="🍿" label="baseball" />{" "}Movies
          </li>
          <li class="about-container__slide-content__social-links__link">
            <Emoji symbol="🎮" label="baseball" />{" "}Video Games
          </li>
        </ul>
      </div></SwiperSlide
    >
    <SwiperSlide
      ><div class="about-container__slide-content">
        <h1 class="about-container__slide-content__title">Links</h1>

        <ul class="about-container__slide-content__social-links">
          <li class="about-container__slide-content__social-links__link">
            <a href="https://github.com/K-Sato1995">Github</a>
          </li>
          <li class="about-container__slide-content__social-links__link">
            <a href="https://qiita.com/k-penguin-sato">Qiita</a>
          </li>
          <li class="about-container__slide-content__social-links__link">
            <a href="https://dev.to/k_penguin_sato">Dev.to</a>
          </li>
          <li class="about-container__slide-content__social-links__link">
            <a href="https://zenn.dev/k_sato">Zenn</a>
          </li>
          <li class="about-container__slide-content__social-links__link">
            <a href="https://www.wantedly.com/id/k_sato_bb">Wantedly</a>
          </li>
        </ul>
      </div></SwiperSlide
    >
  </Swiper>
</div>

<style>
  .about-container__slide-content__title {
    margin-top: 2rem;
  }

  .about-container__slide-content__my-pic {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border: solid 1px var(--border-color);
    border-radius: 50%;
  }

  .about-container__slide-content__first-description {
    display: inline-block;
    margin: auto 0;
    margin-top: 2rem;
    width: 300px;
  }

  .about-container__slide-content__hobbies {
    list-style: none;
    margin-top: 2rem;
  }
  .about-container__slide-content__social-links {
    list-style: none;
    margin-top: 2rem;
  }
</style>
