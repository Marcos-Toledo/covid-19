import { useContext, ChangeEvent } from "react";
import { CountryContext } from "../../context/country";
import { countries } from "./countries";

type CountriesType = {
  key: number;
  name: string;
}

export function CountriesSelect() {
  const { handleGetCountry } = useContext(CountryContext);

  const handleSelectValue = (event: ChangeEvent<HTMLSelectElement>) => {
    handleGetCountry(event.target.value);
  }

  return (
    <select name="Country" onChange={handleSelectValue}>
      <option disabled>Select Country</option>
      {countries.map((country: CountriesType) => (
        <option
          key={country.key}
          value={country.name}
        >{country.name}</option>
      ))}
    </select>
  );
}
