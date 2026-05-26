import { defineType, defineField } from "sanity";

export default defineType({
    name:'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Title of skill',
            type: 'string',
        }),
        defineField({
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progress of the skill from 0 to 100%',
            validation: (Rule)=> Rule.min(0).max(100)
        }),
        defineField({
            name: 'image',
            title: "Image",
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: 'string',
                    description: 'describe the image for accessibility'
                })
            ]
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number'
        })
    ]
}) 