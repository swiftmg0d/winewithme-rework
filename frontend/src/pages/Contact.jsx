import Background from "../components/Background";
import Header from "../components/Header";
import video from "../assets/homepage.mp4";
import Container from "../components/Container";
import Form from "../components/Form";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Contact() {
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Container>
        <h1 className=" font-bold font-custom text-darkslategrey text-[1em] sm:text-[1.05em] md:text-[1.3em] mt-5 ">
          {t("Contact us")}
        </h1>
        <h1 className=" font-bold font-custom text-darkslategrey text-[1em] sm:text-[1.05em] md:text-[1.3em] mt-2">
          {t("Send us a message")}
        </h1>
        <form onSubmit={() => console.log("asda")}>
          <Form
            t={t}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
          />
        </form>
        <Box>
          <Button
            onClick={() => {
              console.log(username, email, subject, message);
            }}
            sx={{
              backgroundColor: "#2F4F4F",
              color: "white",
              fontWeight: "bold",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#8d0801",
                color: "#f8f9fa",
              },
            }}
          >
            {t("Submit")}
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: { xs: 1, sm: 2, md: 5 },
            fontSize: { xs: "90%", md: "100%" },
          }}
        >
          <h1 className=" font-bold font-custom text-darkslategrey text-[1em] sm:text-[1.05em] md:text-[1.3em]">
            {t("Contact information")}
          </h1>
          <p className=" font-custom text-darkslategrey">
            {t("Email")}: info@winwithme.com
          </p>
          <p className=" font-custom text-darkslategrey">
            {t("Phone")}: 0715000000
          </p>
        </Box>
      </Container>
    </>
  );
}
