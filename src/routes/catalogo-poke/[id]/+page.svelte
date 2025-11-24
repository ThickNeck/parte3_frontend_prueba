<script>
  let { data } = $props();
  let pokemon = data.pokemon;
  let stat = pokemon.estadisticas;
  let sumaStat = 0;
  for (let estadistica in stat) {
    sumaStat+=stat[estadistica]
  }
  
</script>

<main class="main-content">
  <p style="color: red;">NOTA: En esta página se activará el endpoint BUSCAR POKEMON POD ID</p>
  <!-- Agrupación: imagen + datos pokédex + stats -->
  <section class="pokemon-top">
    <!-- Sección Header -->
    <section class="pokemon-header">
      <div class="pokemon-header-left">
        <h2 class="pokemon-title">{pokemon.name}</h2>
        <div class="pokemon-number">#{pokemon.id}</div>
        <div class="pokemon-types">
          {#each pokemon.tipos as tipo}
            <span class="type-badge type-{tipo.nombre}">{tipo.nombre}</span>
          {/each}
        </div>
      </div>
      <div class="pokemon-header-right">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{pokemon.id}.png"
          alt="{pokemon.nombre}"
          class="pokemon-main-image"
        />
      </div>
    </section>

    <!-- Datos Pokedex -->
    <section class="info-section pokedex-box">
      <h3 class="section-title">Datos Pokédex</h3>
      <div class="pokedex-data">
        <div class="data-row">
          <span class="data-label">Altura:</span><span class="data-value"
            >{pokemon.altura} m</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Peso:</span><span class="data-value"
            >{pokemon.peso} kg</span
          >
        </div>
      </div>
    </section>

    <!-- Base Stats -->
    <section class="info-section stats-box">
      <h3 class="section-title">Estadísticas Base</h3>
      <div class="stats-container">
        <div class="stat-row">
          <span class="stat-name">PS</span><span class="stat-value">{stat.puntos_de_golpe}</span>
        </div>
        <div class="stat-row">
          <span class="stat-name">Ataque</span><span class="stat-value">{stat.ataque}</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Defensa</span><span class="stat-value"
            >{stat.defensa}</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">At. Esp.</span><span class="stat-value"
            >{stat.ataque_especial}</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Def. Esp.</span><span class="stat-value"
            >{stat.defensa_especial}</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Velocidad</span><span class="stat-value"
            >{stat.velocidad}</span
          >
        </div>
        <div class="stat-row stat-total">
          <span class="stat-name">Total</span><span class="stat-value">{sumaStat}</span
          >
        </div>
      </div>
    </section>
  </section>
  <!-- cierre pokemon-top -->

  <!-- Agrupación: Evoluciones -->
  <section class="stats-evolution-wrapper">
    <!-- Cadena Evolutiva -->
    <div class="info-section evolution-box">
      <h3 class="section-title">Cadena Evolutiva</h3>
      <div class="evolution-chain">
        {#each pokemon.evoluciones as evolucion}
          <div class="evolution-item">
            <div class="evolution-arrow">→</div>
            <img
              alt="{evolucion.nombre}"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{evolucion.id}.png"
              class="evolution-image"
            />
            <span class="evolution-name">{evolucion.nombre}</span>
          </div>          
        {/each}

      </div>
    </div>
  </section>
  <!-- cierre stats-evolution-wrapper -->

  <!-- Sección movimientos por método -->
  <section class="info-section">
    <h3 class="section-title">Movimientos</h3>

    <!-- Movimientos por nivel -->
    <div class="moves-category">
      <h4 class="moves-subtitle">Por Nivel</h4>
      <div class="moves-table-container">
        <table class="moves-table">
          <thead>
            <tr>
              <th>Movimiento</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Poder</th>
              <th>Precisión</th>
            </tr>
          </thead>
          <tbody>
            {#each pokemon.movimientos_nivel as mov_niv}
              <tr>
                <td
                  ><a href="/catalogo-mov/{mov_niv.id}" class="move-link"
                    >{mov_niv.nombre}</a
                  ></td
                >
                <td><span class="type-badge type-{mov_niv.tipo.nombre}">{mov_niv.tipo.nombre}</span></td>
                <td>{mov_niv.categoria}</td>
                <td>{mov_niv.potencia}</td>
                <td>{mov_niv.precision}</td>
              </tr>              
            {/each}

          </tbody>
        </table>
      </div>
    </div>

    <!-- Movimientos por máquina -->
    <div class="moves-category">
      <h4 class="moves-subtitle">Por Máquina (MT/MO)</h4>
      <div class="moves-table-container">
        <table class="moves-table">
          <thead>
            <tr>
              <th>Movimiento</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Poder</th>
              <th>Precisión</th>
            </tr>
          </thead>
          <tbody>
            {#each pokemon.movimientos_maquina as mov_maq}
              <tr>
                <td
                  ><a href="/catalogo-mov/{mov_maq.id}" class="move-link"
                    >{mov_maq.nombre}</a
                  ></td
                >
                <td><span class="type-badge type-{mov_maq.tipo.nombre}">{mov_maq.tipo.nombre}</span></td>
                <td>{mov_maq.categoria}</td>
                <td>{mov_maq.potencia}</td>
                <td>{mov_maq.precision}</td>
              </tr>              
            {/each}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Movimientos por huevo -->
    <div class="moves-category">
      <h4 class="moves-subtitle">Por Huevo</h4>
      <div class="moves-table-container">
        <table class="moves-table">
          <thead>
            <tr>
              <th>Movimiento</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Poder</th>
              <th>Precisión</th>
            </tr>
          </thead>
          <tbody>
            {#each pokemon.movimientos_huevo as mov_egg}
              <tr>
                <td
                  ><a href="/catalogo-mov/{mov_egg.id}" class="move-link"
                    >{mov_egg.nombre}</a
                  ></td
                >
                <td><span class="type-badge type-{mov_egg.tipo.nombre}">{mov_egg.tipo.nombre}</span></td>
                <td>{mov_egg.categoria}</td>
                <td>{mov_egg.potencia}</td>
                <td>{mov_egg.precision}</td>
              </tr>              
            {/each}

          </tbody>
        </table>
      </div>
    </div>
  </section>
</main>

<style>
  @import '$lib/assets/css/pokemon.css';
</style>
