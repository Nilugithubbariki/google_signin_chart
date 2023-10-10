"use client";
import { useAppSelector } from "@/slices/store";
import React from "react";

const Dashboard = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div>
      <h1>
        Welcome <span style={{ color: "#4285f4" }}> {user?.name}</span>
      </h1>
      <br />
      <br />
      <h3>Hey you can Explore charts using Stats accordion</h3>
    </div>
  );
};

export default Dashboard;
