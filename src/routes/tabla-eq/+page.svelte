<script>
  import { enhance } from '$app/forms';

  let exito = $state(false);
  function mostrarBannerEqCreado() {
    exito = true;
    setTimeout(() => {
      exito = false;
    }, 5000);
  }

  let {data, form} = $props();

  // Variables para controlar la visibilidad de los formularios
  let showCreateForm = $state(false);
  let showDeleteForm = $state(false);

  // Funciones para mostrar y ocultar formularios
  function toggleCreateForm() {
    showCreateForm = !showCreateForm;
    showDeleteForm = false;  // Ocultar formulario de eliminar si se muestra el de crear
  }

  function toggleDeleteForm() {
    showDeleteForm = !showDeleteForm;
    showCreateForm = false;  // Ocultar formulario de crear si se muestra el de eliminar
  }


</script>

<main class="main-content">
  <!-- Sección Header -->
  <section class="page-header">
    <h2 class="page-title">Gestión de Equipos</h2>
    <p class="page-subtitle">Organiza y administra tus equipos Pokémon</p>
    <p style="color: red;">NOTA: En esta página se activará el endpoint LISTAR EQUIPOS.</p><br>
    <p style="color: red;">También se podrá activar el endpoint CREAR EQUIPO y ELIMINAR EQUIPO.</p>
  </section>

  <!-- Botones -->
  <section class="actions-section">
    <button class="btn btn-primary" on:click={toggleCreateForm}>+ Crear Nuevo Equipo</button>
    <button class="btn btn-primary" on:click={toggleDeleteForm}>- Eliminar Equipo</button>
  </section>


  <!-- Formularios de creación y eliminación de equipo -->
  {#if exito == true}
    <div class="success-banner">¡Equipo creado con éxito!</div>
  {/if}

  {#if showCreateForm}
    <section class="form-section">
      <h3>Crear Nuevo Equipo</h3>
      <form method="POST" action="?/create" use:enhance={() => {
        mostrarBannerEqCreado();
      }}>
        <label for="team-name">Nombre del Equipo</label>
        <input type="text" id="team-name" name="nombre" placeholder="Nombre del equipo" required>
        <button class="btn" type="submit">Crear Equipo</button>
      </form>
    </section>
  {/if}

  {#if showDeleteForm}
    <section class="form-section">
      <h3>Eliminar Equipo</h3>
      <form method="POST" action="?/delete">
        <label for="team-id-delete">ID del Equipo</label>
        <input type="number" id="team-id-delete" name="team_id_delete" placeholder="ID del equipo a eliminar" required>
        <button class="btn" type="submit">Eliminar Equipo</button>
      </form>
    </section>
  {/if}

  <!-- Tabla equipos -->
  <section class="table-section">
    <div class="table-container">
      <table class="teams-table">
        <!-- Encabezados -->
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Equipo</th>
            <th>Integrantes</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <!-- Cuerpo -->
        <tbody>
          <!-- Por cada equipo cargado, se inyecta un tr -->
          {#each data.equipos as equipo}
            <tr>
              <td class="team-id">#{equipo.id}</td>
              <td class="team-name">
                <a href="/tabla-eq/{equipo.id}" class="team-link"
                  >{equipo.nombre}</a
                >
              </td>
              <td class="team-members">
                <span class="members-count">{equipo.integrantes.length} integ.</span>
              </td>
              <td class="team-status">
                {#if equipo.integrantes && equipo.integrantes.length === 6}
                  <span class="status-badge status-complete">Completo</span>
                {:else}
                  <span class="status-badge status-complete">Incompleto</span>
                {/if}
              </td>
              <td class="team-actions">
                <a href="/tabla-eq/{equipo.id}" class="action-btn btn-view"
                  >Ver</a
                >
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  
</main>

<style>
    /*@import '$lib/assets/css/tabla-eq.css';*/
</style>
