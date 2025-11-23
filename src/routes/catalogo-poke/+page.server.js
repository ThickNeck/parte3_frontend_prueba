/* En este archivo entrará el endpoint LISTAR POKEMONES y FILTRAR POKEMONES */
export async function load() {
    let url = new URL("http://127.0.0.1:8000/api/pokemon");
    const response = await fetch(url);
    if (!response.ok) {
        error(`Response status: ${response.status}`);
    }

    let pokemones = await response.json();

    return {
        pokemones
    };
}
