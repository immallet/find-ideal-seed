// Context
import FilterProvider from "../context/Filters";

// Custom Components
import SeedCards from "./SeedCards";
import Filters from "../components/header/Filters";

// Types
import type { Seed } from "../@types/seed";

function HomeSeeds() {
  return (
    <FilterProvider>
      <header>
        <Filters />
      </header>
      <SeedCards />
    </FilterProvider>
  );
}

export default HomeSeeds;
