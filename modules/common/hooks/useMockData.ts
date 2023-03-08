import { useTranslation } from "react-i18next";

const useMockData = () => {
  const { t: translate } = useTranslation();

  const settingOptions = [
    translate("createSocial.label.public"),
    translate("createSocial.label.curated"),
    translate("createSocial.label.community"),
  ];

  const settingBadges = [
    translate("createSocial.label.product"),
    translate("createSocial.label.marketing"),
    translate("createSocial.label.design"),
    translate("createSocial.label.engineering"),
  ];

  const bannerImages = [
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
  ];

  return {
    settingOptions,
    settingBadges,
    bannerImages,
  };
};

export default useMockData;
