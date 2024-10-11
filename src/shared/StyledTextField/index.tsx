import React from "react";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import "./styles.scss";

interface IProps {
  innerRef?: any,
  errorText?: string,
  startAdornment?: React.ReactNode | string,
  endAdornment?: React.ReactNode | string
}

const StyledTextField: React.FC<IProps&StandardTextFieldProps> = (
  {
    label,
    className,
    innerRef,
    errorText,
    startAdornment,
    endAdornment,
    ...restProps
  }
) => {
  return (
    <div className={`styled-text-field ${!!errorText ? "error" : ""} ${className || ""}`}>
      {label && <div className="field-label">{label}</div>}
      <TextField
        {...restProps}
        error={!!errorText}
        helperText={errorText}
        ref={innerRef}
        {...(startAdornment || endAdornment) ? {
          InputProps: {
            ...(restProps.InputProps || {}),
            ...(startAdornment ? { startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment> } : {}),
            ...(endAdornment ? { endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment> } : {})
          }
        } : {}}
      />
    </div>
  )
};

export default StyledTextField;
