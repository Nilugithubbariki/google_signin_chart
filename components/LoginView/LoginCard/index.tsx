"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { setUser } from "@/slices/user";
import { useAppDispatch } from "@/slices/store";
import Style from "./index.module.scss";

const LoginCard = () => {
  const session = useSession(); // A hook from next-auth to track login session
  const router = useRouter(); // A hook for routing
  const dispatch = useAppDispatch(); // Redux hook to dispatch action

  const handleSignIn = async () => {
    await signIn("google"); // function from next Auth to login from provider
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      dispatch(setUser({ ...session.data.user }));
      router.push("/dashboard");
    }
  }, [session, dispatch, router]);

  return (
    <div className={Style.main}>
      {session.status === "unauthenticated" && (
        <button onClick={handleSignIn}>
          <div>
            <FcGoogle />
          </div>
          <p> Sign in with Google</p>
        </button>
      )}
    </div>
  );
};

export default LoginCard;
