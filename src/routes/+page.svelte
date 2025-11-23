<main class="main-content">
    <!-- Sección Hero -->
    <section class="hero">
        <h2 class="hero-title">Bienvenido a IntroDex</h2>
        <p class="hero-description">
            Descubre el mundo completo de Pokémon en un solo lugar. Explora cientos de especies, 
            aprende sobre sus movimientos y crea equipos competitivos para tus batallas.
        </p>
        <p class="hero-features">
            Aquí podrás consultar estadísticas detalladas, tipos, habilidades y evoluciones. 
            ¡Todo lo que necesitas para convertirte en un maestro Pokémon!
        </p>
        <p style="color: red;">NOTA: En este HTML se mostrarán los links a los 3 catálogos principales. Aquí no se utilizan endpoints.</p>
    </section>

    <!-- Sección Cards -->
    <section class="cards-container">
        <article class="card">
            <div class="card-icon">⚡️</div>
            <h3 class="card-title">Catálogo de Pokémon</h3>
            <p class="card-description">
                Explora la lista completa de Pokémon con sus estadísticas, tipos, habilidades y evoluciones.
            </p>
            <a href="/catalogo-poke" class="card-button">Ver Pokémon</a>
        </article>

        <article class="card">
            <div class="card-icon">💥</div>
            <h3 class="card-title">Catálogo de Movimientos</h3>
            <p class="card-description">
                Consulta todos los movimientos disponibles, sus efectos, poder y precisión para planear estrategias.
            </p>
            <a href="/catalogo-mov" class="card-button">Ver Movimientos</a>
        </article>

        <article class="card">
            <div class="card-icon">👥</div>
            <h3 class="card-title">Tabla de Equipos</h3>
            <p class="card-description">
                Observa todos los equipos Pokémon creados. Puedes unirte a uno a elección, o crea el tuyo propio.
            </p>
            <a href="tabla-eq" class="card-button">Ver Equipos</a>
        </article>
    </section>
</main>

<style>
    @import '$lib/assets/css/index.css';
</style>