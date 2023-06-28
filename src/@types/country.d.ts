export interface Country {
  id: number
  name: string
  active?: boolean
}

export type CountryContext = {
  activeCountries: Country[]
  addCountry: (country: Country) => void
  removeCountry: (index: number) => void
  removeAllCountries: () => void
}
