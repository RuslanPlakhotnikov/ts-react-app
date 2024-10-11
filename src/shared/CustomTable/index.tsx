import React, { useState } from "react";
import { Button } from "@mui/material";

import { useAppSelector } from "hooks/storeUsage";
import { ITableColumn } from "utils/tables";

import "./styles.scss";

interface IColumn {
  icon?: string;
  labelColor?: string;
  label: any;
  value: string;
  style?: Record<string, string>;
}

const Column: React.FC<IColumn> = ({ icon, label, value, style, labelColor }) => {
  return (
    <div className="table-column" style={style || {}}>
      {icon && (
        <div className="img-box">
          <img src={icon} alt="" />
        </div>
      )}
      <div className="text-box">
        <div className="value" style={{ color: labelColor }}>{value}</div>
        <div className="label">{label}</div>
      </div>
    </div>
  )
}

interface ICustomTable {
  tableData: any[],
  columns: ITableColumn[]
}

const CustomTable: React.FC<ICustomTable> = ({ tableData, columns }) => {
  const clientWidth = useAppSelector(state => state.ui.clientWidth);
  const [showFullContent, setShowFullContent] = useState<boolean>(false);

  const rowHeight = clientWidth < 767 ? 121 : 85;

  return (
    <div className="custom-table-wrapper">
      <div
        className="table-content"
        style={{ height: `${showFullContent ? rowHeight * columns.filter(val => !val.isMobileHeadColumn).length : rowHeight * 3}px` }}
      >
        {tableData.map((row, i) => (
          <div key={i} className="table-row">
            {columns
              .filter(row => row.isMobileHeadColumn && clientWidth < 767)
              .map((column, index) => (
                <div key={index} className="full-width-column">
                  {column.getIcon && !!column.getIcon(row) && <img src={column.getIcon(row)} alt="" />}
                  <Column
                    value={column.getValue(row)}
                    label={column.label}
                    labelColor={column.getLabelColor && column.getLabelColor(row)}
                  />
                </div>
              ))}
            <div className="columns-list">
              {columns
                .filter(row => !row.isMobileHeadColumn && (clientWidth < 767 ? !row.desktopOnly : true))
                .map((column, index) => (
                  <Column
                    key={index}
                    value={column.getValue(row)}
                    icon={column.getIcon && column.getIcon(row)}
                    label={column.label}
                    style={column.style}
                    labelColor={column.getLabelColor && column.getLabelColor(row)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <Button className="show-more-btn" onClick={() => setShowFullContent(!showFullContent)}>
        {showFullContent ? "Show Less" : "Show More"}
      </Button>
    </div>
  )
};

export default CustomTable;
