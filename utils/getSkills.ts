import {client} from "@/sanity/lib/client";

export async function getSkills() {
    return await client.fetch(`
        *[_type == "skills"]{
            _id,
            title,
            progress,
            image,
            order
        }`)
}