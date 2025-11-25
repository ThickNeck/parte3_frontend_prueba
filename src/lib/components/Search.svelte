<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    let { query, placeholder } = $props();

    function buscar() {
        const url = new URL($page.url);
        if (query) {
            url.searchParams.set("query", query);
        } else {
            url.searchParams.delete("query"); 
        }
        goto(url.toString());
    }
</script>

<div>
    <input type="text" bind:value={query} {placeholder} autocomplete="off"/>
    <button onclick={buscar}>Buscar</button>

</div>
