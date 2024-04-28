import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
export default function Main() {
  const signOut = useSignOut();
  const authUser = useAuthUser();
  const navigate = useNavigate();
  const signOutAction = () => {
    signOut();
    navigate("/home");
  };

  return (
    <div>
      <p className="">{`Hello ${authUser().name}, your U-ID is: ${
        authUser().id
      }`}</p>
      <button
        onClick={signOutAction}
        className="border border-2 border-red-800 "
      >
        Sign Out!
      </button>
    </div>
  );
}
