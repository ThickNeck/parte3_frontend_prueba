/* En este archivo se activará el endpoint para buscar movimiento por ID */
/* Aquí entrará el el endpoint BUSCAR POKÉMON POR ID. */
/**/
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  let url = new URL(`http://localhost:8000/api/movimientos/${params.id}`);
  const response = await fetch(url);
  if (!response.ok) {
    error(response.status);
  }

  let movimiento = await response.json();

  return {
    movimiento
  };
}

