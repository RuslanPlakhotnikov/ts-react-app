
import Mastercard from "assets/images/paymentSystems/mastercard.png";
import Visa from "assets/images/paymentSystems/visa.png";
import Skrill from "assets/images/paymentSystems/skrill.png";
import PerfectMoney from "assets/images/paymentSystems/pm.png";
import Piastrix from "assets/images/paymentSystems/piastrix.png";
import Stricpay from "assets/images/paymentSystems/stricpay.png";
import Pin from "assets/images/paymentSystems/pin.svg";
import Bitcoin from "assets/images/paymentSystems/bitcoin.png";
import Eth from "assets/images/paymentSystems/eth.png";
import Tether from "assets/images/paymentSystems/tether.png";

// PAYMENT SYSTEMS

export enum PaymentSystemType {
  Card = "card",
  Crypto = "crypto"
}

export interface IPaymentOption {
  label: string;
  value: string;
  commission: number;
  icon: string;
  isPopular?: boolean;
  isTrusted?: boolean;
  type: PaymentSystemType;
}

export const paymentSystems: IPaymentOption[] = [
  {
    label: "Mastercard",
    value: "mastercard",
    icon: Mastercard,
    commission: 5,
    type: PaymentSystemType.Card
  },
  {
    label: "Visa",
    value: "visa",
    icon: Visa,
    commission: 5,
    type: PaymentSystemType.Card
  },
  {
    label: "Skrill",
    value: "skrill",
    icon: Skrill,
    commission: 0,
    type: PaymentSystemType.Card
  },
  {
    label: "Perfect Money, EUR",
    value: "perfect_money",
    icon: PerfectMoney,
    commission: 0,
    type: PaymentSystemType.Card
  },
  {
    label: "Piastrix, EUR",
    value: "piastrix",
    icon: Piastrix,
    commission: 0,
    type: PaymentSystemType.Card
  },
  {
    label: "SticPay",
    value: "stic_pay",
    icon: Stricpay,
    commission: 0,
    type: PaymentSystemType.Card
  },
  {
    label: "PIN",
    value: "pin",
    icon: Pin,
    commission: 1,
    type: PaymentSystemType.Card
  },
  {
    label: "BTC",
    value: "dtc",
    icon: Bitcoin,
    commission: 0,
    type: PaymentSystemType.Crypto
  },
  {
    label: "ETH",
    value: "eth",
    icon: Eth,
    commission: 0,
    type: PaymentSystemType.Crypto
  },
  {
    label: "USDT",
    value: "usdt",
    icon: Tether,
    commission: 0,
    type: PaymentSystemType.Crypto
  }
];

// PAYMENT AMOUNT

export interface IAmountOption {
  label: string;
  value: string;
}

export const amountOptions: IAmountOption[] = [
  { label: "+ $10", value: "10" },
  { label: "+ $20", value: "20" },
  { label: "+ $30", value: "30" },
  { label: "+ $50", value: "50" },
  { label: "+ $100", value: "100" }
];

// SORTING

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export interface ISortData {
  key: string;
  dir: SortDirection
}
