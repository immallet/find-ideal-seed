import { useContext } from "preact/hooks"
import CloseIcon from "../icons/CloseIcon"
import { FilterContext } from "../../context/Filters"
import type { Tag } from "../../@types/tag"

function FilterTags() {
  const filterContext = useContext(FilterContext)

  const handleClick = (tag: Tag) => {
    filterContext?.removeTag(tag.value, tag.type)
  }

  const handleRemoveTags = () => {
    filterContext?.removeAllTags()
  }

  if (!filterContext?.activeTags.length) {
    return <></>
  }

  return (
    <div class="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-0.5 text-center inline-flex items-center gap-1">
      <h5>Tags:</h5>
      <div class="flex items-center gap-1">
        {filterContext?.activeTags.map((tag) => (
          <button class={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs max-md:py-2 bg-[#202020]`} onClick={() => handleClick(tag)}>
            {tag.value} <CloseIcon />
          </button>
        ))}
        <button class={`flex items-center gap-1 whitespace-nowrap rounded-full px-1 py-1 text-xs max-md:py-2 bg-[#202020]`} onClick={handleRemoveTags}>
          <CloseIcon width={15} height={15} />
        </button>
      </div>
    </div>
  )
}

export default FilterTags
