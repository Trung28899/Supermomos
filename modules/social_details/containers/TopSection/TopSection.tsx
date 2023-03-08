import React from "react";
import classes from "./TopSection.module.scss";
import BannerImage from "@/modules/common/components/BannerImage/BannerImage";
import useSocialDetails from "../../hooks/useSocialDetails";
import { convertTimeIntoDateAndTime } from "../../utils/time_helpers";
import { useTranslation } from "react-i18next";
import Calendar from "../../../../public/calendar.svg";
import Clock from "../../../../public/time.svg";
import Place from "../../../../public/place.svg";
import Image from "next/image";
import Capacity from "../../../../public/capacity.svg";
import Dollar from "../../../../public/dollar.svg";

function TopSection() {
  const { t: translate } = useTranslation();

  const { banner, title, startAt, venue, capacity, price } = useSocialDetails();
  const titleArray = title.split("\n");

  const { fullDateString, time } = convertTimeIntoDateAndTime(
    startAt,
    translate
  );

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        {titleArray.map((title) => (
          <p className={classes.title} key={title}>
            {title}
          </p>
        ))}

        <div className={classes.dateAndtime}>
          <p>
            <Image src={Calendar} alt="" className={classes.image} />{" "}
            {fullDateString}
          </p>
          <p>
            <Image src={Clock} alt="" className={classes.image} />
            {time}
          </p>
        </div>

        <div className={classes.venue}>
          <p className={classes.details}>
            <Image src={Place} alt="" className={classes.image} /> {venue}
          </p>
        </div>

        <div className={classes.capacityAndPrice}>
          <p className={classes.details}>
            <Image src={Capacity} alt="" className={classes.image} />
            {`${capacity} ${translate("socialDetails.label.people")}`}
          </p>
          <p className={classes.details}>
            <Image src={Dollar} alt="" className={classes.image} />${price}
          </p>
        </div>
      </div>
      <div className={classes.bannerContainer}>
        <BannerImage bannerImage={banner} />
      </div>
    </div>
  );
}

export default TopSection;
