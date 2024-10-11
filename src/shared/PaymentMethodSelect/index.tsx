import React, { useState } from "react";
import { MenuItem, Select } from "@mui/material";

import { IPaymentOption, paymentSystems, PaymentSystemType } from "utils/options";

import SelectArrow from "assets/iconComponents/SelectArrow";

import "./styles.scss";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentMethodSelect: React.FC<IProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const renderValue = (optionValue: string) => {
    const option = paymentSystems.find(val => val.value === optionValue) as IPaymentOption;
    return (
      <div className="payment-select-value">
        <img src={option.icon} alt="" className="payment-logo" />
        <div className="option-details">
          <div className="label">
            <span>{option.label}, USD • Commission {option.commission}%</span>
          </div>
          {option.type === PaymentSystemType.Card && (
            <div className="notice">
              Please notice that you will send money in the USD
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <Select
      MenuProps={{
        className: "payment-select-menu-wrapper",
        PaperProps: { className: "paper-wrapper" },
        MenuListProps: { className: "menu-list" }
      }}
      className="payment-select-wrapper"
      value={value}
      IconComponent={SelectArrow}
      renderValue={renderValue}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {paymentSystems.map(option => (
        <MenuItem
          key={option.value}
          value={option.value}
          onClick={() => onChange(option.value)}
          className="payment-select-item"
        >
          <img src={option.icon} alt="" />
          <div className="label">
            <span>{option.label}, USD • Commission {option.commission}%</span>
          </div>
        </MenuItem>
      ))}
    </Select>
  )
};

export default PaymentMethodSelect;
