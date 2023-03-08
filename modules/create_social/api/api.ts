import axios from "axios";
import SocialDetails from "@/modules/common/types/SocialDetailsTypes";
import { toastError } from "@/modules/common/utils/toast_helper";

const apiUrl = `https://api.supermomos-dev.com/interview/social`;

export function sendSocialDetails(details: SocialDetails) {
  return axios.post(apiUrl, details);
}
