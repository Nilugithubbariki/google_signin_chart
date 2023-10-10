"use client";
import React, { ReactNode, useState } from "react";
import Style from "./index.module.scss";
import classNames from "classnames";
import { FcExpand } from "react-icons/fc";

interface PropType {
  title: ReactNode;
  content: ReactNode;
  size: "fit" | number;
}
const Accordion: React.FC<PropType> = ({ title, content, size }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleAccordion = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <div
      className={Style.accordion}
      style={{
        width:
          size === "fit"
            ? "fit-content"
            : typeof size === "number"
            ? `${size}%`
            : "fit-content",
      }}
    >
      <div
        className={Style.header}
        onClick={handleAccordion}
        style={{ borderBottom: isActive ? "1px solid" : "none" }}
      >
        {title}
        <div
          className={classNames(
            Style.accordionIcon,
            isActive && Style.accordionOpen
          )}
        >
          <FcExpand />
        </div>
      </div>
      <div className={classNames(Style.contentBox, isActive && Style.isActive)}>
        <div className={Style.content}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
