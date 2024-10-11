import React, { useState } from "react";
import { Button } from "@mui/material";

import { IPaymentOption, ISortData, paymentSystems, PaymentSystemType, SortDirection } from "utils/options";
import { transactionsTableColumns } from "utils/tables";
import { ITransaction, transactions } from "utils/mockData";

import SortIcon from "assets/iconComponents/SortIcon";
import SuccessFieldIcon from "assets/iconComponents/SuccessFieldIcon";

import PaymentModal from "shared/PaymentModal";
import PaymentItem from "shared/PaymentItem";
import StyledTextField from "shared/StyledTextField";
import SortPopover from "shared/SortPopover";
import CustomTable from "shared/CustomTable";

import "./styles.scss";

const sortTable = (sortData: ISortData, tableData: ITransaction[]) => {
  return tableData.sort((a, b) => {
    let compareResult = 0;

    if (sortData.key === "date") {
      compareResult = new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (typeof a[sortData.key as keyof ITransaction] === "number") {
      compareResult = +a[sortData.key as keyof ITransaction] - +b[sortData.key as keyof ITransaction];
    } else {
      compareResult = (a[sortData.key as keyof ITransaction] as string).localeCompare(b[sortData.key as keyof ITransaction] as string);
    }

    return sortData.dir === SortDirection.DESC ? -compareResult : compareResult;
  })
};

const Deposit = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
  const [openSortPopover, setOpenSortPopover] = useState<HTMLButtonElement | null>(null);
  const [sortData, setSortData] = useState<ISortData>({
    key: "date",
    dir: SortDirection.ASC
  });
  const [tableData, setTableData] = useState<ITransaction[]>(sortTable(sortData, transactions));

  const handleSelectPayment = (option: IPaymentOption) => {
    setSelectedPaymentMethod(option.value);
    setOpenPaymentModal(true);
  };

  const handleSort = (data: ISortData) => {
    setSortData(data);
    setTableData(sortTable(data, transactions));
  };

  return (
    <div className="deposit-page">
      <div className="section-title">Make a Deposit</div>
      <div className="page-sub-section">
        <div className="sub-section-title">Choose payment method</div>
        <div className="options-section">
          <div className="options-section-title">Cards, e-money, PIN</div>
          <div className="options-list">
            {paymentSystems.filter(val => val.type === PaymentSystemType.Card).map(val => (
              <PaymentItem key={val.value} data={val} onClick={() => handleSelectPayment(val)}/>
            ))}
          </div>
        </div>
        <div className="options-section">
          <div className="options-section-title">Cryptocurrency</div>
          <div className="options-list">
            {paymentSystems.filter(val => val.type === PaymentSystemType.Crypto).map(val => (
              <PaymentItem key={val.value} data={val} onClick={() => handleSelectPayment(val)}/>
            ))}
          </div>
        </div>
      </div>
      <div className="page-sub-section">
        <div className="sub-section-title">Have A Promo Code?</div>
        <div className="promo-code-box">
          <StyledTextField
            label="Enter promo code here. It will activate a special bonus!"
            placeholder="Enter promo code here"
            endAdornment={<SuccessFieldIcon />}
          />
          <Button className="apply-btn">
            Apply
          </Button>
        </div>
      </div>
      <div className="transaction-section">
        <div className="section-title">
          Last Transactions
          <Button className="sort-btn" onClick={e => setOpenSortPopover(e.currentTarget)}>
            <SortIcon />
          </Button>
          <SortPopover
            open={openSortPopover}
            setOpen={setOpenSortPopover}
            sortData={sortData}
            onSort={handleSort}
            columns={transactionsTableColumns}
          />
        </div>
        <CustomTable columns={transactionsTableColumns} tableData={tableData} />
      </div>
      <PaymentModal
        open={openPaymentModal}
        setOpen={setOpenPaymentModal}
        defaultPaymentMethod={selectedPaymentMethod}
      />
    </div>
  )
};

export default Deposit;
