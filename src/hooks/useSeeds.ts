import { useState, useCallback, useMemo, useRef, useContext } from "preact/hooks"

import { FilterContext } from "../context/Filters"

import type { Seed } from "../@types/seed"

import DATA from "../data/datos.json"

interface SeedsResponse {
  seeds: Seed[]
  getSeeds: ({ search }: { search: string }) => void
  loading: boolean
}

export default function useSeeds(): SeedsResponse {
  const filterContext = useContext(FilterContext)
  const [seeds, setSeeds] = useState<Seed[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const previousSearch = useRef<string | null>(null)

  const getSeeds = useCallback(({ search }: { search: string }) => {
    try {
      setLoading(true)
      previousSearch.current = search
      // const newMovies = await searchMovies({ search })
      setSeeds(DATA)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const filterSeeds = useMemo(() => {
    if (filterContext && (filterContext.activeCountries.length > 0 || filterContext.activeTags.length > 0)) {
      return [...seeds].filter((seed) => {
        const activeCountry = filterContext.activeCountries.some((country) => country.id === seed.country.id)
        const activeTag = seed.tags.some((seedTag) => filterContext.activeTags.some((tag) => tag.value === seedTag.value && tag.type === seedTag.type))
        return activeCountry || activeTag
      })
    }

    return seeds
  }, [filterContext, seeds])

  return { seeds: filterSeeds, getSeeds, loading }
}
