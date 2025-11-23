<script>
  // Este +layout.svelte inyecta código HTML al +page.svelte de este mismo path,
  // y además a los de todas las rutas hijas.
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Breadcrums from "$lib/components/Breadcrums.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { page } from "$app/stores";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
  <div class="body">
    <Header />
    {#if $page.url.pathname !== "/"}
      <Navbar />
    {/if}
    <Breadcrums />
    {@render children()}
    <Footer />
  </div>
</div>

<style>
  @import "$lib/assets/gralStyle.css";
</style>
