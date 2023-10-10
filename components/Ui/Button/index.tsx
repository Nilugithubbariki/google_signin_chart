import React, { PropsWithChildren, ReactNode } from "react";
import Style from "./index.module.scss";
interface PropType {
  children: ReactNode;
  onclick: () => void;
}
const Button: React.FC<PropType> = (props) => {
  return (
    <button className={Style.button} onClick={props.onclick}>
      {props.children}
    </button>
  );
};

export default Button;
