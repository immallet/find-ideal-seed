// Preact
import { useEffect } from "preact/hooks"
import useSeeds from "../hooks/useSeeds"

// Custom Components
import Card from "./Card"

function SeedCards() {
  const { seeds, getSeeds, loading } = useSeeds()

  useEffect(() => {
    getSeeds({ search: "" })
  }, [])

  return (
    <div class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:gap-10">
      {seeds.map((seed) => (
        <Card key={seed.id} name={seed.name} bankName={seed.bankName} coverImage={seed.coverImage} images={seed.images} tags={seed.tags} />
      ))}
    </div>
  )
}

export default SeedCards
