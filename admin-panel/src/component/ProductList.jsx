import React from "react";
import { Products } from "../data/Products";
import { Box } from "@mui/material";
import List from "./List";

const ProductList = () => {
  const rows = Products;
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "preview",
      headerName: "Preview",
      renderCell: (params) => (
        <img src={params.value} style={{ maxWidth: "75px", borderRadius: "5px", margin: "5px"}} />
      ),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
  ];

  const getRowHeight = () => 100;
  return <List columns={columns} rows={rows} getRowHeight={getRowHeight} />;
};

export default ProductList;
