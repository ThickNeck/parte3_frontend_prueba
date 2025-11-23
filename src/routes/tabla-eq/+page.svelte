<main class="main-content">
  <!-- Sección Header -->
  <section class="page-header">
    <h2 class="page-title">Gestión de Equipos</h2>
    <p class="page-subtitle">Organiza y administra tus equipos Pokémon</p>
    <p style="color: red;">NOTA: En esta página se activará el endpoint LISTAR EQUIPOS.</p><br>
    <p style="color: red;">También se podrá activar el endpoint CREAR EQUIPO.</p>
  </section>

  <!-- Botón crear -->
  <section class="actions-section">
    <button class="btn btn-primary">+ Crear Nuevo Equipo</button>
  </section>

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
          <tr>
            <td class="team-id">#003</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=3" class="team-link"
                >Equipo Planta</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">6 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-complete">Completo</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=3" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#004</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=4" class="team-link"
                >Equipo Eléctrico</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">3 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-incomplete">Incompleto</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=4" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#005</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=5" class="team-link"
                >Equipo Competitivo</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">6 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-complete">Completo</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=5" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#006</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=6" class="team-link"
                >Equipo Legendarios</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">2 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-incomplete">Incompleto</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=6" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#007</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=7" class="team-link"
                >Equipo Dragón</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">5 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-incomplete">Incompleto</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=7" class="action-btn btn-view"
                >Ver</a
              >
            </td>
          </tr>
          <tr>
            <td class="team-id">#008</td>
            <td class="team-name">
              <a href="equipo-detalle.html?id=8" class="team-link"
                >Equipo Psíquico</a
              >
            </td>
            <td class="team-members">
              <span class="members-count">1 integ.</span>
            </td>
            <td class="team-status">
              <span class="status-badge status-incomplete">Incompleto</span>
            </td>
            <td class="team-actions">
              <a href="equipo-detalle.html?id=8" class="action-btn btn-view"
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