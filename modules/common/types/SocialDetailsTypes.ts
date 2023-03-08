interface SocialDetails {
  title: string;
  startAt: Date | string;
  venue: string;
  capacity: number | "";
  price?: number | "";
  description: string;
  banner: string;
  tags: string[];
  isManualApprove?: boolean;
  privacy: string;
}

interface SocialDetailsErrors {
  title: string;
  startAt: string;
  venue: string;
  capacity: string;
  price: string;
  description: string;
  banner: string;
  tags: string;
  isManualApprove: string;
  privacy: string;
}

const initialValues: SocialDetails = {
  title: "",
  startAt: "",
  venue: "",
  capacity: "",
  price: "",
  description: "",
  banner: "",
  tags: [],
  isManualApprove: false,
  privacy: "",
};

const initialErrorValues: SocialDetailsErrors = {
  title: "",
  startAt: "",
  venue: "",
  capacity: "",
  price: "",
  description: "",
  banner: "",
  tags: "",
  isManualApprove: "",
  privacy: "",
};

export { initialValues, initialErrorValues };
export type { SocialDetailsErrors };
export default SocialDetails;
