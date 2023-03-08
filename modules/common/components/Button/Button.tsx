import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "yellow";
}

const Button: React.FC<ButtonProps> = ({ variant, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
        styles[variant || "primary"]
      } ${className}`}
      {...props}
    />
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
