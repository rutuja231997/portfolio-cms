import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('portfolio-cms')
    .items([S.listItem().title("Page Info").id("pageInfo").child(
      S.document().schemaType("pageInfo").documentId("pageInfo")
    ),
    S.divider(),

    ...S.documentTypeListItems().filter(
      (item)=>item.getId() !== "pageInfo"
    ),
  ])
