import { client } from "@/sanity/lib/client";

export default async function getSocial(){
    return await client.fetch(`
        *[_type == "socials" ]{
           _id,
           title,
           url
        }`
    )
}