import { defineType, defineField } from "sanity";

export default defineType({
    name: 'projects',
    title: 'Projects', 
    type: 'document',
    fields: [
        defineField({
            name: 'title', 
            title: 'title',
            description: 'Title of the project',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "All text",
                    type: "string",
                    description: "describe the image for accessibility"
                })
            ]
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text'
        }),
        defineField({
            name: 'stack',
            title: 'Stack',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skills' }}],
        }),
        defineField({
            name: 'linkToBuild',
            title: 'LinkToBuild',
            type: 'url'
        })
    ]
})