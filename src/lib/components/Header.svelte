<nav class="header">
  <a href="/" class="header__title">K-Sato</a>
  <ul class="header__links">
    <li class="header__links_item">
      <a href="/" class="header__links__item__link">Home</a>
    </li>
    <li class="header__links_item">
      <a href="/about" class="header__links__item__link">About</a>
    </li>
    <li class="header__links_item">
      <a href="/creations" class="header__links__item__link">Projects</a>
    </li>
  </ul>
</nav>

<style>
  .header {
    border: solid 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .header__title {
    color: var(--main-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
  }

  .header__links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header__links_item {
    margin-left: 1rem;
  }

  .header__links__item__link {
    padding-bottom: 1rem;
    color: var(--secondary--color);
    text-decoration: none;
  }

  .header__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary--color);
  }
</style>
