import Background from "../components/Background";
import Header from "../components/Header";
import video from "../assets/homepage.mp4";
import Container from "../components/Container";
import Form from "../components/Form";
import { Box, Button, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { wineWithMeService } from "../api/api";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [valid, setValid] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleValidationError = () => {
    name === ""
      ? setValid((dic) => ({ ...dic, name: true }))
      : setValid((dic) => ({ ...dic, name: false }));
    email === ""
      ? setValid((dic) => ({ ...dic, email: true }))
      : setValid((dic) => ({ ...dic, email: false }));
    subject === ""
      ? setValid((dic) => ({ ...dic, subject: true }))
      : setValid((dic) => ({ ...dic, subject: false }));
    message === ""
      ? setValid((dic) => ({ ...dic, message: true }))
      : setValid((dic) => ({ ...dic, message: false }));
  };
  const handleSubmit = () => {
    if (name === "" || email === "" || subject === "" || message === "") {
      handleValidationError();
      setIsCompleted(false);
      return;
    } else {
      wineWithMeService.saveContact(name, email, subject, message);
      setValid({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
      resetForm();
      setIsCompleted(true);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Container>
        <h1 className=" font-bold font-custom text-darkslategrey text-[1em] sm:text-[1.05em] md:text-[1.3em] mt-5 ">
          {t("Contact us")}
        </h1>
        <h1 className=" font-bold font-custom text-darkslategrey text-[1em] sm:text-[1.05em] md:text-[1.3em] mt-2">
          {t("Send us a message")}
        </h1>

        <Form
          t={t}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          subject={subject}
          setSubject={setSubject}
          message={message}
          setMessage={setMessage}
          valid={valid}
        />
        <Box>
          <Button
            onClick={() => handleSubmit()}
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
            marginTop: { xs: 3, sm: 3, md: 5 },
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isCompleted && (
              <Alert
                variant="outlined"
                severity="success"
                sx={{
                  width: { xs: "250px", sm: "270px", md: "300px" },
                  height: { xs: "60px", md: "70px" },
                  fontSize: { xs: "9.05px", md: "12px" },
                  mt: "10px",
                }}
              >
                {t("Success")}
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
