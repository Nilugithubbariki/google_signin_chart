"use client";
import React, { useEffect } from "react";
import Style from "./index.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/slices/store";
import Button from "@/components/Ui/Button";
import { signOut, useSession } from "next-auth/react";
import { clearUser } from "@/slices/user";

const UserCard = () => {
  const session = useSession(); // A hook from next-auth to track login session
  const dispatch = useAppDispatch();
  const router = useRouter(); // A hook for routing
  const user = useAppSelector((state) => state.user.user); // Get values from user redux state

  const handleSignOut = async () => {
    await signOut();
    dispatch(clearUser());
    router.push("/");
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session, dispatch, router]);

  return (
    <div className={Style.card}>
      <div className={Style.upper}>
        <Image
          src={user?.image || "/user.jpeg"}
          width={50}
          height={50}
          alt="profile-img"
        />
      </div>
      <div className={Style.lower}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <Button onclick={handleSignOut}>Sign Out</Button>
      </div>
    </div>
  );
};

export default UserCard;
