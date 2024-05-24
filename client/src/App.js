import React from "react";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientId =
    "441081621159-lulr0a6qm9he1mv2nukghc9fhoc3at9b.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
export default App;
