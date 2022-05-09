<script>
  import { themeObj } from '$lib/stores'
  import { afterUpdate } from 'svelte'

  afterUpdate(() => {
    // Directory access to doms: not sure if this is ok
    const root = document.querySelector(':root')
    root.style.setProperty('--main-color', $themeObj.mainColor)
    root.style.setProperty('--background-color', $themeObj.backgroundColor)
  })
</script>

<footer class="footer">
  <ul class="footer__links">
    <li class="footer__links_item">
      <a href="/about" class="footer__links__item__link">About</a>
    </li>
    <li class="footer__links_item">
      <a href="/rss.xml" class="footer__links__item__link">RSS</a>
    </li>
    <li class="footer__links_item">
      <span class="footer__copy-right">© 2021 K-Sato</span>
    </li>
    <li class="footer__links_item">
      {#if $themeObj.type === 'DARK'}
        <i class="gg-sun" on:click={themeObj.toLight} />
      {:else}
        <i class="gg-moon" on:click={themeObj.toDark} />
      {/if}
    </li>
  </ul>
</footer>

<style>
  .footer {
    height: 6rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .footer__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  .footer__links_item {
    margin-left: 1rem;
  }

  .footer__links_item:last-child {
    margin-right: 1rem;
  }

  .footer__links__item__link {
    padding-bottom: 0.2rem;
    color: var(--secondary-color);
    text-decoration: none;
  }

  .footer__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary-color);
  }

  .footer__copy-right {
    color: var(--secondary-color);
  }

  /* ICON */
  .gg-sun {
    color: var(--secondary-color);
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, currentColor 4px, transparent 0)
        no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px
        14px/2px 6px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px
        5px/6px 2px,
      linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px
        5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent;
  }
  .gg-sun::after,
  .gg-sun::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px;
  }
  .gg-sun::before {
    transform: rotate(-45deg);
  }
  .gg-sun::after {
    transform: rotate(45deg);
  }
  .gg-moon,
  .gg-moon::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .gg-moon {
    color: var(--secondary-color);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  .gg-moon::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px;
  }
</style>
