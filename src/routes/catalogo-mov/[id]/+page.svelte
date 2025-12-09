<script>
  let { data } = $props();
  let movimiento = data.movimiento;
  
</script>
<main class="main-content">

  <!-- Header Movimiento -->
  <section class="move-header">
    <div class="move-header-content">
      <div class="move-id-badge">#{movimiento.id}</div>
      <h2 class="move-title">{movimiento.nombre}</h2>
      <div class="move-badges">
        <span class="type-badge type-fuego">{movimiento.tipo.nombre}</span>
        <span class="category-badge category-especial">{movimiento.categoria}</span>
      </div>
      <p style="color: red;">NOTA: En esta página se activará BUSCAR MOVIMIENTO POR ID</p>
    </div>
  </section>

  <!-- Stats Movimiento -->
  <section class="info-section">
    <h3 class="section-title">Características</h3>
    <div class="move-stats-grid">
      <div class="stat-item">
        <span class="stat-label">Potencia</span>
        <span class="stat-value stat-power">{movimiento.potencia}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Precisión</span>
        <span class="stat-value stat-accuracy">{movimiento.precision}%</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">PP</span>
        <span class="stat-value stat-pp">{movimiento.usos}</span>
      </div>
    </div>
  </section>

  <!-- Descripción Movimiento -->
  <section class="info-section">
    <h3 class="section-title">Descripción</h3>
    <div class="move-description">
      <p class="move-description">{movimiento.efecto}</p>
    </div>
  </section>

  <!-- Pokémon que pueden aprenderlo -->
  <section class="info-section">
    <h3 class="section-title">Pokémon que pueden aprender este movimiento</h3>

    <!-- Por nivel -->
    <div class="pokemon-learn-category">
      <h4 class="learn-subtitle">Por Nivel</h4>
      <div class="pokemon-learn-grid">
        {#each movimiento.pokemon_por_nivel as pokemon}
          <article class="pokemon-learn-card">
            <a href="/catalogo-poke/{pokemon.id}"class="pokemon-link">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon.id}.png"
                alt="Charmander"
                class="pokemon-learn-image"
              />
              <div class="pokemon-learn-info">
                <span class="pokemon-learn-number">#{pokemon.id}</span>
                <span class="pokemon-learn-name">{pokemon.nombre}</span>
              </div>
            </a>
          </article>
        {/each}
      </div>
    </div>

    <!-- Por máquina -->
    <div class="pokemon-learn-category">
      <h4 class="learn-subtitle">Por Máquina</h4>
      <div class="pokemon-learn-grid">
        {#each movimiento.pokemon_por_maquina as pokemon}
          <article class="pokemon-learn-card">
            <a href="/catalogo-poke/{pokemon.id}"class="pokemon-link">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon.id}.png"
                alt="Charmander"
                class="pokemon-learn-image"
              />
              <div class="pokemon-learn-info">
                <span class="pokemon-learn-number">#{pokemon.id}</span>
                <span class="pokemon-learn-name">{pokemon.nombre}</span>
              </div>
            </a>
          </article>
        {/each}
      </div>
    </div>

    <!-- Por huevo -->
    <div class="pokemon-learn-category">
      <h4 class="learn-subtitle">Por Huevo</h4>
      <div class="pokemon-learn-grid">
        {#each movimiento.pokemon_por_huevo as pokemon}
          <article class="pokemon-learn-card">
            <a href="/catalogo-poke/{pokemon.id}"class="pokemon-link">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon.id}.png"
                alt="Charmander"
                class="pokemon-learn-image"
              />
              <div class="pokemon-learn-info">
                <span class="pokemon-learn-number">#{pokemon.id}</span>
                <span class="pokemon-learn-name">{pokemon.nombre}</span>
              </div>
            </a>
          </article>
        {/each}

      </div>
    </div>
  </section>
</main>

<style>
    /*@import '$lib/assets/css/movimiento.css';*/
</style>
