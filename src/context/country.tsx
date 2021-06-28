import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { getCountry } from "../server/api";

type CountryContextProviderType = {
  children: ReactNode;
}

type CountryType = {
  active: number;
  cases: number;
  casesPerOneMillion: number;
  country: string;
  critical: number;
  deaths: number;
  deathsPerOneMillion: number;
  recovered: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  totalTests: number;
}

type CountryContextType = {
  country: CountryType | undefined;
  handleGetCountry: (nameOfTheCountry: string) => {};
}

export const CountryContext = createContext({} as CountryContextType);

export function CountryContextProvider(props: CountryContextProviderType) {
  const [country, setCountry] = useState<CountryType>();

  const handleGetCountry = async (nameOfTheCountry: string) => {
    const newCountry = await getCountry(nameOfTheCountry);
    setCountry(newCountry);
  }

  useEffect(() => {
    handleGetCountry('world');
  }, []);

  return (
    <CountryContext.Provider value={{ country, handleGetCountry }}>
      {props.children}
    </CountryContext.Provider>
  );
}
