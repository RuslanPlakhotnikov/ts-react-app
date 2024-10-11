import React from "react";
import { Button } from "@mui/material";

import { useAppSelector } from "hooks/storeUsage";

import SelectArrow from "assets/iconComponents/SelectArrow";
import PlusIcon from "assets/iconComponents/PlusIcon";

import "./styles.scss";

const BalanceDetails = () => {
  const balance = useAppSelector(state => state.user.balance);

  return (
    <div className="balance-details">
      <div className="details-content">
        <div className="balance">{balance} $</div>
        <div className="percentage">13%</div>
        <SelectArrow />
      </div>
      <Button className="add-btn">
        <PlusIcon />
      </Button>
    </div>
  )
};

export default BalanceDetails;
