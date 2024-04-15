import Background from "./Backgorund";
import Header from "./Header";
import video from "../assets/homepage.mp4";
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
  return (
    <div className="flex justify-center relative mt-[80px] md:mt-[100px]">
      <div className=" container bg-red-50 rounded-[60px] w-[320px] h-[500px] md:w-[700px] md:h-[700px]  sm:w-[400px] sm:h-[600px] shadow-2xl">
        asdasad
      </div>
    </div>
  );
}
