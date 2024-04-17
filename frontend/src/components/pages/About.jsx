import Background from "../Backgorund";
import Header from "../Header";
import video from "../../assets/homepage.mp4";
import { useTranslation } from "react-i18next";

export default function About() {
  return (
    <>
      <Background video={video} />
      <Header />
      <Main />
    </>
  );
}
function Main() {
  const [t, i18n] = useTranslation();
  return (
    <div className="flex justify-center relative mt-[70px] md:mt-[100px]">
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] container bg-red-50 rounded-[60px] w-[320px] h-[490px] md:w-[700px] md:h-[700px]  sm:w-[400px] sm:h-[630px] ">
        <section className=" relative text-center mt-2 flex  flex-col justify-center ">
          <Row mg={" mt-5"}>
            {[
              t("Welcome to WineWithMe"),
              t("Exploring Macedonian wineries made easy!"),
            ]}
          </Row>
          <Row mg={" mt-5 sm:mt-4 md:mt-7"}>
            {[t("Our Mission"), t("We are passionate about")]}
          </Row>
          <Row mg={" mt-5 sm:mt-4 md:mt-7"}>
            {[t("Who We Are"), t("WineWithMe is a team")]}
          </Row>
          <Row mg={" mt-5 sm:mt-4 md:mt-7"}>
            {[t("What We Offer"), t("Explore Macedonian wineries")]}
          </Row>
        </section>
      </div>
    </div>
  );
}

function Row({ children, mg }) {
  return (
    <div className="flex justify-center">
      <div className="flex  flex-col justify-center justify-items-center text-[1em] sm:text-[1.05em] md:text-[1.3em]  w-[220px] md:w-[450px] sm:w-[300px]">
        <h1 className={"font-custom text-darkslategrey  font-bold" + mg}>
          {children[0]}
        </h1>
        <div className="flex justify-center">
          <p className="font-custom text-darkslategrey mt-1 md:mt-2 text-center text-[0.55em] sm:text-[0.84em] md:text-[0.82em]">
            {children[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
