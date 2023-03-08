import { configureStore } from "@reduxjs/toolkit";
import socialDetailsReducer from "./reducers/socialDetailsReducer";
import SocialDetails from "@/modules/common/types/SocialDetailsTypes";

const rootReducer = configureStore({
  reducer: {
    socialDetails: socialDetailsReducer,
  },
  devTools: true,
});

export type RootState = {
  socialDetails: SocialDetails;
};
export default rootReducer;
