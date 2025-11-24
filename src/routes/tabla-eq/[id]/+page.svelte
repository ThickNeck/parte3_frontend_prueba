<script>

  let { data } = $props();
  let equipo = data.equipo;

</script>
<main class="main-content">
  <!-- Header Equipo -->
  <section class="team-header">
    <div class="team-id-badge">#{equipo.id}</div>
    <h2 class="team-title">{equipo.nombre}</h2>
    <p class="team-members-count">{equipo.integrantes.length} Integrantes</p>
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
  </section>

  <!-- Sección Integrantes -->
  <section class="team-members-section">
    <!-- Por cada integrante cargado, se inyecta un nuevo artículo -->
     
    {#each equipo.integrantes as inte}
      <!-- Member 1 -->
      <article class="team-member">
        <div class="member-header">
          <span class="member-id">#{inte.id}</span>
          <h3 class="member-nickname">{inte.pokemon.nombre}</h3>
          <form method="POST" action="?/desinscribir">
              <input type="hidden" name="padron" value={equipo.id} />
              <input type="hidden" name="id" value={inte.id} />
              <button 
                class="btn-delete-member" 
                on:click="{() => eliminarIntegrante(equipo.id, inte.pokemon.id)}" 
                >Eliminar integrante
              </button>
          </form>
        </div>

        <div class="member-content">
          <!-- Pokemon Card -->
          <div class="pokemon-card">
            <a href={`/catalogo-poke/${inte.pokemon.id}`} class="pokemon-card-link">
              <div class="pokemon-card-header">
                <span class="pokemon-card-id">#{inte.pokemon.id}</span>
                <h4 class="pokemon-card-name">{inte.apodo}</h4>
              </div>
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{inte.pokemon.id}.png"
                alt="Charizard"
                class="pokemon-card-image"
              />
              <div class="pokemon-card-types">
                {#each inte.pokemon.tipos as tipo}
                  <span class="type-badge type-fuego">{tipo.nombre}</span>
                {/each}
              </div>
            </a>
          </div>

          <!-- Moves List -->
          <div class="moves-list">
            <h4 class="moves-list-title">Movimientos</h4>
            {#if inte.movimientos && inte.movimientos.length > 0}
              <ul class="moves-items">
                {#each inte.movimientos as movimiento}
                  <li class="move-item">
                    <a href={`/catalogo-mov/${movimiento.id}`} class="move-item-link">
                      <span class="move-item-name">{movimiento.nombre}</span>
                      <span class="type-badge type-fuego">{movimiento.tipo.nombre}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </section>
</main>

<style>
  @import "$lib/assets/css/equipo";
</style>
