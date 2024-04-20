import { useTranslation } from "react-i18next";
import video from "../assets/homepage.mp4";
import Header from "../components/Header";
import Background from "../components/Background";
import Container from "../components/Container";

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
  const [t] = useTranslation();
  return (
    <>
      <Container>
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
      </Container>
    </>
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
