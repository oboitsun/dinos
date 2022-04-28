import React from "react";
import "../styles/heading.scss";

export default function Heading({ children, addClasses, ...props }) {
  return <div className={`heading uppercase ${addClasses}`}>{children}</div>;
}
