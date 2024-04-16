import { Button } from "@mui/material";
import Header from "../Header";
import Background from "../Backgorund";
import video from "../../assets/homepage.mp4";
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";
import { sentencesEN } from "../../constants/sentences_en";
import { sentencesMK } from "../../constants/sentences_mk";

export default function Homepage({ t, i18n }) {
  const buttonSX = {
    boxShadow: 3,
    "&:hover": {
      backgroundColor: "#8d0801",
      color: "#f8f9fa",
    },
    color: "black",
    backgroundColor: "white",
    borderRadius: "40px",
    fontWeight: "bold",
  };

  return (
    <>
      <Background video={video} />
      <Header t={t} i18n={i18n} />
      <Main t={t} i18n={i18n} />
      <div className="flex justify-center mt-5">
        <div>
          <Button variant="contained" size="medium" sx={buttonSX}>
            {t("Let's Wine")}
          </Button>
        </div>
      </div>
    </>
  );
}
function Main({ t, i18n }) {
  return (
    <>
      <div className="relative flex justify-center text-center mt-[250px] md:mt-[350px]  sm:mt-[250px] ">
        <div>
          <h1 className=" font-mono text-white mb-3 text-[25px] sm:text-[30px] md:text-[55px]">
            WineWithMe
          </h1>
          <div className=" container ">
            <p
              className=" font-mono text-white text-xs sm:text-base md:text-xl md:w-[800px]"
              id="element"
            >
              <ReactTyped
                strings={i18n.language == "en" ? sentencesEN : sentencesMK}
                typeSpeed={60}
                backSpeed={20}
                backDelay={19}
                loop={true}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
