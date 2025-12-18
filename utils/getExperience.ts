import { client } from "@/sanity/lib/client";

export default async function getExperience(){
    return await client.fetch(`
        *[_type == "experiences"]{
            _id,
            jobTitle,
            companyImage,
            company,
            dateStarted,
            dateEnded,
            isCurrentlyWorkingHere,
            stack[]->{
                _id,
                title,
                progress,
                image{
                    asset->{
                        url
                    },
                    alt
                },
                order
            },
            points
        }`
    )
}