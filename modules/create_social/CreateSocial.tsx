import React from "react";
import classes from "./CreateSocial.module.scss";
import NavBar from "../common/components/NavBar/NavBar";
import FormContainer from "./containers/FormContainer/FormContainer";

function CreateSocial() {
  return (
    <div className={classes.container}>
      <NavBar />
      <FormContainer />
    </div>
  );
}

export default CreateSocial;
