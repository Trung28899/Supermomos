import { InputHTMLAttributes } from "react";
import Image from "next/image";
import classes from "./Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  inputSize: "large" | "medium" | "small";
  error?: string;
  resetError?: () => void;
};

const Input = (props: Props) => {
  const { icon, inputSize, error, resetError, ...otherProps } = props;
  const inputClasses = [classes.input, classes[inputSize]].join(" ");

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        {icon && <Image src={icon} alt="Icon" className={classes.icon} />}
        <input
          {...otherProps}
          className={inputClasses}
          onChange={(e) => {
            otherProps.onChange?.(e);
            resetError?.();
          }}
        />
      </div>
      {error && (
        <div className={`${classes.inputContainer} ${classes.errorContainer}`}>
          <p className={classes.iconHolder}>*</p>
          <p className={classes.errorText}>{error}</p>
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  inputSize: "small",
};

export default Input;
