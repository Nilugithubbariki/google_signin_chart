import Sider from "@/components/Dashboard/Sider";
import React from "react";
import Style from "./index.module.scss";
export default function DashboardView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={Style.main}>
        <Sider />
        <div className={Style.content}>{children}</div>
      </div>
    </div>
  );
}
