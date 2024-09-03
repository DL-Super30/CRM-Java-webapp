"use client";
import { useEffect, useRef } from "react";
import { createGrid } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const MyGrid = ({ rowData, columnDefs }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const gridOptions = {
        rowData: rowData,
        columnDefs: columnDefs,
        defaultColDef: {
          filter: false,
          floatingFilter: false,
        },
        rowSelection: "multiple",
        suppressRowClickSelection: true,
        pagination: true,
        paginationPageSize: 10,
        paginationPageSizeSelector: false,
        onGridReady: (params) => {
          params.api.sizeColumnsToFit();
        },
      };

      const gridApi = createGrid(gridRef.current, gridOptions);

      return () => {
        if (gridApi) {
          gridApi.destroy();
        }
      };
    }
  }, [rowData, columnDefs]);

  return (
    <div
      id="myGrid"
      ref={gridRef}
      className="ag-theme-quartz"
      style={{ width: "100%", height: "600px" }}
    />
  );
};

export default MyGrid;
