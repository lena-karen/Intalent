import { useState, useEffect } from "react";
import axios from "axios";

export const useGeoInfo = () => {
  const [location, setLocation] = useState({
    ip: "", countryName: "", countryCode: "", city: "", timezone: "",
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setLocation({
          ...location,
          ip: data.ip,
          countryName: data.country_name,
          countryCode: data.country_calling_code,
          city: data.city,
          timezone: data.timezone,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
	getGeoInfo()
  }, [])

  return location
};
