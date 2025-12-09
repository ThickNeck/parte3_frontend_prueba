import { error } from "@sveltejs/kit";

export async function load() {
    let url = new URL("http://127.0.0.1:8000/api/pokemon");
    const response = await fetch(url);
    if (!response.ok){ 
        error(`Response ststus: ${response.status}`)
    }

    let pokemones = await response.json();

    return {
        pokemones
    };
}