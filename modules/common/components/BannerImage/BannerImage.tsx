import React from "react";
import Image from "next/image";
import Photo from "../../../../public/image.svg";
import { useTranslation } from "react-i18next";
import classes from "./BannerImage.module.scss";

type Props = {
  bannerImage: string;
  uploadBanner?: boolean;
};

function BannerImage({ bannerImage, uploadBanner = false }: Props) {
  const { t: translate } = useTranslation();

  return (
    <div className={classes.bannerImageContainer}>
      <Image
        className={`${classes.image} ${uploadBanner && classes.imageUpload}`}
        src={bannerImage}
        alt=""
        height={100}
        width={100}
      />
      {uploadBanner && <div className={classes.hoverItem}></div>}
      {uploadBanner && (
        <p className={classes.hoverText}>
          <Image src={Photo} alt="" className={classes.photoIcon} />{" "}
          {translate("createSocial.placeHolders.updateBanner") || ""}
        </p>
      )}
    </div>
  );
}

export default BannerImage;
