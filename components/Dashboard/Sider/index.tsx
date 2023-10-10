import React from "react";
import Style from "./index.module.scss";
import UserCard from "../UserCard/Index";
import Accordion from "@/components/Ui/Accordion";
import Link from "next/link";
import { FcExpand } from "react-icons/fc";
const Sider = () => {
  return (
    <div className={Style.sider}>
      <UserCard />
      <Accordion title={<h3>Stats</h3>} content={<Nav />} size={100} />
    </div>
  );
};

const Nav = () => {
  return (
    <ul className={Style.list}>
      <li>
        <Link href={"/dashboard/linechart"}>
          <p>Line Chart</p>
          <FcExpand />
        </Link>
      </li>
      <li>
        <Link href={"/dashboard/barchart"}>
          <p>Bar Chart</p>
          <FcExpand />
        </Link>
      </li>
    </ul>
  );
};

export default Sider;
