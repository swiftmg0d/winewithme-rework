import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

export const inputs = {
  Name: {
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    icon: (
      <PersonIcon
        sx={{
          "&:hover": {
            color: "#740643",
          },
          color: "white",
        }}
      />
    ),
  },
  Surname: {
    type: "text",
    name: "surname",
    placeholder: "Enter your surname",
    icon: (
      <PersonIcon
        sx={{
          "&:hover": {
            color: "#740643",
          },
          color: "white",
        }}
      />
    ),
  },
  Username: {
    type: "text",
    name: "username",

    placeholder: "Enter your username",
    icon: (
      <PersonIcon
        sx={{
          "&:hover": {
            color: "#740643",
          },
          color: "white",
        }}
      />
    ),
  },
  Password: {
    type: "password",
    name: "password",

    placeholder: "Enter your password",
    icon: (
      <LockIcon
        sx={{
          "&:hover": {
            color: "#740643",
          },
          color: "white",
        }}
      />
    ),
  },
  "Confirm Password": {
    type: "password",
    name: "confirmPassword",

    placeholder: "Confirm your password",
    icon: (
      <LockIcon
        sx={{
          "&:hover": {
            color: "#740643",
          },
          color: "white",
        }}
      />
    ),
  },
};
