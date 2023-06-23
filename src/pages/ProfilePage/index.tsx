import React, {useState, useCallback, useEffect} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Divider, InputLabel } from "@mui/material";
import { ProfileItem, CustomInput, CustomSelect } from "../../components";

import { Country, State, City } from "country-state-city";

import "./index.scss";
import AvatarUpload from "../../components/AvatarUpLoad";
import { countryType, cityType } from '../../types';
import { useCountry } from '../../hooks';

export const ProfilePage = () => {
  const [country, setCountry] = useState<countryType>({flag: '', id: '', value: '', label: ''});
  const [citiesList, setCitiesList] = useState([{flag: '', id: '', value: '', label: ''}])
  const [city, setCity] = useState<cityType>({value: '', label: ''})
  const countriesList = useCountry()
  const intl = useIntl();

  // const getCountrieslist = useCallback(() => {
  //   const countries = Country.getAllCountries();
  //   return countries.map((el) => ({
  //     flag: el.flag,
  //     value: el.isoCode,
  //     label: el.name,
  //   }));
  
  // }, [])

  // useEffect(() => {
  //   getCountrieslist()
  // }, [])

  useEffect(() => {
    const citiesOfSelectedCountry = City.getCitiesOfCountry(country.value)
    if (citiesOfSelectedCountry) {
      setCitiesList(citiesOfSelectedCountry.map((el) => (
        {
          id: '',
          flag: '',
          value: el.stateCode,
          label: el.name,
        }
        )))};
  }, [country])

  // let cities 
  // if (country) {
  //   City.getCitiesOfCountry(country.value as string) 
  // }
  // const citiesList: cityType[] = cities.map((el) => ({
  //   value: el.stateCode,
  //   label: el.name,
  // }));

  console.log(countriesList);
  return (
    <div className="profile">
      <AvatarUpload />

      <Divider />

      <div className="profile__username-personal">
        <ProfileItem>
          <div className="profile__item">
            <InputLabel
              shrink
              htmlFor="username-input"
              sx={{ marginBottom: 1 }}
            >
              {intl.formatMessage({ id: "profile.username" })}
            </InputLabel>
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.username" })}
              id="username-input"
            />
          </div>
        </ProfileItem>

        <ProfileItem>
          <div className="profile__item">
            <InputLabel
              shrink
              htmlFor="firstname-input"
              sx={{ marginBottom: 1 }}
            >
              {intl.formatMessage({ id: "profile.firstname" })}
            </InputLabel>
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.firstname" })}
              id="firstname-input"
            />
          </div>
        </ProfileItem>

        <ProfileItem>
          <div className="profile__item">
            <InputLabel
              shrink
              htmlFor="lastname-input"
              sx={{ marginBottom: 1 }}
            >
              {intl.formatMessage({ id: "profile.lastname" })}
            </InputLabel>
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.lastname" })}
              id="lastname-input"
            />
          </div>
        </ProfileItem>

        <ProfileItem>
          <div className="profile__item">
            <InputLabel shrink htmlFor="email-input">
              {intl.formatMessage({ id: "profile.email" })}
            </InputLabel>
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.email" })}
              id="email-input"
            />
          </div>
        </ProfileItem>

        {/* <ProfileItem> */}
          <div className="profile__item">
            <InputLabel shrink htmlFor="city-input" sx={{ marginBottom: 1 }}>
              {intl.formatMessage({ id: "profile.country" })}
            </InputLabel>
            <CustomSelect
              list={countriesList}
              initial={countriesList[0].value}
              isCountry={true}
              value = {country}
              setValue = {setCountry}
            />
          </div>
        {/* </ProfileItem> */}

        {/* <ProfileItem> */}
          <div className="profile__item">
            <InputLabel shrink htmlFor="city-input" sx={{ marginBottom: 1 }}>
              {intl.formatMessage({ id: "profile.city" })}
            </InputLabel>
            {/* <CustomSelect
              list={citiesList}
              initial={citiesList[0].value as string}
              isCity={true}
              value = {city}
              setValue = {setCity}
            /> */}
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.city" })}
              id="city-input"
            />
          </div>
        {/* </ProfileItem> */}
      </div>
    </div>
  );
};
