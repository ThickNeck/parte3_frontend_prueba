<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    // Propiedades que el componente recibe usando $props() de Svelte 5
    let { currentPage = 0, hasMore = false } = $props();

    /**
     * @param {number} newPage El número de página a navegar
     */
    function goToPage(newPage) {
        // Creamos un nuevo objeto URL basado en la URL actual de la página
        const url = new URL($page.url);
        
        // Regla: Eliminar el parámetro 'page' si es la primera página (0) para URLs limpias
        if (newPage <= 0) {
            url.searchParams.delete('page');
        } else {
            url.searchParams.set('page', newPage.toString());
        }
        
        // Navegamos a la nueva URL (pathname + searchParams)
        goto(url.pathname + url.search);
    } 

    function nextPage() {
        goToPage(currentPage + 1);
    }

    function prevPage() {
        goToPage(currentPage - 1);
    } 
    
    // Lógica reactiva (opcional, pero se mantiene la precaución)
    /*
    $: if (currentPage === 0 && $page.url.searchParams.has('page')) {
         // goToPage(0); 
    }
    */
</script>

<div class="pagination">
    <!-- Botón Anterior: Visible solo si no estamos en la página 0 -->
    {#if currentPage > 0}
        <button on:click={prevPage} class="pagination-btn">
            ← Anterior
        </button>
    {/if}
  
    <span class="page-info">
        Página {currentPage + 1}
    </span>
  
    <!-- Botón Siguiente: Visible solo si la función load indicó que hay más resultados -->
    {#if hasMore}
        <button on:click={nextPage} class="pagination-btn">
            Siguiente →
        </button>
    {/if}
</div>

<style>
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding: 24px 0;
        margin-top: 20px;
        border-top: 1px solid #f11212;
    }
    .pagination-btn {
        background-color: #f63b3b; /* Blue-500 */
        color: rgb(244, 29, 29);
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
        font-weight: 600;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
    }
    .pagination-btn:hover {
        background-color: #eb2525; /* Blue-600 */
        transform: translateY(-1px);
    }
    .pagination-btn:active {
        background-color: #d81d1d; /* Blue-700 */
        transform: translateY(1px);
    }
    .page-info {
        font-size: 1.1rem;
        font-weight: 700;
        color: #374151; /* Gray-700 */
    }
</style>
