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

        <!-- Move Card 1 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#033</div>
                    <span class="category-badge category-fisico">Físico</span>
                </div>
                <h3 class="move-name">Placaje</h3>
                <div class="move-type">
                    <span class="type-badge type-normal">Normal</span>
                </div>
                <p class="move-description">Un ataque físico básico que golpea al objetivo con todo el cuerpo.</p>
            </a>
        </article>

        <!-- Move Card 2 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#052</div>
                    <span class="category-badge category-especial">Especial</span>
                </div>
                <h3 class="move-name">Lanzallamas</h3>
                <div class="move-type">
                    <span class="type-badge type-fuego">Fuego</span>
                </div>
                <p class="move-description">Lanza un potente chorro de fuego que puede quemar al objetivo.</p>
            </a>
        </article>

        <!-- Move Card 3 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#056</div>
                    <span class="category-badge category-especial">Especial</span>
                </div>
                <h3 class="move-name">Hidrobomba</h3>
                <div class="move-type">
                    <span class="type-badge type-agua">Agua</span>
                </div>
                <p class="move-description">Dispara una gran cantidad de agua a gran presión contra el objetivo.</p>
            </a>
        </article>

        <!-- Move Card 4 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#076</div>
                    <span class="category-badge category-especial">Especial</span>
                </div>
                <h3 class="move-name">Rayo Solar</h3>
                <div class="move-type">
                    <span class="type-badge type-planta">Planta</span>
                </div>
                <p class="move-description">Absorbe luz el primer turno y ataca en el segundo con un poderoso rayo.</p>
            </a>
        </article>

        <!-- Move Card 5 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#085</div>
                    <span class="category-badge category-especial">Especial</span>
                </div>
                <h3 class="move-name">Trueno</h3>
                <div class="move-type">
                    <span class="type-badge type-electrico">Eléctrico</span>
                </div>
                <p class="move-description">Una poderosa descarga eléctrica que puede paralizar al objetivo.</p>
            </a>
        </article>

        <!-- Move Card 6 -->
        <article class="move-card">
            <a href="" class="move-link">
                <div class="move-header">
                    <div class="move-id">#094</div>
                    <span class="category-badge category-especial">Especial</span>
                </div>
                <h3 class="move-name">Psíquico</h3>
                <div class="move-type">
                    <span class="type-badge type-psiquico">Psíquico</span>
                </div>
                <p class="move-description">Ataca con una fuerte onda mental que puede bajar la defensa especial.</p>
            </a>
        </article>
    </section>

    <!-- Paginación: Utilizamos data.page que es el nombre devuelto por load -->
  <Pagination
    currentPage={data.page}
    hasMore={data.hasMore}
  />
</main>

<style>
    @import '$lib/assets/css/catalogo-mov.css';
</style>
