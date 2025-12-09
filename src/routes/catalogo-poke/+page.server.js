import { error } from "@sveltejs/kit";

export async function load() {
    let apiUrl = new URL("http://127.0.0.1:8000/api/pokemon");
    const response = await fetch(apiUrl);
    if (!response.ok){ 
        error(`Response status: ${response.status}`)
    }

    let pokemones = await response.json();

    return {
        pokemones
    };
}