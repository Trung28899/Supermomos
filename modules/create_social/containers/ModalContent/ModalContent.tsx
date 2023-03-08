import React, { useState } from "react";
import classes from "./ModalContent.module.scss";
import Image from "next/image";
import CloseIcon from "../../../../public/close.svg";
import { useTranslation } from "react-i18next";
import useMockData from "@/modules/common/hooks/useMockData";
import Button from "@/modules/common/components/Button/Button";

interface Props {
  closeModal: () => void;
  saveBanner: React.Dispatch<React.SetStateAction<string>>;
}

function ModalContent({ closeModal, saveBanner }: Props) {
  const { t: translate } = useTranslation();
  const { bannerImages } = useMockData();
  const [chosenBanner, setChosenBanner] = useState(bannerImages[0]);

  const saveBannerHandler = () => {
    saveBanner(chosenBanner);
    closeModal();
  };

  return (
    <div>
      <div className={classes.topModal}>
        <p>{translate("createSocial.label.chooseBanner")}</p>
        <Image
          src={CloseIcon}
          alt=""
          className={classes.closeIcon}
          onClick={closeModal}
        />
      </div>
      <div className={classes.imageSection}>
        {bannerImages.map((image) => {
          return (
            <Image
              onClick={() => setChosenBanner(image)}
              src={image}
              alt="image"
              key={image}
              width={100}
              height={100}
              className={
                chosenBanner === image
                  ? classes.imageChosen
                  : classes.imageStyling
              }
            />
          );
        })}
      </div>
      <div className={classes.bottomSection}>
        <Button
          type="button"
          className={classes.buttonStyles}
          onClick={closeModal}
        >
          {translate("createSocial.buttons.close")}
        </Button>
        <Button
          type="button"
          variant="yellow"
          className={classes.buttonStyles}
          onClick={saveBannerHandler}
        >
          {translate("createSocial.buttons.save")}
        </Button>
      </div>
    </div>
  );
}

export default ModalContent;
