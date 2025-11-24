<script>
  // Variables para controlar la visibilidad de los formularios
  let showCreateForm = false;
  let showDeleteForm = false;

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
  {#if showCreateForm}
    <section class="form-section">
      <h3>Crear Nuevo Equipo</h3>
      <form>
        <label for="team-name">Nombre del Equipo</label>
        <input type="text" id="team-name" placeholder="Nombre del equipo" required>
        <button class="btn" type="submit">Crear Equipo</button>
      </form>
    </section>
  {/if}

  {#if showDeleteForm}
    <section class="form-section">
      <h3>Eliminar Equipo</h3>
      <form>
        <label for="team-id-delete">ID del Equipo</label>
        <input type="number" id="team-id-delete" placeholder="ID del equipo a eliminar" required>
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
          <tr>
            <td class="team-id">#001</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=1" class="team-link"
                >Equipo Fuego</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">6 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-complete">Completo</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=1" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#002</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=2" class="team-link"
                >Equipo Agua</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">4 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-incomplete">Incompleto</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=2" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  
</main>

<style>
    @import '$lib/assets/css/tabla-eq.css';
</style>