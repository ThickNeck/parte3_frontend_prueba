/* En este archivo estará la lógica para listar equipos, y agregar equipo. */
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
    // --- 1. CONFIGURACIÓN DE PAGINACIÓN ---
    // Obtener el número de página de la URL (ej: ?page=1). Por defecto, es 0.
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 20; // Tamaño de la página (límite de resultados)
    const offset = page * pageSize; // Desplazamiento (offset)

    // --- 2. CONSTRUCCIÓN DE LA URL BASE ---
    // Usamos la URL de tu API de Pokémon.
    // Usaremos un objeto URL para manipular la base fácilmente.
    let apiUrl = new URL("http://127.0.0.1:8000/api/equipos");
    
    // Añadir los parámetros de paginación (limit y offset)
    apiUrl.searchParams.set("limit", pageSize.toString());
    apiUrl.searchParams.set("offset", offset.toString());

    // --- 3. IMPLEMENTACIÓN DE FILTRADO (Opcional, pero recomendado) ---
    // Aquí puedes añadir lógica para pasar parámetros de filtrado a tu API.
    // Por ejemplo, si tienes un parámetro 'search' en la URL (ej: ?search=pikachu):
    const searchTerm = url.searchParams.get("search");
    if (searchTerm) {
        apiUrl.searchParams.set("search", searchTerm);
    }
    // Agrega aquí cualquier otro filtro necesario (tipo, generación, etc.)

    // --- 4. FETCH DE LA API ---
    const response = await fetch(apiUrl);

    if (!response.ok) {
        // Usar la función 'error' de SvelteKit para manejar fallos
        error(response.status, `Error al cargar Pokémon: ${response.statusText}`);
    }

    // --- 5. OBTENCIÓN DE DATOS Y CORRECCIÓN DE NOMBRES ---
    // Asumiendo que tu API devuelve una lista de pokemones.
    let equipos = await response.json(); 

    // Si tu API devuelve un objeto con metadatos (ej: { count: 100, results: [...] }), 
    // podrías necesitar cambiar la línea anterior por:
    // const data = await response.json();
    // let pokemones = data.results; 
    
    // Determinar si hay más páginas (para la interfaz de usuario)
    const hasMore = equipos.length === pageSize;

    // --- 6. RETORNO DE DATOS ---
    return {
        equipos,
        hasMore,
        page // Devolvemos la página actual para los controles de navegación
    };
}

export const actions = {
    // ===================================
    // ACCIÓN PARA CREAR UN EQUIPO
    // ===================================
    create: async ({ request }) => {
        // 1. Obtener los datos del formulario
        const data = await request.formData();
        const nombre = data.get("nombre");

        if (!nombre) {
            // Retorna un error de SvelteKit si el campo está vacío
            return fail(400, { create: { success: false, message: 'El nombre del equipo es requerido.' } });
        }

        let url = new URL("http://127.0.0.1:8000/api/equipos");
        
        // 2. Enviar la solicitud POST a la API
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre })
        });
        
        // 3. Manejo de respuesta
        if (!response.ok) {
            const apiError = await response.json().catch(() => ({ message: 'Error desconocido.' }));
            // Lanza un error de SvelteKit si la API falla
            throw error(response.status, `Error al crear el equipo: ${apiError.message || response.statusText}`);
        }

        // Retorna éxito (opcional, pero útil para feedback)
        return { create: { success: true, message: `Equipo "${nombre}" creado con éxito.` } };
    },

    // ===================================
    // NUEVA ACCIÓN PARA ELIMINAR UN EQUIPO
    // ===================================
    delete: async ({ request }) => {
        // 1. Obtener los datos del formulario
        const data = await request.formData();
        // Usamos "team_id_delete" para que coincida con el atributo 'name' del input del formulario
        const teamId = data.get("team_id_delete"); 

        if (!teamId) {
            return fail(400, { delete: { success: false, message: 'El ID del equipo es requerido.' } });
        }

        // 2. Construir la URL con el ID para la eliminación
        let url = new URL(`http://127.0.0.1:8000/api/equipos/${teamId}`);

        // 3. Enviar la solicitud DELETE a la API
        const response = await fetch(url, {
            method: 'DELETE',
            // No se necesita Content-Type ni body para una solicitud DELETE simple.
        });

        // 4. Manejo de respuesta
        if (response.status === 404) {
             throw error(404, 'El equipo con ese ID no fue encontrado.');
        } else if (!response.ok) {
            throw error(response.status, `Error al intentar eliminar el equipo. Código: ${response.status}`);
        }
        
        // Retorna éxito
        return { delete: { success: true, message: `Equipo ID ${teamId} eliminado con éxito.` } };
    }
};
