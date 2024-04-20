import {
  styled,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { FormHelperText } from "@mui/joy";

export default function Form({
  t,
  name,
  setName,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
  valid,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 0.3, md: 5 },
          alignContent: "flex-start",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            padding: "3px",
          }}
        >
          <CustomInput
            t={t}
            setValue={setName}
            value={name}
            style={{ width: { sm: "50.5%", md: "100%" } }}
            valid={valid}
            input="name"
          >
            {t("Name")}
          </CustomInput>
        </Box>
        <Box
          sx={{
            padding: "3px",
          }}
        >
          <CustomInput
            t={t}
            setValue={setEmail}
            value={email}
            valid={valid}
            input="email"
            style={{ width: { sm: "50.5%", md: "100%" } }}
          >
            {t("Email")}
          </CustomInput>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "5px",
        }}
      >
        <Box>
          <CustomInput
            t={t}
            valid={valid}
            input="subject"
            setValue={setSubject}
            value={subject}
            style={{
              width: { sm: "47.05%", md: "60%" },
              marginTop: "-20px",
            }}
          >
            {t("Subject")}
          </CustomInput>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <Textarea
            required
            placeholder={t("Your message")}
            minRows={1}
            maxRows={2}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            sx={{
              "--Textarea-focusedInset": "var(--any, )",
              "--Textarea-focusedThickness": "1px",
              "--Textarea-focusedHighlight": "#589180",
              "--_Textarea-focusedHighlight": "#ffffff",
              "&::before": {
                transition: "box-shadow .15s ease-in-out",
              },
              "&:focus-within": {
                borderColor: "#589180",
                border: "none",
                borderBottom: "1px solid #589180",
              },
              backgroundColor: "transparent",
              border: valid["message"] ? "1px solid #A0153E" : "1px solid grey",
              width: { sm: "50%", md: "60%" },
              height: { sm: 50, md: 167, lg: 180 },
              marginTop: "-20px",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
function CustomInput({ children, style, setValue, value, valid, input, t }) {
  const sxForm = {
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "#589180",
    },
    "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::after": {
      borderBottom: "2px solid #589180",
    },
    "& .css-1eed5fa-MuiInputBase-root-MuiInput-root::before": {
      borderBottom: "1px solid grey",
    },
  };
  return (
    <>
      <FormControl sx={{ ...sxForm, ...style }}>
        <InputLabel htmlFor="my-input">{children}</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={value}
          error={valid[input]}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {valid[input] && (
          <FormHelperText
            id="my-helper-text"
            sx={{ color: "#A0153E", fontSize: { xs: "10px" } }}
          >
            {t("Please fill the input field correctly!")}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}
