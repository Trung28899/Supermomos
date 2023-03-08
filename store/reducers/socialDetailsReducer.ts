import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SocialDetails, {
  initialValues,
} from "@/modules/common/types/SocialDetailsTypes";

// const initialState: SocialDetails = initialValues;

const initialState: SocialDetails = {
  title:
    "Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder",
  startAt: "2022-10-11T19:00:00+00:00",
  venue: "Chelsea Market (163 W 20nd Street). Manhattan, NYC",
  capacity: 50,
  price: 30,
  description:
    "Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat\n+Q&A with two giants in the industry: \n\nPhil Hedayatnia, Founder & CEO of Airfoil, a\ngrowth design studio that has designed and built products in web3, the creator economy,\nthe future of work, and much more for 80+ startups since 2018 \n\nJihoon Suh, Senior\nProduct Designer at Coinbase, who was previously Senior Product Designer for Messenger\nfor Meta. \n\nThis will be a curated group with limited spots, so do sign up early!\n\nAbout\nAirfoil: \n\nAirfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto's first large-scale design firms, we aim to design a friendlier\nfinancial layer for the internet. We're a team of 85+ creatives, working from Airfoil's hubs in\nToronto, Singapore, and Seoul, who've worked on 100+ projects since 2018, including\nSolana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium,\nLayer3.xyz, MarginFi, Hyperspace, VBA Game, and more.\n\nLearn more about Airfoil and\nour work at airfoil.studio.",
  isManualApprove: true,
  privacy: "Public",
  banner:
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
  tags: ["Product", "Design"],
};

export const counterSlice = createSlice({
  name: "socialDetails",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<SocialDetails>) => {
      state.title = action.payload.title;
      state.startAt = action.payload.startAt;
      state.venue = action.payload.venue;
      state.capacity = action.payload.capacity;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.banner = action.payload.banner;
      state.tags = action.payload.tags;
      state.isManualApprove = action.payload.isManualApprove;
      state.privacy = action.payload.privacy;
    },
    resetDetails: (state) => {
      state.title = initialState.title;
      state.startAt = initialState.startAt;
      state.venue = initialState.venue;
      state.capacity = initialState.capacity;
      state.price = initialState.price;
      state.description = initialState.description;
      state.banner = initialState.banner;
      state.tags = initialState.tags;
      state.isManualApprove = initialState.isManualApprove;
      state.privacy = initialState.privacy;
    },
  },
});

export const { setDetails, resetDetails } = counterSlice.actions;
export default counterSlice.reducer;
