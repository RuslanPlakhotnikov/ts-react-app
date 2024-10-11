import React, { useState, useEffect } from "react";
import { Modal, Backdrop, Fade, Button } from "@mui/material";

import { useAppSelector } from "hooks/storeUsage";
import { paymentSystems, amountOptions } from "utils/options";

import SelectArrow from "assets/iconComponents/SelectArrow";
import CloseIcon from "assets/iconComponents/CloseIcon";
import SuccessFieldIcon from "assets/iconComponents/SuccessFieldIcon";

import PaymentMethodSelect from "shared/PaymentMethodSelect";

import "./styles.scss";
import StyledTextField from "../StyledTextField";

interface IProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  defaultPaymentMethod?: string
}

const PaymentModal: React.FC<IProps> = ({ open, setOpen, defaultPaymentMethod }) => {
  const balance = useAppSelector(state => state.user.balance);
  const [paymentMethod, setPaymentMethod] = useState<string>(paymentSystems[0].value);
  const [amount, setAmount] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");

  useEffect(() => {
    if (defaultPaymentMethod && open) {
      setPaymentMethod(defaultPaymentMethod);
    }
  }, [defaultPaymentMethod, open]);

  const handleClose = () => {
    setOpen(false);
    setPaymentMethod(paymentSystems[0].value);
    setAmount("");
    setPromoCode("");
  };

  return (
    <Modal
      className="payment-modal"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 500 }
      }}
    >
      <Fade in={open}>
        <div className="payment-modal-content">
          <div className="modal-head">
            <Button className="back-btn" onClick={handleClose}>
              <SelectArrow />
              Back to Payment Method
            </Button>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div className="balance">
            Current Balance: <span>${balance}</span>
          </div>
          <PaymentMethodSelect value={paymentMethod} onChange={val => setPaymentMethod(val)} />
          <div className="section-label">Amount</div>
          <div className="amount-container">
            <StyledTextField
              placeholder="$100.00"
              value={amount ? `$${amount}` : ""}
              onChange={e => {
                const numericValue = e.target.value.replace(/[^0-9.]/g, "");
                setAmount(numericValue)
              }}
            />
            <div className="amount-options">
              {amountOptions.map(val => (
                <Button
                  key={val.value}
                  className="amount-item"
                  onClick={() => {
                    const newAmount = +val.value + +amount;
                    setAmount(`${newAmount || val.value}`)
                  }}
                >
                  {val.label}
                </Button>
              ))}
            </div>
            <div className="notice">
              From 21.00 to 906.00 USD at a time
            </div>
          </div>
          <div className="promo-box">
            <StyledTextField
              label="Promo Code"
              placeholder="Enter promo code here"
              value={promoCode}
              onChange={e => setPromoCode(e.target.value)}
              endAdornment={<SuccessFieldIcon />}
            />
            <Button className="apply-btn" disabled={!promoCode}>
              Apply
            </Button>
          </div>
          <Button className="confirm-btn" onClick={handleClose}>
            Confirm
          </Button>
        </div>
      </Fade>
    </Modal>
  )
}

export default PaymentModal;
