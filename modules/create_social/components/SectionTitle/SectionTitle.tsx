import React, { ReactNode } from "react";
import classes from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: string | ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return <p className={classes.titleStyle}>{children}</p>;
}

SectionTitle.defaultProps = {
  children: "",
};

export default SectionTitle;
