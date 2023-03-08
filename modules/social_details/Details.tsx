import React from "react";
import classes from "./Details.module.scss";
import NavBar from "../common/components/NavBar/NavBar";
import TopSection from "./containers/TopSection/TopSection";
import useSocialDetails from "./hooks/useSocialDetails";

function CreateSocial() {
  const { description } = useSocialDetails();
  const descriptionArray = description.split("\n");

  return (
    <div className={classes.container}>
      <NavBar />
      <TopSection />
      <div className={classes.description}>
        {descriptionArray.map((description) => (
          <div key={description}>
            <p>{description}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateSocial;
