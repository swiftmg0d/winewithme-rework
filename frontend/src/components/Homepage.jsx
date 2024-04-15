import { AppBar, Button } from "@mui/material";
import Header from "./Header";
import Background from "./Backgorund";
import video from "../assets/homepage.mp4";
import { Container } from "postcss";
import { TypeAnimation } from "react-type-animation";
import Typed from "typed.js";
import { ReactTyped } from "react-typed";
import { BorderAllRounded, BorderBottomSharp } from "@mui/icons-material";

export default function Homepage() {
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
      <Header />
      <Main />
      <div className="flex justify-center mt-5">
        <div>
          <Button variant="contained" size="medium" sx={buttonSX}>
            Let's Wine
          </Button>
        </div>
      </div>
    </>
  );
}
function Main() {
  const sentences = [
    "Travel to the world of winemaking with just one touch of the screen.",
    "Share your experiences, explore new aromas and create delicious memories.",
    "Embark on a journey of flavors, right at your fingertips.",
    "Discover the art of brewing, one sip at a time.",
    "Unearth the secrets of the vineyard, from the comfort of your home.",
    "Connect with fellow enthusiasts, exchange stories, and toast to new friendships.",
    "Experience the joy of tasting, and let your palate be your guide.",
    "Capture the essence of each region, one bottle at a time.",
    "Immerse yourself in the rich history of viticulture, one page at a time.",
    "Create your own wine diary, and let every entry be a new adventure.",
  ];
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
                strings={sentences}
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
