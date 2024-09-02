"use client";
import { useEffect, useRef } from "react";
import { createGrid } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const MyGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const gridOptions = {
        rowData: [
          { Subject: "Tesla", DueDate: "Due Date Y", Priority: 64950, Owner: true },
          { Subject: "Ford", DueDate: "F-Series", Priority: 33850, Owner: false },
        ],
        columnDefs: [
          {
            field: "Subject",
            checkboxSelection: true,
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
              values: [
                "Tesla", "Ford", "Toyota", "Mercedes", "Fiat", "Nissan", "Vauxhall", "Volvo", "Jaguar"
              ],
            },
          },
          { field: "DueDate" },
          { field: "Priority" },
          { field: "Owner" },
        ],
        defaultColDef: {
          filter: false, // Disable filtering
          floatingFilter: false, // Disable floating filter
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
  }, []);

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
