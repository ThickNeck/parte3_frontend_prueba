/* En este archivo estará la lógica de bpusqueda de equipo por ID */
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  let url = new URL(`http://localhost:8000/api/equipos/${params.id}`);
  const response = await fetch(url);
  if (!response.ok) {
    error(response.status);
  }

  let equipo = await response.json();

  return {
    equipo
  };
}

export const actions = {
   desinscribir: async ({ request }) => {
       const data = await request.formData();
       
       const equipoId = data.get('padron'); // ID del equipo
       const integranteId = data.get('id');    // ID del integrante

       // Comprobación rápida por si faltan datos
       if (!equipoId || !integranteId) {
           return fail(400, { message: 'Faltan los IDs de equipo o integrante.' });
       }
       
       // 2. Corregir el orden de los IDs en la URL
       let url = new URL(`http://localhost:8000/api/equipos/${equipoId}/integrantes/${integranteId}`);

       const response = await fetch(url, {
           method: 'DELETE',
           headers: { 'Content-Type': 'application/json' }
           // No necesitas body si es una petición DELETE que usa IDs en la URL
       });
       
       // 3. Usar 'fail' para manejar errores de la API
       if (!response.ok) {
           // Intenta obtener un mensaje de error del cuerpo de la respuesta si es JSON
           let errorMessage = 'Algo falló al intentar eliminar el integrante.';
           try {
               const errorData = await response.json();
               errorMessage = errorData.message || errorMessage;
           } catch (e) {
               // La respuesta no era JSON o estaba vacía
           }
           
           return fail(response.status, { message: errorMessage });
       }

       // Opcional: retornar un objeto en caso de éxito
       return { 
           success: true, 
           message: 'Integrante eliminado correctamente.' 
       };
   },
};
