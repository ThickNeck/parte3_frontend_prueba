import { error } from "@sveltejs/kit";

export async function load() {
    let apiUrl = new URL("http://127.0.0.1:8000/api/equipos");
    const response = await fetch(apiUrl);
    if (!response.ok){ 
        error(`Response status: ${response.status}`)
    }

    let equipos = await response.json();

    return {
        equipos
    };
}

export const actions = {
    create: async({cookies, request}) => {
        const data = await request.formData();
        const nombre = data.get("nombre");

        if (!nombre) {
          return fail(400, {
            create: {
              success: false,
              message: "El nombre del equipo es requerido.",
            },
          });
        }

        let apiUrl = new URL("http://127.0.0.1:8000/api/equipos");
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre: nombre})
        });
        if (!response.ok) {
            error(`Response status: ${response.status}`);
        }
    },
    
    //delete: async({cookies, request}) => {}
}