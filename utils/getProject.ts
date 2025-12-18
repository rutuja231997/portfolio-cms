import { client } from "@/sanity/lib/client";

export default async function getProject(){
    return await client.fetch(`
        *[_type == "projects" ]{
            _id,
             title,
             image,
            summary,
            stack[]->{
                _id,
                title,
                progress,
                image,
                order
            },
            linkToBuild,

        }`
    )
}