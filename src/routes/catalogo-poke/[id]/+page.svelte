<script>
  import { onMount } from 'svelte';
  let { id } = $props(); // ID del Pokémon, que se pasará como prop

  let pokemon = null;
  let loading = true;
  let errorMessage = null;

  // Función para cargar los datos del Pokémon por su ID
  async function loadPokemon(id) {
    try {
      let url = new URL(`http://localhost:8000/api/pokemon/${id}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al cargar los datos del Pokémon: ${response.status}`);
      }
      pokemon = await response.json();
      loading = false;
    } catch (error) {
      errorMessage = error.message;
      loading = false;
    }
  }

  // Cargar los datos al montar el componente
  onMount(() => {
    loadPokemon(id); // Llamamos a la función con el ID actual
  });
</script>

<main class="main-content">
  <p style="color: red;">NOTA: En esta página se activará el endpoint BUSCAR POKEMON POD ID</p>
  {#if loading}
    <p>Cargando...</p>
  {:else if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {:else}
  <!-- Agrupación: imagen + datos pokédex + stats -->
  <section class="pokemon-top">
    <!-- Sección Header -->
    <section class="pokemon-header">
      <div class="pokemon-header-left">
        <h2 class="pokemon-title">{pokemon.name}</h2>
        <div class="pokemon-number">#{pokemon.id}</div>
        <div class="pokemon-types">
          <span class="type-badge type-planta">Planta</span>
          <span class="type-badge type-veneno">Veneno</span>
        </div>
      </div>
      <div class="pokemon-header-right">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
          class="pokemon-main-image"
        />
      </div>
    </section>

    <!-- Datos Pokedex -->
    <section class="info-section pokedex-box">
      <h3 class="section-title">Datos Pokédex</h3>
      <div class="pokedex-data">
        <div class="data-row">
          <span class="data-label">Especie:</span><span class="data-value"
            >Pokémon Semilla</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Altura:</span><span class="data-value"
            >0.7 m</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Peso:</span><span class="data-value"
            >6.9 kg</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Habilidades:</span><span class="data-value"
            >Espesura, Clorofila (oculta)</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Grupo Huevo:</span><span class="data-value"
            >Monstruo, Planta</span
          >
        </div>
        <div class="data-row">
          <span class="data-label">Género:</span><span class="data-value"
            >87.5% ♂ / 12.5% ♀</span
          >
        </div>
      </div>

      
    </section>

    <!-- Base Stats -->
    <section class="info-section stats-box">
      <h3 class="section-title">Estadísticas Base</h3>
      <div class="stats-container">
        <div class="stat-row">
          <span class="stat-name">PS</span><span class="stat-value">45</span>
        </div>
        <div class="stat-row">
          <span class="stat-name">Ataque</span><span class="stat-value">49</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Defensa</span><span class="stat-value"
            >49</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">At. Esp.</span><span class="stat-value"
            >65</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Def. Esp.</span><span class="stat-value"
            >65</span
          >
        </div>
        <div class="stat-row">
          <span class="stat-name">Velocidad</span><span class="stat-value"
            >45</span
          >
        </div>
        <div class="stat-row stat-total">
          <span class="stat-name">Total</span><span class="stat-value">318</span
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
        <div class="evolution-item">
          <img
            alt="Bulbasaur"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            class="evolution-image"
          />
          <span class="evolution-name">Bulbasaur</span>
        </div>
        <div class="evolution-arrow">→</div>
        <div class="evolution-item">
          <img
            alt="Ivysaur"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
            class="evolution-image"
          />
          <span class="evolution-name">Ivysaur</span>
        </div>
        <div class="evolution-arrow">→</div>
        <div class="evolution-item">
          <img
            alt="Venusaur"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
            class="evolution-image"
          />
          <span class="evolution-name">Venusaur</span>
        </div>
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
              <th>Nivel</th>
              <th>Movimiento</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Poder</th>
              <th>Precisión</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td
                ><a href="movimiento-detalle.html?id=33" class="move-link"
                  >Placaje</a
                ></td
              >
              <td><span class="type-badge type-normal">Normal</span></td>
              <td>Físico</td>
              <td>40</td>
              <td>100</td>
            </tr>
            <tr>
              <td>3</td>
              <td
                ><a href="movimiento-detalle.html?id=45" class="move-link"
                  >Gruñido</a
                ></td
              >
              <td><span class="type-badge type-normal">Normal</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>100</td>
            </tr>
            <tr>
              <td>7</td>
              <td
                ><a href="movimiento-detalle.html?id=71" class="move-link"
                  >Drenadoras</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Especial</td>
              <td>20</td>
              <td>100</td>
            </tr>
            <tr>
              <td>9</td>
              <td
                ><a href="movimiento-detalle.html?id=77" class="move-link"
                  >Látigo Cepa</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Físico</td>
              <td>45</td>
              <td>100</td>
            </tr>
            <tr>
              <td>13</td>
              <td
                ><a href="movimiento-detalle.html?id=22" class="move-link"
                  >Polvo Veneno</a
                ></td
              >
              <td><span class="type-badge type-veneno">Veneno</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>75</td>
            </tr>
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
              <th>MT/MO</th>
              <th>Movimiento</th>
              <th>Tipo</th>
              <th>Categoría</th>
              <th>Poder</th>
              <th>Precisión</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MT06</td>
              <td
                ><a href="movimiento-detalle.html?id=92" class="move-link"
                  >Tóxico</a
                ></td
              >
              <td><span class="type-badge type-veneno">Veneno</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>90</td>
            </tr>
            <tr>
              <td>MT10</td>
              <td
                ><a href="movimiento-detalle.html?id=91" class="move-link"
                  >Poder Oculto</a
                ></td
              >
              <td><span class="type-badge type-normal">Normal</span></td>
              <td>Especial</td>
              <td>60</td>
              <td>100</td>
            </tr>
            <tr>
              <td>MT11</td>
              <td
                ><a href="movimiento-detalle.html?id=241" class="move-link"
                  >Día Soleado</a
                ></td
              >
              <td><span class="type-badge type-fuego">Fuego</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>MT22</td>
              <td
                ><a href="movimiento-detalle.html?id=76" class="move-link"
                  >Rayo Solar</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Especial</td>
              <td>120</td>
              <td>100</td>
            </tr>
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
            <tr>
              <td
                ><a href="movimiento-detalle.html?id=14" class="move-link"
                  >Malicioso</a
                ></td
              >
              <td><span class="type-badge type-normal">Normal</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>100</td>
            </tr>
            <tr>
              <td
                ><a href="movimiento-detalle.html?id=79" class="move-link"
                  >Megaagotar</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Especial</td>
              <td>40</td>
              <td>100</td>
            </tr>
            <tr>
              <td
                ><a href="movimiento-detalle.html?id=235" class="move-link"
                  >Síntesis</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Estado</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td
                ><a href="movimiento-detalle.html?id=388" class="move-link"
                  >Bomba Germen</a
                ></td
              >
              <td><span class="type-badge type-planta">Planta</span></td>
              <td>Físico</td>
              <td>80</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
{/if}
</main>

<style>
  @import '$lib/assets/css/pokemon.css';
</style>