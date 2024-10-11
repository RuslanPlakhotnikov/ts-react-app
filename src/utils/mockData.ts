import moment from "moment";

export enum TransactionStatus {
  Processing = "Processing",
  Active = "Active",
  Performed = "Performed"
}

export interface ITransaction {
  method: string;
  id: number;
  date: string;
  amount: number;
  status: TransactionStatus
}

export const transactions: ITransaction[] = [
  {
    method: "stic_pay",
    id: 142354,
    date: moment().set({ hour: 12, minutes: 0, seconds: 0 }).format(),
    amount: 23.05,
    status: TransactionStatus.Processing
  },
  {
    method: "stic_pay",
    id: 142353,
    date: moment().subtract(1, "days").set({ hour: 8, minutes: 20, seconds: 0 }).format(),
    amount: 103,
    status: TransactionStatus.Active
  },
  {
    method: "mastercard",
    id: 142352,
    date: moment().subtract(2, "days").set({ hour: 15, minutes: 45, seconds: 0 }).format(),
    amount: 103,
    status: TransactionStatus.Performed
  },
  {
    method: "piastrix",
    id: 142351,
    date: moment().subtract(5, "days").set({ hour: 3, minutes: 23, seconds: 0 }).format(),
    amount: 45.15,
    status: TransactionStatus.Performed
  },
  {
    method: "eth",
    id: 142350,
    date: moment().subtract(5, "days").set({ hour: 18, minutes: 5, seconds: 0 }).format(),
    amount: 0.1,
    status: TransactionStatus.Performed
  }
];