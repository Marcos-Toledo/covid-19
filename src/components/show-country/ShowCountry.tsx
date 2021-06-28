import { useContext } from "react";
import { CountryContext } from "../../context/country";

export function ShowCountry() {
  const { country } = useContext(CountryContext);

  return (
    country === undefined ? (
      <p>Selecione uma país</p>
    ) : (
      <ul className="country">
        <li>Cases: {country.cases}</li>
        <li>Today cases: {country.todayCases}</li>
        <li>Deaths: {country.deaths}</li>
        <li>Today deaths: {country.todayDeaths}</li>
        <li>Recovered: {country.recovered}</li>
        <li>Active: {country.active}</li>
        <li>Critical: {country.critical}</li>
        <li>Cases per one million: {country.casesPerOneMillion}</li>
        <li>deathsPerOneMillion: {country.deathsPerOneMillion}</li>
        <li>Total tests: {country.totalTests}</li>
        <li>Tests per one million: {country.testsPerOneMillion}</li>
      </ul>
    )
  );
}
