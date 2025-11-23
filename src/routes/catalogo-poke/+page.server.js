/* En este archivo entrará el endpoint LISTAR POKEMONES y FILTRAR POKEMONES */
/*
*/
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

export async function load({ url }) {
  const page = parseInt(url.searchParams.get("page") || "0");
  const pageSize = 20;
  const offset = page * pageSize;
  const PUBLIC_API_URL = "http://localhost:5173";

  let apiUrl = new URL(`${PUBLIC_API_URL}/catalogo-poke/`);
  apiUrl.searchParams.set("limit", pageSize.toString());
  apiUrl.searchParams.set("offset", offset.toString());
  const response = await fetch(apiUrl);
  if (!response.ok) {
    error(`Response status: ${response.status}`);
  }
  const alumnos = await response.json();

  const hasMore = alumnos.length === pageSize;
  return {
    pokemones
  };
}
