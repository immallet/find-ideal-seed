import FiltersProvider from "../context/Filters";
import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

function FilterApp({ children }: Props) {
  return <FiltersProvider>{children}</FiltersProvider>;
}

export default FilterApp;
