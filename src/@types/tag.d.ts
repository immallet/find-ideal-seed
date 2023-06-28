export interface Tag {
  value: string | number
  type: string
  active?: boolean
}

export type TagContext = {
  activeTags: Tag[]
  addTag: (tag: Tag) => void
  removeTag: (tag_value: string | number, tag_type: string) => void
  removeAllTags: () => void
}
