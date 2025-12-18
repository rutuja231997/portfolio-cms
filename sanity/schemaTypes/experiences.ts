import { defineType, defineField } from "sanity";

export default defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'jobTitle', 
            title: 'JobTitle',
            type: 'string',
        }),
        defineField({
            name: 'companyImage',
            title: 'Company Image',
            type: 'image',
            options: { hotspot: true },
            fields:[
                defineField({
                    name:"alt",
                    title:"Alt text",
                    type:"string",
                    description: "describe the image for accessibility"
                })
            ]
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),
        defineField({
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date'
        }),
        defineField({
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date'
        }),
        defineField({
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean'
        }),
        defineField({
            name: 'stack',
            title: 'Stack',
            type: 'array',
            of: [{ type:'reference', to: {type:'skills'}}]
        }),
        defineField({
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'string'}]
        })
    ]
})