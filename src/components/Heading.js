import React from "react";
import "../styles/heading.scss";

export default function Heading({ children, ...props }) {
  return <div className="heading uppercase ">{children}</div>;
}
