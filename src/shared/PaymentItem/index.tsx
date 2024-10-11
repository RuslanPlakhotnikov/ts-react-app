import React from "react";

import { IPaymentOption } from "utils/options";

import "./styles.scss";

interface IProps {
  data: IPaymentOption,
  onClick: () => void
}

const PaymentItem: React.FC<IProps> = ({ data, onClick }) => {
  return (
    <div className="payment-item" onClick={onClick}>
      <div className="logo-box">
        <img src={data.icon} alt="" className="item-logo"/>
      </div>
      <div className="item-title">{data.label}</div>
      <div className="item-subtitle">Commission {data.commission}%</div>
    </div>
  )
};

export default PaymentItem;
