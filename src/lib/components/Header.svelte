<header class="header">
  <a href="/" class="header-link">
    <h1 class="header-title">IntroDex</h1>
  </a>
  <p class="header-subtitle">Tu Enciclopedia Pokémon Definitiva</p>
</header>

<style>
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(135deg, var(--color-primary) 0%, #a00821 100%);
    padding: 2rem 1rem;
    text-align: center;
    box-shadow: 0 0.25rem 0.5rem var(--color-shadow);
    color: var(--color-white);
  }

  .header-link {
    text-decoration: none;
    color: var(--color-white);
  }

  .header-title {
    margin: 0 1.5rem;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  }

  .header-subtitle {
    margin: 0 1.5rem;
    font-size: 1.125rem;
    opacity: 0.95;
  }

  @media (max-width: 48rem) {
    .header {
      padding: 1rem 1rem;
    }

    .header-title {
        font-size: 2.5rem;
    }
  }
  @media (max-width: 30rem) {
    .header {
      padding: 1rem 1rem;
    }
    .header-title {
        font-size: 2rem;
    }
  }
</style>
