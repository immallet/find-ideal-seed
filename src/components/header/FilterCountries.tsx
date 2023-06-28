import type { JSXInternal } from "preact/src/jsx"
import { useContext } from "preact/hooks"
import type { Country } from "../../@types/country"
import countries from "../../data/countries.json"
import { FilterContext } from "../../context/Filters"

function FilterCountries() {
  const filterContext = useContext(FilterContext)

  const handleClick = (event: JSXInternal.TargetedMouseEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget
    if (checked) {
      const selectedCountry = countries.find((country) => country.id === Number(value))
      if (selectedCountry) filterContext?.addCountry(selectedCountry)
    } else {
      filterContext?.removeCountry(Number(value))
    }
  }

  return (
    <div>
      <button
        id="dropdownBgHoverButton"
        data-dropdown-toggle="dropdownBgHover"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button">
        Pais {filterContext && filterContext?.activeCountries.length > 0 && `(${filterContext?.activeCountries.length})`}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
          {countries.map((country: Country) => (
            <li key={country.id}>
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id={`checkbox-item-${country.id}`}
                  type="checkbox"
                  value={country.id}
                  checked={filterContext?.activeCountries.includes(country)}
                  onClick={(e) => handleClick(e)}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label for={`checkbox-item-${country.id}`} class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                  {country.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterCountries
