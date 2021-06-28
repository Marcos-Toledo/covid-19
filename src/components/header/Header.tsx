import { CountriesSelect } from "../countries-select/CountriesSelect";

export function Header() {
  return (
    <header>
      <div className="container">
        <h1>Covid-19</h1>
        <CountriesSelect />
      </div>
    </header>
  );
}
