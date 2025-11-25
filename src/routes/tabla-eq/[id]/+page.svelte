<script>
  let showAddForm = false;

  function toggleFormularioAgregar() {
    showAddForm = !showAddForm;
  }
</script>

<main class="main-content">
  <!-- Header Equipo -->
  <section class="team-header">
    <div class="team-id-badge">#001</div>
    <h2 class="team-title">Equipo Fuego</h2>
    <p class="team-members-count">6 Integrantes</p>
    <p style="color: red;">
      NOTA: En esta página se activrá el endpoint BUSCAR EQUIPO POR ID.
    </p>
    <p style="color: red;">
      Si la cant. de integrantes es menor a 6, se podrá activar AGREGAR
      INTEGRANTE.
    </p>
    <p style="color: red;">
      Por cada integrante se podrá activar EDITAR INTEGRANTE y ELIMINAR
      INTEGRANTE.
    </p>
    <!-- BOTÓN AGREGAR INTEGRANTE (solo si < 6) -->
    <button class="btn-primary" on:click={toggleFormularioAgregar}>
      Agregar integrante
    </button>
  </section>
<!-- FORMULARIO MODAL PARA AGREGAR INTEGRANTE -->
  {#if showAddForm}
  <div class="modal-overlay" on:click={toggleFormularioAgregar}></div>

  <div class="modal">
    <h3>Agregar integrante</h3>

    <form class="add-member-form">
      <label>
        Apodo:
        <input type="text" />
      </label>

      <label>
        ID Pokémon:
        <input type="number" />
      </label>
            <!-- BOTÓN SUBMIT REAL -->
      <button type="submit" class="btn-submit">
        Agregar
      </button>
    </form>
  </div>
  {/if}
  <!-- Sección Integrantes -->
  <section class="team-members-section">
    <!-- Por cada integrante cargado, se inyecta un nuevo artículo -->

    <!-- Member 1 -->
    <article class="team-member">
      <div class="member-header">
        <span class="member-id">#1</span>
        <h3 class="member-nickname">Flamita</h3>
        <button class="btn-delete-member">Eliminar integrante</button>
      </div>

      <div class="member-content">
        <!-- Pokemon Card -->
        <div class="pokemon-card">
          <a href="pokemon-detalle.html?id=6" class="pokemon-card-link">
            <div class="pokemon-card-header">
              <span class="pokemon-card-id">#006</span>
              <h4 class="pokemon-card-name">Charizard</h4>
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
              alt="Charizard"
              class="pokemon-card-image"
            />
            <div class="pokemon-card-types">
              <span class="type-badge type-fuego">Fuego</span>
              <span class="type-badge type-volador">Volador</span>
            </div>
            <div class="pokemon-card-stats">
              <div class="stat-mini">
                <span class="stat-mini-label">PS</span>
                <span class="stat-mini-value">78</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Atk</span>
                <span class="stat-mini-value">84</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Def</span>
                <span class="stat-mini-value">78</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpA</span>
                <span class="stat-mini-value">109</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpD</span>
                <span class="stat-mini-value">85</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Spe</span>
                <span class="stat-mini-value">100</span>
              </div>
            </div>
          </a>
        </div>

        <!-- Moves List -->
        <div class="moves-list">
          <h4 class="moves-list-title">Movimientos</h4>
          <ul class="moves-items">
            <li class="move-item">
              <a href="movimiento-detalle.html?id=52" class="move-item-link">
                <span class="move-item-name">Lanzallamas</span>
                <span class="type-badge type-fuego">Fuego</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=19" class="move-item-link">
                <span class="move-item-name">Vuelo</span>
                <span class="type-badge type-volador">Volador</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=163" class="move-item-link">
                <span class="move-item-name">Garra Dragón</span>
                <span class="type-badge type-dragon">Dragón</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=89" class="move-item-link">
                <span class="move-item-name">Terremoto</span>
                <span class="type-badge type-tierra">Tierra</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!-- Member 2 -->
    <article class="team-member">
      <div class="member-header">
        <span class="member-id">#2</span>
        <h3 class="member-nickname">Rápido</h3>
        <button class="btn-delete-member">Eliminar integrante</button>
      </div>

      <div class="member-content">
        <!-- Pokemon Card -->
        <div class="pokemon-card">
          <a href="pokemon-detalle.html?id=38" class="pokemon-card-link">
            <div class="pokemon-card-header">
              <span class="pokemon-card-id">#038</span>
              <h4 class="pokemon-card-name">Ninetales</h4>
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
              alt="Ninetales"
              class="pokemon-card-image"
            />
            <div class="pokemon-card-types">
              <span class="type-badge type-fuego">Fuego</span>
            </div>
            <div class="pokemon-card-stats">
              <div class="stat-mini">
                <span class="stat-mini-label">PS</span>
                <span class="stat-mini-value">73</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Atk</span>
                <span class="stat-mini-value">76</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Def</span>
                <span class="stat-mini-value">75</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpA</span>
                <span class="stat-mini-value">81</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpD</span>
                <span class="stat-mini-value">100</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Spe</span>
                <span class="stat-mini-value">100</span>
              </div>
            </div>
          </a>
        </div>

        <!-- Moves List -->
        <div class="moves-list">
          <h4 class="moves-list-title">Movimientos</h4>
          <ul class="moves-items">
            <li class="move-item">
              <a href="movimiento-detalle.html?id=126" class="move-item-link">
                <span class="move-item-name">Fuego Fatuo</span>
                <span class="type-badge type-fuego">Fuego</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=94" class="move-item-link">
                <span class="move-item-name">Psíquico</span>
                <span class="type-badge type-psiquico">Psíquico</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=76" class="move-item-link">
                <span class="move-item-name">Rayo Solar</span>
                <span class="type-badge type-planta">Planta</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=241" class="move-item-link">
                <span class="move-item-name">Día Soleado</span>
                <span class="type-badge type-fuego">Fuego</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!-- Member 3 -->
    <article class="team-member">
      <div class="member-header">
        <span class="member-id">#3</span>
        <h3 class="member-nickname">Guardián</h3>
        <button class="btn-delete-member">Eliminar integrante</button>
      </div>

      <div class="member-content">
        <!-- Pokemon Card -->
        <div class="pokemon-card">
          <a href="pokemon-detalle.html?id=59" class="pokemon-card-link">
            <div class="pokemon-card-header">
              <span class="pokemon-card-id">#059</span>
              <h4 class="pokemon-card-name">Arcanine</h4>
            </div>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
              alt="Arcanine"
              class="pokemon-card-image"
            />
            <div class="pokemon-card-types">
              <span class="type-badge type-fuego">Fuego</span>
            </div>
            <div class="pokemon-card-stats">
              <div class="stat-mini">
                <span class="stat-mini-label">PS</span>
                <span class="stat-mini-value">90</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Atk</span>
                <span class="stat-mini-value">110</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Def</span>
                <span class="stat-mini-value">80</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpA</span>
                <span class="stat-mini-value">100</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">SpD</span>
                <span class="stat-mini-value">80</span>
              </div>
              <div class="stat-mini">
                <span class="stat-mini-label">Spe</span>
                <span class="stat-mini-value">95</span>
              </div>
            </div>
          </a>
        </div>

        <!-- Moves List -->
        <div class="moves-list">
          <h4 class="moves-list-title">Movimientos</h4>
          <ul class="moves-items">
            <li class="move-item">
              <a href="movimiento-detalle.html?id=394" class="move-item-link">
                <span class="move-item-name">Envite Ígneo</span>
                <span class="type-badge type-fuego">Fuego</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=98" class="move-item-link">
                <span class="move-item-name">Velocidad Extrema</span>
                <span class="type-badge type-normal">Normal</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=242" class="move-item-link">
                <span class="move-item-name">Triturar</span>
                <span class="type-badge type-siniestro">Siniestro</span>
              </a>
            </li>
            <li class="move-item">
              <a href="movimiento-detalle.html?id=86" class="move-item-link">
                <span class="move-item-name">Rayo</span>
                <span class="type-badge type-electrico">Eléctrico</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</main>

<style>
  @import "$lib/assets/css/equipo";
</style>
