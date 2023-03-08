import { useSelector } from "react-redux";
import SocialDetails from "@/modules/common/types/SocialDetailsTypes";
import { RootState } from "@/store/store";

const useSocialDetails = (): SocialDetails => {
  const { socialDetails } = useSelector((state: RootState) => state);
  return { ...socialDetails };
};

export default useSocialDetails;
