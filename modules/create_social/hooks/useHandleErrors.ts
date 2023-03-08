import { useState, useCallback } from "react";

import {
  SocialDetailsErrors,
  initialErrorValues,
} from "@/modules/common/types/SocialDetailsTypes";

const useHandleErrors = () => {
  const [errors, setErrors] = useState<SocialDetailsErrors>(initialErrorValues);
  const resetError = useCallback(() => setErrors(initialErrorValues), []);

  return {
    errors,
    setErrors,
    resetError,
  };
};

export default useHandleErrors;
