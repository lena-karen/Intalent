import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Avatar, Divider, InputLabel } from "@mui/material";
import ProfileItem from "../../components/ProfileItem";
import Title from "../../components/Title";

import { CustomInput } from "../../components/CustomInput";
import { useIntl } from "react-intl";
import "./index.scss";
import AvatarUpload from "../../components/AvatarUpLoad";

export default function ProfilePage() {
  const intl = useIntl();

  return (
    <div className="profile">
      {/* <Title type="h1" className="profile__title">
        Profile Page
      </Title> */}

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

        <ProfileItem>
          <div className="profile__item">
            <InputLabel shrink htmlFor="city-input" sx={{ marginBottom: 1 }}>
              {intl.formatMessage({ id: "profile.city" })}
            </InputLabel>
            <CustomInput
              placeholder={intl.formatMessage({ id: "profile.city" })}
              id="city-input"
            />
          </div>
        </ProfileItem>
      </div>
    </div>
  );
}
