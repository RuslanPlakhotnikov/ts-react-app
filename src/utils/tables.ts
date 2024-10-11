import moment from "moment";
import { ITransaction } from "./mockData";
import { paymentSystems } from "./options";

export interface ITableColumn {
  label: string;
  sortKey?: string;
  getValue: (row: any) => any,
  getIcon?: (row: any) => string | undefined,
  style?: Record<string, string>,
  desktopOnly?: boolean,
  isMobileHeadColumn?: boolean
}

export const transactionsTableColumns: ITableColumn[] = [
  {
    label: "Operation Status",
    getValue: (row: ITransaction) => row.status,
    getIcon: (row: ITransaction) => paymentSystems.find(val => val.value === row.method)?.icon,
    isMobileHeadColumn: true
  },
  {
    label: "Withdraw",
    getValue: (row: ITransaction) => paymentSystems.find(val => val.value === row.method)?.label || "- - -",
    getIcon: (row: ITransaction) => paymentSystems.find(val => val.value === row.method)?.icon,
    sortKey: "method",
    style: { width: "165px" }
  },
  {
    label: "Transaction Number",
    getValue: (row: ITransaction) => row.id,
    style: { width: "127px" }
  },
  {
    label: "Payment Date",
    getValue: (row: ITransaction) => moment(row.date).format("DD.MM at hh:MM A"),
    sortKey: "date",
    style: { width: "165px" }
  },
  {
    label: "Amount Payed",
    getValue: (row: ITransaction) => `${row.amount} $`,
    sortKey: "amount",
    style: { width: "100px" }
  },
  {
    label: "Operation Status",
    getValue: (row: ITransaction) => row.status,
    sortKey: "status",
    style: { width: "108px" },
    desktopOnly: true
  }
];
