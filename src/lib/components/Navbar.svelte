<nav class="navbar">
  <ul class="nav-list">
    <li class="nav-item"><a href="/catalogo-poke" class="nav-link">Pokémon</a></li>
    <li class="nav-item"><a href="/catalogo-mov" class="nav-link">Movimientos</a></li>
    <li class="nav-item"><a href="/tabla-eq" class="nav-link">Equipos</a></li>
  </ul>
</nav>

<style>
  .navbar {
    background-color: var(--color-dark);
    padding: 0;
    box-shadow: 0 0.125rem 0.25rem var(--color-shadow);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-list {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 75rem;
    margin: 0 auto;
  }

  .nav-item {
    flex: 1;
    min-width: 8rem;
  }

  .nav-link {
    display: block;
    padding: 1rem 1.5rem;
    text-decoration: none;
    color: var(--color-white);
    text-align: center;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .nav-link:hover {
    background-color: var(--color-primary);
  }
</style>
