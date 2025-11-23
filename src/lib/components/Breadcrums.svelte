<script>
  import { derived } from "svelte/store";
  import { page } from "$app/stores";

  // Crear una tienda derivada para obtener las partes de la URL
  const breadcrumbs = derived(page, ($page) => {
    // Obtener la URL actual
    const path = $page.url.pathname;

    // Eliminar la barra inicial y dividir la ruta en segmentos
    const segments = path.split("/").filter(Boolean);

    // Generar las migas de pan a partir de los segmentos
    return segments.map((segment, index) => {
      const url = "/" + segments.slice(0, index + 1).join("/");
      return { segment, url };
    });
  });
</script>

<div class="breadcrumbs">
  {#if $breadcrumbs.length > 0}
    <nav aria-label="Breadcrumbs">
      <ol>
        <li><a href="/">Inicio</a></li>
        {#each $breadcrumbs as { segment, url }, index (url)}
          {#if index !== $breadcrumbs.length - 1}
            <li><a href={url}>{segment}</a></li>
          {:else}
            <li>{segment}</li>
          {/if}
        {/each}
      </ol>
    </nav>
  {/if}
</div>

<style>
  /* Contenedor principal */
  .breadcrumbs {
    padding: 1rem;
  }

  /* Lista de breadcrumbs */
  .breadcrumbs nav ol {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.875rem;
    padding: 0;
    margin: 0;
  }

  /* Cada ítem */
  .breadcrumbs nav li {
    display: inline;
  }

  /* Links */
  .breadcrumbs nav a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .breadcrumbs nav a:hover {
    color: #a00821;
    text-decoration: underline;
  }

  /* Separador (usando ::before para insertar " / ") */
  .breadcrumbs nav li + li::before {
    content: "/";
    padding: 0.25rem;
    color: #999;
  }

  /* Último ítem (actual) */
  .breadcrumbs nav li:last-child {
    color: #666;
    font-weight: 500;
  }

  .breadcrumbs nav li:last-child a {
    pointer-events: none;
    color: #666;
    font-weight: 500;
    text-decoration: none;
  }
</style>
