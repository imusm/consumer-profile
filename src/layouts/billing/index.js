/* eslint-disable */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { DataGrid } from '@mui/x-data-grid';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import * as React from 'react';
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Data
import { CardContent, TextField } from "@mui/material";
import "../dashboard/main.css";
import { useRef, useState, useEffect } from "react"
import axios from "axios-instance"
import { Table } from "antd"
import jsPDF from "jspdf";
import "jspdf-autotable";



function Tables() {

  const columns = [
    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 120, fixed: 'left' },
    { title: 'NAME', dataIndex: 'NAME', key: 'NAME', width: 120 },
    { title: 'CLFSCODE', dataIndex: 'CLFSCODE', width: 120, key: 'CLFSCODE' },
    { title: 'EDCODE', dataIndex: 'EDCODE', key: 'EDCODE', width: 120, },
    { title: 'FEEDERCODE', dataIndex: 'FEEDERCODE', key: 'FEEDERCODE', width: 120, },
    { title: 'METERNO', dataIndex: 'METERNO', key: 'METERNO', width: 120, },
    { title: 'METERPHASE', dataIndex: 'METERPHASE', key: 'METERPHASE', width: 120, },
    { title: 'REFNO', dataIndex: 'REFNO', key: 'REFNO', width: 120, },
    { title: 'SANLOAD', dataIndex: 'SANLOAD', key: 'SANLOAD', width: 120, },
    { title: 'STATUS', dataIndex: 'STATUS', key: 'STATUS', width: 120, },
    { title: 'TARRIFCODE', dataIndex: 'TARRIFCODE', key: 'TARRIFCODE', width: 120, },

  ];
  const ref = useRef(null)

  const [dates, setDates] = useState({ startDate: '', endDate: '' })
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getBiilingParameter = async () => {
    let apiRoute = `/billing-parameter/${referenceNo}`
    try {
      if (dates.startDate && dates.endDate) {
        apiRoute =`/billing-parameter/${referenceNo}?startDate=${dates.startDate}&endDate=${dates.endDate}`
      }
      const response = await axios.get(apiRoute)
      setConsumerProfile(response.data)

    } catch (error) {
      console.log("error", error)
    }

  }


  // const exportPDF = () => {
  //   const unit = "pt";
  //   const size = "A1"; // Use A1, A2, A3 or A4
  //   const orientation = "portrait"; // portrait or landscape

  //   const marginLeft = 40;
  //   const doc = new jsPDF(orientation, unit, size);

  //   doc.setFontSize(20);

  //   const title = "Billing Parameter Report";
  //   const headers = [["NAME", "BMONTH",'CLFSCODE', 'EDCODE', 'FEEDERCODE', 'METERNO', 'METERPHASE', 'REFNO', 'SANLOAD','STATUS','TARRIFCODE']];

  //   const data = consumerProfile.map(elt=> [elt.NAME, elt.BMONTH,elt.CLFSCODE,elt.ENCODE
  //     ,elt.FEEDERCODE,elt.METERNO,elt.METERPHASE,elt.REFNO,elt.SANLOAD,elt.STATUS,elt.TARRIFCODE]);

  //   let content = {
  //     startY: 50,
  //     head: headers,
  //     body: data
  //   };

  //   doc.text(title, marginLeft, 40);
  //   doc.autoTable(content);
  //   doc.save("report.pdf")
  // }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Billing Parameters
                </MDTypography>
              </MDBox>
              <CardContent>
                <TextField
                  variant="outlined"
                  value={referenceNo}
                  onChange={(e) => setReferenceNo(e.target.value)}
                  required
                  label="Reference Number" />
                <TextField variant="outlined" label="Start Date" onChange={(e) => setDates({ ...dates, startDate: e.target.value })} />
                <TextField variant="outlined" label="End Date" onChange={(e) => setDates({ ...dates, endDate: e.target.value })}/>
                <button className="btn" onClick={getBiilingParameter}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "portrait"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Billing Parameter Report";
                  const headers = [["NAME", "BMONTH", 'CLFSCODE', 'EDCODE', 'FEEDERCODE', 'METERNO', 'METERPHASE', 'REFNO', 'SANLOAD', 'STATUS', 'TARRIFCODE']];

                  const data = consumerProfile.map(elt => [elt.NAME, elt.BMONTH, elt.CLFSCODE, elt.EDCODE
                    , elt.FEEDERCODE, elt.METERNO, elt.METERPHASE, elt.REFNO, elt.SANLOAD, elt.STATUS, elt.TARRIFCODE]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Billing.pdf")
                }}>Generate Report</button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {/* <StickyHeadTable Data={consumerProfile[0]} Name1="Billing Month" Name2="Customer Name" Name3="Sub Batch" Name4="Meter Number" Name5="M.F" Name6="Status" Name7="San Load" Name8="Tariff Code" Name9="Feeder Code" Name10="ED CODE" Name11="CLFS CODE" /> */}
      {/* <Footer /> */}

       <Table dataSource={consumerProfile} columns={columns} scroll={{ x: 1300 }} /> 
      {/* {console.log("data1", consumerProfile)} */}

    </DashboardLayout>
  );
}

export default Tables;
