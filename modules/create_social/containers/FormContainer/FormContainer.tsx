import { useState } from "react";
import Input from "@/modules/common/components/Input/Input";
import TextArea from "@/modules/common/components/TextArea/TextArea";
import classes from "./FormContainer.module.scss";
import Calendar from "@/public/calendar.svg";
import Clock from "@/public/time.svg";
import Place from "@/public/place.svg";
import Capacity from "@/public/capacity.svg";
import Dollar from "@/public/dollar.svg";
import BannerImage from "../../components/UploadImage/UploadImage";
import { useTranslation } from "react-i18next";
import SettingSections from "../SettingsSection/SettingSections";
import Modal from "@/modules/common/components/Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Button from "@/modules/common/components/Button/Button";
import { useFormik } from "formik";
import useModal from "@/modules/common/hooks/useModal";
import useHandleErrors from "../../hooks/useHandleErrors";
import { sendSocialDetails } from "../../api/api";
import { useRouter } from "next/router";

import SocialDetails, {
  initialValues,
  initialErrorValues,
} from "@/modules/common/types/SocialDetailsTypes";
import {
  createSocialSchema,
  getValidationErrors,
  notifyErrorsByToast,
} from "../../utils/validation_helper";
import { formatDateAndTime, isDateAndTimeValid } from "../../utils/time_helper";
import { toastError, toastSuccess } from "@/modules/common/utils/toast_helper";
import { useDispatch } from "react-redux";
import { setDetails } from "@/store/reducers/socialDetailsReducer";

function FormContainer() {
  const { t: translate } = useTranslation();
  const { modalOpen, closeModal, openModal } = useModal();
  const { errors, setErrors, resetError } = useHandleErrors();
  const router = useRouter();
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: SocialDetails) {
    if (!values.price) formik.setFieldValue("price", 0);

    try {
      await createSocialSchema.validate(values, {
        abortEarly: false,
      });
    } catch (err: any) {
      const errorsObject = getValidationErrors(err);
      setErrors({ ...initialErrorValues, ...errorsObject });
      return notifyErrorsByToast(errorsObject);
    }

    if (!isDateAndTimeValid(date, time)) {
      return toastError(translate("createSocial.toastMessage.invalidDate"));
    }

    try {
      await sendSocialDetails(values);
      dispatch(setDetails(values));
      toastSuccess(translate("createSocial.toastMessage.success"));
      return router.push("/social-details");
    } catch (error: any) {
      toastError(error.response.data.detail[0].msg);
    }
  }

  const handleChangeTime = (value: string, type: "date" | "time") => {
    if (type === "date") {
      setDate(value);
      return formik.setFieldValue("startAt", formatDateAndTime(value, time));
    }

    setTime(value);
    return formik.setFieldValue("startAt", formatDateAndTime(date, value));
  };

  return (
    <form className={classes.container} onSubmit={formik.handleSubmit}>
      <div className={classes.topSection}>
        <div className={classes.inputContainer}>
          <div className={classes.titleContainer}>
            <TextArea
              rows={1}
              size="large"
              variant="purple"
              placeholder={translate("createSocial.placeHolders.title") || ""}
              id="title"
              {...formik.getFieldProps("title")}
              error={errors.title}
              resetError={resetError}
            />
          </div>

          <div className={classes.twoInputContainer}>
            <Input
              placeholder={translate("createSocial.placeHolders.date") || ""}
              inputSize="medium"
              icon={Calendar}
              error={errors.startAt}
              resetError={resetError}
              onChange={(e) => handleChangeTime(e.target.value, "date")}
              value={date}
            />

            <Input
              placeholder={translate("createSocial.placeHolders.time") || ""}
              inputSize="medium"
              icon={Clock}
              error={errors.startAt}
              resetError={resetError}
              onChange={(e) => handleChangeTime(e.target.value, "time")}
              value={time}
            />
          </div>

          <Input
            placeholder={translate("createSocial.placeHolders.venue") || ""}
            inputSize="small"
            icon={Place}
            id="venue"
            {...formik.getFieldProps("venue")}
            error={errors.venue}
            resetError={resetError}
          />

          <div className={classes.twoInputContainer}>
            <Input
              placeholder={
                translate("createSocial.placeHolders.capacity") || ""
              }
              inputSize="small"
              icon={Capacity}
              type="number"
              id="capacity"
              {...formik.getFieldProps("capacity")}
              error={errors.capacity}
              resetError={resetError}
            />

            <Input
              placeholder={translate("createSocial.placeHolders.cost") || ""}
              inputSize="small"
              icon={Dollar}
              type="number"
              id="price"
              {...formik.getFieldProps("price")}
              error={errors.price}
              resetError={resetError}
            />
          </div>
        </div>

        <BannerImage openModal={openModal} bannerImage={formik.values.banner} />
      </div>
      <div className={classes.descriptionContainer}>
        <TextArea
          label={translate("createSocial.label.description") || ""}
          rows={8}
          size="small"
          placeholder={translate("createSocial.placeHolders.description") || ""}
          id="description"
          {...formik.getFieldProps("description")}
          error={errors.description}
          resetError={resetError}
        />
      </div>

      <SettingSections formik={formik} />

      <div className={classes.buttonContainer}>
        <Button type="submit" variant="yellow">
          {translate("createSocial.buttons.createSocial")}
        </Button>
      </div>

      <Modal show={modalOpen} closeModal={closeModal}>
        <ModalContent
          closeModal={closeModal}
          saveBanner={(value) => formik.setFieldValue("banner", value)}
        />
      </Modal>
    </form>
  );
}

export default FormContainer;
