import React from 'react';
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BackToTop from "./BackToTop";
// import Footer from "./Footer";
import Navbar from "./Navbar";
import Pagetitle from "./Pagetitle";
// import { Customers } from '../data/Customers';


function List({ columns , rows, getRowHeight}) {
  return (
    <div className="vh-100">
      <main id="main">
        <Navbar />
        <Pagetitle page="Customers" />
        <section className="section">
          <div className="card">
            <div className="card-body pt-4 d-flex flex-column align-items-center">
              <Box
                m="15px 0 0 0"
                width="100%"
                sx={{
                  "& .MuiDataGrid-root": {
                    borderTop: "0",
                    borderLeft: "0",
                    borderRight: "0",
                    fontFamily: "Nunito",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                    fontSize: "15px",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    color: "#012970",
                    fontSize: "20px",
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    display: "flex",
                    alignItems: "end",
                  },
                  "& .MuiCheckbox-root": {
                    color: "pink",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    display: "none",
                  },
                }}
              >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  getRowHeight = {getRowHeight}
                />
              </Box>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
      <BackToTop />
    </div>
  )
}

export default List