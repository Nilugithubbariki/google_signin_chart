import React from "react";
import Style from "./index.module.scss";
import LoginCard from "./LoginCard";
const LoginView = () => {
  return (
    <section className={Style.main}>
      <LoginCard />
    </section>
  );
};

export default LoginView;
