import { useState } from "react";
import video from "../assets/wine_pouring.mp4";
import Background from "../components/Background";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import { inputs } from "../constants/customInputs";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { wineWithMeService } from "../api/api";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignIn from "react-auth-kit/hooks/useSignIn";

import { useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Login() {
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
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(true);
  const loginInputs = Object.entries(inputs).filter(
    ([key, value]) => key === "Username" || key === "Password"
  );
  const handleSubmit = (event) => {
    event.preventDefault();

    wineWithMeService
      .loginUser(loginForm.username, loginForm.password)
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          response.data === null ? setValid(false) : setValid(true);
          if (response.data != null) {
            if (
              signIn({
                auth: {
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjo4MDA4NjA1MTk1fQ.ijw603AjpAqNwnUXmv6YB5L6m5aL-llIgBsTJo-k2r8",
                },
                userState: {
                  id: response.data.id,
                  name: response.data.name,
                  surname: response.surname,
                  username: response.data.username,
                },
              })
            ) {
              // If Login Successfull, then Redirect the user to secure route
              navigate("/main");
            } else {
              // Else, there must be some error. So, throw an error
              alert("Error Occoured. Try Again");
            }
          }
        }
      });
  };
  if (isAuthenticated()) {
    return <Navigate to={"/main"} replace />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative flex p-[100px] xl:justify-end justify-center ">
          <div className="flex justify-center flex-col xl:mt-[100px]">
            <div className="mt-3">
              <h1 className="font-custom text-white text-center md:text-[20px]">
                {t("Already have an account?")}
              </h1>
            </div>
            <div className="mt-2">
              <h1 className="font-custom text-white text-center md:text-[25px]">
                {t("Login")}
              </h1>
            </div>
            <div>
              <div id="table" className="flex flex-col gap-2">
                {loginInputs.map(([key, input], index) => (
                  <CustomInput
                    key={index}
                    placeholder={t(input.placeholder)}
                    type={input.type}
                    icon={input.icon}
                    value={input.name}
                    form={loginForm}
                    setForm={setLoginForm}
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
                {t("Login")}
              </Button>
            </div>
            <div className=" font-custom text-white text-center text-[14px]">
              <Link to={"/register"}>{t("Don't have an account?")}</Link>
            </div>
            <div className="text-warningred font-bold text-center">
              <div className=" flex justify-center">
                {!valid && (
                  <div className=" w-[250px] text-[14px] mt-3 ">asda </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
