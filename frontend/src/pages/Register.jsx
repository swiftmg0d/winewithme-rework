import Background from "../components/Background";
import Header from "../components/Header";
import video from "../assets/wine_pouring.mp4";
import { Button } from "@mui/material";
import { inputs } from "../constants/customInputs";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { wineWithMeService } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  return (
    <>
      <Background video={video} />
      <Header />
      <Section />
    </>
  );
}

function Section() {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [numericChars, setNumericChars] = useState(true);
  const [specialChars, setSpecialChars] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [uppercaseChars, setUppercaseChars] = useState(true);
  const [minLength, setMinLength] = useState(true);
  const [matched, setMatched] = useState(true);

  const [usernameValid, setUsernameValid] = useState(true);
  const [usernameUnique, setUsernameUnique] = useState(true);
  const [usernameValidForm, setUsernameValidForm] = useState(true);

  function handleValidationError(response) {
    !response.data.passwordValidator.numericChars
      ? setNumericChars(false)
      : setNumericChars(true);
    !response.data.passwordValidator.valid
      ? setPasswordValid(false)
      : setPasswordValid(true);
    !response.data.passwordValidator.specialChars
      ? setSpecialChars(false)
      : setSpecialChars(true);
    !response.data.passwordValidator.uppercaseChars
      ? setUppercaseChars(false)
      : setUppercaseChars(true);
    !response.data.passwordValidator.minLength
      ? setMinLength(false)
      : setMinLength(true);
    !response.data.passwordValidator.matched
      ? setMatched(false)
      : setMatched(true);
    !(
      response.data.usernameValidator.valid &&
      response.data.usernameValidator.unique
    )
      ? setUsernameValid(false)
      : setUsernameValid(true);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname, username, password, confirmPassword } = registerForm;
    wineWithMeService
      .registerUser(name, surname, username, password, confirmPassword)
      .then((response) => {
        if (response.status == 200) {
          response.data.valid && navigate("/login");
          console.log(response.data);
          handleValidationError(response);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex p-[100px] xl:justify-end justify-center ">
        <div className="flex justify-center flex-col">
          <div className="mt-3">
            <h1 className="font-custom text-white text-center md:text-[20px]">
              {t("Create an account")}
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="font-custom text-white text-center md:text-[25px]">
              {t("Register")}
            </h1>
          </div>
          <div>
            <div id="table" className="flex flex-col gap-2">
              {Object.entries(inputs).map(([key, input], index) => (
                <CustomInput
                  key={index}
                  placeholder={t(input.placeholder)}
                  type={input.type}
                  icon={input.icon}
                  value={input.name}
                  form={registerForm}
                  setForm={setRegisterForm}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Button
              type="submit"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "30px",
                width: "250px",
                "&:hover": {
                  backgroundColor: "#C60D25",
                  color: "#f8f9fa",
                },
              }}
            >
              {t("Register")}
            </Button>
          </div>
          <div className="text-warningred font-bold text-center">
            <div className=" flex justify-center">
              {!usernameValid && (
                <div className=" w-[250px] text-[14px]">
                  {t("Your username is either not valid or not unique!")}
                </div>
              )}
            </div>
            <div className=" flex justify-center">
              {!passwordValid && (
                <div className=" w-[250px] text-[14px]">
                  {!(
                    numericChars &&
                    specialChars &&
                    minLength &&
                    uppercaseChars
                  ) && <span> {t("Your password needs to contain:")} </span>}
                  <ul>
                    <li>
                      {" "}
                      {!numericChars && (
                        <span>{t("At least one number.")}</span>
                      )}
                    </li>
                    <li>
                      {!specialChars && (
                        <span>{t("At least one special character.")}</span>
                      )}{" "}
                    </li>
                    <li>
                      {!uppercaseChars && (
                        <span>{t("At least one uppercase letter.")}</span>
                      )}{" "}
                    </li>
                    <li>
                      {!minLength && (
                        <span>{t("A minimum length of 6 characters.")}</span>
                      )}{" "}
                    </li>
                    <li>
                      {!matched && <div>{t("Passwords does not match!")}</div>}{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
