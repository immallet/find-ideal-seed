import { useContext } from "preact/hooks"
import { FilterContext } from "../context/Filters"
import type { Tag } from "../@types/tag"

interface CardProps {
  name: string
  bankName: string
  coverImage: string
  images: string[]
  tags: Tag[]
}

function Card({ name, bankName, coverImage, images, tags }: CardProps) {
  const filterTags = useContext(FilterContext)

  const handleClick = (buttonTag: Tag) => {
    if (filterTags?.activeTags.some((tag) => tag.value === buttonTag.value && tag.type === buttonTag.type)) {
      filterTags.removeTag(buttonTag.value, buttonTag.type)
    } else {
      filterTags?.addTag(buttonTag)
    }
  }
  return (
    <article class="group rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-[0.2rem] shadow-sm transition hover:bg-[length:400%_400%] hover:shadow-sm flex-initial">
      <a href="#">
        <img alt="Office" src={coverImage} class="h-36 md:h-52 w-full rounded-t-lg object-cover shadow-sm transition group-hover:saturate-200" />
      </a>
      <div class="rounded-b-lg bg-gray-50 p-2 !pt-5 sm:p-6 sm:!pt-10">
        <a href="#" class="block text-xs text-gray-500">
          {bankName}
        </a>

        <a href="#">
          <h3 class="mt-0.5 text-sm md:text-lg text-left font-medium text-gray-900">{name}</h3>
        </a>

        <div class="mt-2 md:mt-4 flex gap-2 justify-evenly">
          {tags[0] && (
            <button
              class={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs text-indigo-900 max-md:py-2 active:bg-amber-500
              ${filterTags?.activeTags.some((tag) => tag.value === tags[0].value && tag.type === tags[0].type) ? "bg-amber-400" : "bg-purple-400"}`}
              onClick={() => handleClick(tags[0])}>
              {tags[0].value}
            </button>
          )}

          {tags[1] && (
            <button
              class={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs text-indigo-800 max-md:py-2 active:bg-amber-500
              ${filterTags?.activeTags.some((tag) => tag.value === tags[1].value && tag.type === tags[1].type) ? "bg-amber-400" : "bg-purple-300"}`}
              onClick={() => handleClick(tags[1])}>
              {tags[1].value}
            </button>
          )}

          {tags[2] && (
            <button
              class={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs text-indigo-700 max-md:hidden active:bg-amber-500
              ${filterTags?.activeTags.some((tag) => tag.value === tags[2].value && tag.type === tags[2].type) ? "bg-amber-400" : "bg-purple-200"}`}
              onClick={() => handleClick(tags[2])}>
              {tags[2].value}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default Card
