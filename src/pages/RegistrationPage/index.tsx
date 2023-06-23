import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Title, FormInput } from "../../components";
import { RootState, signUpRequestAction } from "../../redux";
import { FormattedMessage, useIntl } from "react-intl";
import { LoadingButton } from "@mui/lab";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Box, FormControlLabel, FormGroup, FormHelperText, Typography, Checkbox, Alert, AlertTitle } from "@mui/material";

import "./index.scss";

export const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);

  const intl = useIntl();

  const registerSchema = object({
    email: string().nonempty(intl.formatMessage({ id: "form.email" })),
    phone: string()
      .nonempty(intl.formatMessage({ id: "form.phone" }))
      .max(15, intl.formatMessage({ id: "form.phone.max" })),
    password: string()
      .nonempty(intl.formatMessage({ id: "form.password" }))
      .min(8, intl.formatMessage({ id: "form.password.min" }))
      .max(32, intl.formatMessage({ id: "form.password.max" })),
    confirm_password: string().nonempty(
      intl.formatMessage({ id: "form.password.confirm" })
    ),
    terms: literal(true, {
      errorMap: () => ({ message: intl.formatMessage({ id: "form.terms" }) }),
    }),
  }).refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: intl.formatMessage({ id: "form.password.match" }),
  });

  type RegisterInput = TypeOf<typeof registerSchema>;

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      terms: undefined,
    },
  });

  const { handleSubmit, reset, register, formState: { isSubmitSuccessful, errors } } = methods;

  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.settings);
  const navigate = useNavigate();

  const submit: SubmitHandler<RegisterInput> = ({ email, password, phone }) => {
    console.log(phone);
    dispatch(signUpRequestAction({ email, password }));
  };

  return (
    <section className="registration">
      {isSubmitSuccessful && data.isLoggedIn ? (
        <Alert
          severity="success"
          sx={{ transform: "scale(1.5)", marginTop: "1rem" }}
        >
          <AlertTitle>Your registration was successfull!</AlertTitle>
        </Alert>
      ) : (
        <>
          <Title type="h1">
            <FormattedMessage id={"register.title"} />
          </Title>
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(submit)}
              sx={{
                dispay: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                "& .MuiFormControl-root": { width: "100%", mb: ".1rem" },
              }}
            >
              <FormInput
                name="email"
                fullWidth
                sx={{ mb: 2 }}
                errors={errors}
                placeholder={
                  intl.formatMessage({ id: "register.email" }) + " *"
                }
              />
              <FormHelperText
                error={!!errors["email"]}
                sx={{ mt: ".1rem", mb: "1rem" }}
              >
                {errors["email"] ? errors["email"].message : ""}
              </FormHelperText>

              <FormInput
                name="phone"
                fullWidth
                sx={{ mb: 2 }}
                errors={errors}
                isPhone={true}
                lang={intl.locale}
                placeholder={
                  intl.formatMessage({ id: "register.phone" }) + " *"
                }
              />

              <FormHelperText
                error={!!errors["phone"]}
                sx={{ mt: ".1rem", mb: "1rem" }}
              >
                {errors["phone"] ? errors["phone"].message : ""}
              </FormHelperText>

              <FormInput
                name="password"
                fullWidth
                sx={{ mb: 2 }}
                errors={errors}
                placeholder={
                  intl.formatMessage({ id: "register.password" }) + " *"
                }
                isPassword={true}
              />
              <FormHelperText
                error={!!errors["password"]}
                sx={{ mt: ".1rem", mb: "1rem" }}
              >
                {errors["password"] ? errors["password"].message : ""}
              </FormHelperText>

              <FormInput
                name="confirm_password"
                fullWidth
                sx={{ mb: 2 }}
                errors={errors}
                placeholder={
                  intl.formatMessage({ id: "register.confirm_password" }) + " *"
                }
                isPassword={true}
              />
              <FormHelperText
                error={!!errors["confirm_password"]}
                sx={{ mt: ".1rem", mb: "1rem" }}
              >
                {errors["confirm_password"]
                  ? errors["confirm_password"].message
                  : ""}
              </FormHelperText>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      sx={{ "&.Mui-checked": { color: "gray" } }}
                    />
                  }
                  {...register("terms")}
                  label={
                    <Typography
                      sx={{ fontSize: "1rem" }}
                      color={errors["terms"] ? "error" : "inherit"}
                    >
                      {intl.formatMessage({ id: "terms" })}
                    </Typography>
                  }
                />
                <FormHelperText
                  error={!!errors["terms"]}
                  sx={{ mt: "1rem", mb: "1rem" }}
                >
                  {errors["terms"] ? errors["terms"].message : ""}
                </FormHelperText>
              </FormGroup>

              <LoadingButton
                loading={loading}
                variant="outlined"
                fullWidth
                type="submit"
                sx={{ borderColor: "gray", color: "gray", mb: "1rem" }}
              >
                <span>{intl.formatMessage({ id: "register.submit" })}</span>
              </LoadingButton>

              <div className="registration__buttons">
                <Link to="/login">
                  <FormattedMessage id="login.title" />
                </Link>
              </div>
            </Box>
          </FormProvider>
        </>
      )}
    </section>
  );
};
