import { useContext } from "react";
import { CountryContext } from "../../context/country";
import { countries } from "./countries";

type CountriesType = {
  key: number;
  name: string;
}

export function CountriesSelect() {
  const { handleGetCountry } = useContext(CountryContext);

  const handleSelectCountry = (nameOfTheCountry: string) => {
    handleGetCountry(nameOfTheCountry);
  }

  return (
    <select name="Country">
      <option disabled>Select Country</option>
      {countries.map((country: CountriesType) => (
        <option
          key={country.key}
          value={country.name}
          onClick={() => handleSelectCountry(country.name)}
        >{country.name}</option>
      ))}
    </select>
  );
}
