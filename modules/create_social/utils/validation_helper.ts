import * as yup from "yup";
import { toastError } from "@/modules/common/utils/toast_helper";

const createSocialSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  startAt: yup
    .date()
    .typeError("Incorrect Date or Time Format")
    .required("Start date is required"),
  venue: yup.string().required("Venue is required"),
  capacity: yup
    .number()
    .typeError("Capacity is required")
    .required("Capacity is required"),
  description: yup.string().required("Description is required"),
  banner: yup.string().required("Banner is required"),
  tags: yup
    .array()
    .of(yup.string())
    .min(1, "Please select at least one tag")
    .required("Tags are required"),
  isManualApprove: yup.boolean().optional(),
  privacy: yup.string().required("Privacy option required"),
});

const getValidationErrors = (error: yup.ValidationError) => {
  const errorObject: { [key: string]: string } = {};
  error.inner.forEach((e: yup.ValidationError) => {
    if (e.path) errorObject[e.path] = e.message;
  });
  return errorObject;
};

const notifyErrorsByToast = (errorObject: any) => {
  if (errorObject.banner) return toastError(errorObject.banner);
  if (errorObject.privacy) return toastError(errorObject.privacy);
  if (errorObject.tags) return toastError(errorObject.tags);
};

export { createSocialSchema, getValidationErrors };
export { notifyErrorsByToast };
