import React, { ReactNode } from "react";
import Image from "next/image";
import classes from "./NavBar.module.scss";
import Logo from "@/public/logo.svg";
import Down from "@/public/down.svg";
import { useTranslation } from "react-i18next";

interface NavBarOptionProps {
  children: ReactNode;
}

function NavBarOption({ children }: NavBarOptionProps) {
  return <p className={classes.navBarOption}>{children}</p>;
}

function NavBar() {
  const { t: translate } = useTranslation();

  return (
    <div className={classes.container}>
      <Image src={Logo} alt="" className={classes.logo} />
      <div className={classes.optionContainer}>
        <NavBarOption>{translate("general.navBar.blog")}</NavBarOption>
        <NavBarOption>{translate("general.navBar.socials")}</NavBarOption>
        <NavBarOption>{translate("general.navBar.pastSocial")}</NavBarOption>
        <NavBarOption>
          {translate("general.navBar.clubs")}
          <Image className={classes.icon} src={Down} alt="" />
        </NavBarOption>
        <NavBarOption> {translate("general.navBar.contact")}</NavBarOption>
      </div>
    </div>
  );
}

export default NavBar;
