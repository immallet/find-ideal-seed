import { createContext } from "preact"
import type { ComponentChildren } from "preact"
import { useState, useEffect } from "preact/hooks"
import type { Tag, TagContext } from "../@types/tag"
import type { Country, CountryContext } from "../@types/country"

type Props = {
  children: ComponentChildren
}

type FilterContext = TagContext & CountryContext

type FilterState = {
  tags: Tag[]
  countries: Country[]
}

export const FilterContext = createContext<FilterContext | null>(null)

export function FilterProvider({ children }: Props) {
  const [filter, setFilters] = useState<FilterState>({
    tags: [],
    countries: [],
  })

  useEffect(() => {
    console.log("CURRENT FILTER: ", filter)
  }, [filter])

  const addTag = (tag: Tag) => {
    console.log("Add Tag: ", tag)
    setFilters({ ...filter, tags: [...filter.tags, tag] })
  }

  const removeTag = (tag_value: string | number, tag_type: string) => {
    console.log("Remove Tag ID: ", tag_value, tag_type)
    const foundIndex = filter.tags.findIndex((tag) => tag.value === tag_value && tag.type === tag_type)
    if (foundIndex >= 0) {
      filter.tags.splice(foundIndex, 1)
      setFilters({ ...filter, tags: filter.tags })
    }
  }

  const removeAllTags = () => {
    setFilters({ ...filter, tags: [] })
  }

  const addCountry = (country: Country) => {
    const newCountries = [...filter.countries, country]
    setFilters({ ...filter, countries: newCountries })
  }

  const removeCountry = (country_id: number) => {
    const foundIndex = filter.countries.findIndex((country) => country.id === country_id)
    if (foundIndex >= 0) {
      filter.countries.splice(foundIndex, 1)
      setFilters({ ...filter, countries: filter.countries })
    }
  }

  const removeAllCountries = () => {
    setFilters({ ...filter, countries: [] })
  }

  return (
    <FilterContext.Provider
      value={{
        activeTags: filter.tags,
        addTag,
        removeTag,
        removeAllTags,
        activeCountries: filter.countries,
        addCountry,
        removeCountry,
        removeAllCountries,
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
