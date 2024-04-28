import "./i18n";
import RoutesPage from "./RoutesPage";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import ReactRouterPlugin from "@auth-kit/react-router/route";
import { BrowserRouter } from "react-router-dom";

const store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
  // debug: true,
});

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider
          store={store}
          router={ReactRouterPlugin}
          fallbackPath="/login"
        >
          <RoutesPage />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
