import { client } from "@/sanity/lib/client";

export async function getPageInfo(){
    return await client.fetch(`
        *[_type == "pageInfo" ][0]{
        _id,
        name,
        role,
        heroImage,
        backgroundInformation,
        profilePic,
        phoneNumber,
        email,
        address,
        socials[]->{
            _id,
            title,
            url
        }
    }`)
}