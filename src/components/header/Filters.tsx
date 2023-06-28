import FilterTags from "./FilterTags"
import FilterCountries from "./FilterCountries"

function Filters() {
  return (
    <div class="w-full flex justify-end mb-2 gap-2">
      <FilterTags />
      <FilterCountries />
    </div>
  )
}

export default Filters
