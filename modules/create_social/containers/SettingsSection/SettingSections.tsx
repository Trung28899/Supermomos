import React from "react";
import classes from "./SettingSections.module.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import CheckBox from "@/modules/common/components/CheckBox/CheckBox";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import BadgeContainer from "../BadgeContainer/BadgeContainer";
import useMockData from "@/modules/common/hooks/useMockData";
import { FormikProps } from "formik";
import SocialDetails from "@/modules/common/types/SocialDetailsTypes";

interface Props {
  formik: FormikProps<SocialDetails>;
}

function SettingSections({ formik }: Props) {
  const { t: translate } = useTranslation();
  const { settingOptions, settingBadges } = useMockData();

  const setApprove = (value: boolean) =>
    formik.setFieldValue("isManualApprove", value);
  const setPrivacy = (value: string) => formik.setFieldValue("privacy", value);
  const setTags = (value: string[]) => formik.setFieldValue("tags", value);

  return (
    <div className={classes.settingContainer}>
      <SectionTitle>{translate("createSocial.label.setting")}</SectionTitle>
      <div className={classes.checkBoxContainer}>
        <CheckBox
          label={translate("createSocial.label.approve")}
          onValueChange={setApprove}
          checked={formik.values.isManualApprove}
        />
      </div>

      <div className={classes.subSection}>
        <p className={classes.subSectionTitle}>
          {translate("createSocial.label.privacy")}
        </p>
        <RadioButtons
          name="options"
          options={settingOptions}
          arrangement="horizontal"
          setChosenValue={setPrivacy}
        />
      </div>

      <div className={classes.subSection}>
        <p className={classes.subSectionTitle}>
          {translate("createSocial.label.tagYourSocial")}
        </p>
        <p className={classes.subSectionSubTitle}>
          {translate("createSocial.label.pickTags")}
        </p>

        <BadgeContainer badges={settingBadges} setBadges={setTags} />
      </div>
    </div>
  );
}

export default SettingSections;
