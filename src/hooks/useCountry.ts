import { useEffect, useCallback, useState } from "react";
import { Country, ICountry } from "country-state-city";
import { countryType } from "../types";
export const useCountry = () => {
  const [countryList, setCountryList] = useState([
    { flag: "", value: "", label: "" },
  ]);
  const getCountrieslist = useCallback(() => {
    const countries = Country.getAllCountries();
	return countries.map((el) => ({
        flag: el.flag,
		id: '',
        value: el.isoCode,
        label: el.name,
      }))
  }, []);

  useEffect(() => {
	setCountryList(getCountrieslist())
  }, []);
  return countryList;
};
