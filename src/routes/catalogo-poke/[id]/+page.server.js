/* Aquí entrará el el endpoint BUSCAR POKÉMON POR ID. */
/**/
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  let url = new URL(`http://localhost:8000/api/pokemon/${params.id}`);
  const response = await fetch(url);
  if (!response.ok) {
    error(response.status);
  }

  let pokemon = await response.json();

  return {
    pokemon
  };
}

