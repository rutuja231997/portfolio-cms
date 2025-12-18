import { defineType, defineField } from "sanity";

export default defineType({
    name: 'socials',
    title: 'Socials',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'title',
            description: 'platform for social media',
            type: 'string'
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url'
        })
    ]
})