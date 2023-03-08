import React from "react";
import classes from "./UploadImage.module.scss";
import Image from "next/image";
import Photo from "../../../../public/image.svg";
import { useTranslation } from "react-i18next";
import BannerImage from "@/modules/common/components/BannerImage/BannerImage";

interface Props {
  openModal: () => void;
  bannerImage: string;
}

function UploadImage({ openModal, bannerImage }: Props) {
  const { t: translate } = useTranslation();

  if (bannerImage) {
    return (
      <div onClick={openModal}>
        <BannerImage bannerImage={bannerImage} uploadBanner />
      </div>
    );
  }

  return (
    <div className={classes.bannerContainer} onClick={openModal}>
      {" "}
      <Image src={Photo} alt="" className={classes.photoIcon} />{" "}
      {translate("createSocial.placeHolders.banner") || ""}
    </div>
  );
}

export default UploadImage;
