<script>
  let { data } = $props();
  import Pagination from "$lib/components/Pagination2.svelte";
</script>

<main class="main-content">

    <!-- Sección Header -->
    <section class="page-header">
        <h2 class="page-title">Catálogo de Movimientos</h2>
        <p class="page-subtitle">Descubre todos los movimientos y sus efectos en batalla</p>
        <p style="color: red;">NOTA: En esta página se activarán ciertos endpoints según las barras de búsqueda.</p>
        <br>
        <p style="color: red;">Si la barra está vacía, se activa LISTAR TODOS LOS MOVIMIENTOS.</p><br>
        <p style="color: red;">Si la barra está escrita y/o hay un elemento de tipo seleccionado, se activa FILTRAR
            POKÉMON.</p>
    </section>

    <!-- Sección Filtrado -->
    <section class="filters-section">
        <div class="search-container">
            <input 
                type="text" 
                class="search-input" 
                placeholder="Buscar por nombre o ID..."
                aria-label="Buscar Movimientos"
            >
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

    <!-- Lista MOvimientos -->
    <section class="moves-list">
        <!-- Por cada movimiento cargado, se inyectará una card -->

        {#each data.movimientos as movimiento}
            <article class="move-card">
                <a href="catalogo-mov/{movimiento.id}" class="move-link">
                    <div class="move-header">
                        <div class="move-id">#{movimiento.id}</div>
                        <span class="category-badge category-{movimiento.categoria}">{movimiento.categoria}</span>
                    </div>
                    <h3 class="move-name">{movimiento.nombre}</h3>
                    <div class="move-type">
                        {#if movimiento.tipo}
                            <span class="type-badge type-{movimiento.tipo.nombre}">{movimiento.tipo.nombre}</span>
                        {/if}
                    </div>
                    <p class="move-description">{movimiento.efecto}</p>
                </a>
            </article>            
        {/each}


    </section>

    <!-- Paginación -->
    <Pagination
    currentPage={data.page}
    hasMore={data.hasMore}
    />
</main>

<style>
    @import '$lib/assets/css/catalogo-mov.css';
</style>
