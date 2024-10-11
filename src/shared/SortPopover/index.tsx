import React from "react";
import { Button, Popover } from "@mui/material";

import { ISortData, SortDirection } from "utils/options";
import { ITableColumn } from "utils/tables";

import SelectArrow from "assets/iconComponents/SelectArrow";

import "./styles.scss";

interface IProps {
  open: HTMLButtonElement | null,
  setOpen: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>,
  sortData: ISortData,
  onSort: (val: ISortData) => void,
  columns: ITableColumn[]
}

const SortPopover: React.FC<IProps> = (
  {
    open,
    setOpen,
    sortData,
    onSort,
    columns
  }
) => {
  const handleSelect = (key: string, dir: SortDirection) => {
    setOpen(null);
    onSort({ key, dir });
  };

  return (
    <Popover
      className="sort-popover"
      open={!!open}
      anchorEl={open}
      onClose={() => setOpen(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: -160
      }}
    >
      <div className="popover-title">Sort By:</div>
      {columns.filter(val => !!val.sortKey).map((val, i) => (
        <div key={i} className="sort-item">
          {val.label}
          <div className="dir-buttons">
            <Button
              className={`desc ${sortData.key === val.sortKey && sortData.dir === SortDirection.DESC ? "active" : ""}`}
              onClick={() => handleSelect(val.sortKey as string, SortDirection.DESC)}
            >
              <SelectArrow/>
            </Button>
            <Button
              className={`asc ${sortData.key === val.sortKey && sortData.dir === SortDirection.ASC ? "active" : ""}`}
              onClick={() => handleSelect(val.sortKey as string, SortDirection.ASC)}
            >
              <SelectArrow/>
            </Button>
          </div>
        </div>
      ))}
    </Popover>
  )
}

  export default SortPopover;
