<script>
  import Search from "$lib/components/Search.svelte";
  import { query } from "$app/server";
  let { data } = $props();
  import Pagination from "$lib/components/Pagination2.svelte";
</script>

<main class="main-content">
  <!-- Sección Header -->
  <section class="page-header">
    <h2 class="page-title">Catálogo de Pokémon</h2>
    <p class="page-subtitle">
      Explora todos los Pokémon disponibles y descubre sus características
    </p>
    <p style="color: red;">
      NOTA: En esta página se activarán ciertos endpoints según las barras de
      búsqueda.
    </p>
    <br />
    <p style="color: red;">
      Si la barra está vacía, se activa LISTAR TODOS LOS POKÉMON.
    </p>
    <br />
    <p style="color: red;">
      Si la barra está escrita y/o hay un elemento de tipo seleccionado, se
      activa FILTRAR POKÉMON.
    </p>
  </section>

  <!-- Sección de filtros -->
  <section class="filters-section">
    <div class="search-container">
      <Search query= {data.query} placeholder="Buscar por nombre parcial"/>
    </div>

    <div class="filter-container">
      <label for="type-filter" class="filter-label">Filtrar por tipo:</label>
      <select id="type-filter" class="filter-select">
        <option value="">Todos los tipos</option>
        <option value="normal">Normal</option>
        <option value="fuego">Fuego</option>
        <option value="agua">Agua</option>
        <option value="planta">Planta</option>
        <option value="electrico">Eléctrico</option>
        <option value="hielo">Hielo</option>
        <option value="lucha">Lucha</option>
        <option value="veneno">Veneno</option>
        <option value="tierra">Tierra</option>
        <option value="volador">Volador</option>
        <option value="psiquico">Psíquico</option>
        <option value="bicho">Bicho</option>
        <option value="roca">Roca</option>
        <option value="fantasma">Fantasma</option>
        <option value="dragon">Dragón</option>
        <option value="siniestro">Siniestro</option>
        <option value="acero">Acero</option>
        <option value="hada">Hada</option>
      </select>
    </div>
  </section>

  <!-- Grid de Pokémon -->
  <section class="pokemon-grid">
    <!-- Por cada pokémon cargado, se inyectará una nueva Card -->
    {#each data.pokemones as pokemon}
      <article class="pokemon-card">
        <a href={`/catalogo-poke/${pokemon.id}`} class="pokemon-link">
          <div class="pokemon-header">
            <div class="pokemon-id">#{pokemon.id}</div>
          </div>
          <div class="pokemon-image-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon.id}.png"
              alt={pokemon.nombre}
              class="pokemon-image"
            />
          </div>
          <h3 class="pokemon-name">{pokemon.nombre}</h3>
          <div class="pokemon-types">
            {#each pokemon.tipos as tipo}
              <span class="type-badge type-{tipo.nombre}">{tipo.nombre}</span>
            {/each}
          </div>
        </a>
      </article>
    {/each}
  </section>

  <!-- Paginación: Utilizamos data.page que es el nombre devuelto por load -->
  <Pagination
    currentPage={data.page}
    hasMore={data.hasMore}
  />
</main>

<style>
  /*@import "$lib/assets/css/catalogo-poke.css";*/
</style>
