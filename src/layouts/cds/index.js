/* eslint-disable */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Data
import { CardContent, TextField } from "@mui/material";
import { Row, Col } from "antd"
import "../dashboard/main.css";
import { useRef, useState, useEffect } from "react"
import axios from "axios-instance"
import { Table } from "antd"
import jsPDF from "jspdf";
import "jspdf-autotable";


function Tables() {
  const columns = [
    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 120, fixed: 'left' },
    { title: 'MDI CHARGED', dataIndex: 'MDICHARGED', key: 'MDICHARGED', width: 150, },
    { title: 'KWH READING', dataIndex: 'KWHREADING', key: 'KWHREADING', width: 160, },
    { title: 'REF NO', dataIndex: 'REFNO', key: 'REFNO', width: 160, },
    { title: 'MF', dataIndex: 'MF', key: 'MF', width: 160, },
    { title: 'STATUS', dataIndex: 'STATUS', width: 150, key: 'STATUS' },
    { title: 'ADJUSTED', dataIndex: 'ADJUSTED', key: 'ADJUSTED', width: 140, },
    { title: 'PF', dataIndex: 'PF', key: 'PF', width: 120, },
    { title: 'LF', dataIndex: 'LF', key: 'LF', width: 120, },
    { title: 'OPENING BALANCE', dataIndex: 'OPBAL', key: 'OPBAL', width: 150, },
    { title: 'BILLING', dataIndex: 'BILLING', key: 'BILLING', width: 120, },
    { title: 'FPA', dataIndex: 'FPA', key: 'FPA', width: 120, },
    { title: 'PAYMENT', dataIndex: 'PAYMENT', key: 'PAYMENT', width: 120, },
    { title: 'LPS', dataIndex: 'LPS', key: 'LPS', width: 120, },
    { title: 'CLOSING BALANCE', dataIndex: 'CLOSINGBAL', key: 'CLOSINGBAL', width: 140, },
    { title: 'AGENCYBAL', dataIndex: 'AGENCYBAL', key: 'AGENCYBAL', width: 120, },
    { title: 'RECIEVEABLE', dataIndex: 'RECIEVEABLE', key: 'RECIEVEABLE', width: 120, },
  ];
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getCustomer = async () => {
    try {
      const response = await axios.get(`/customer-data/${referenceNo}`)
      setConsumerProfile(response.data)
      console.log('response', response.data)

    } catch (error) {
      console.log("error", error)
    }
    onChangeShow();
  }

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
                  Customer Data Summary
                </MDTypography>
              </MDBox>
              <CardContent>
                <TextField
                  variant="outlined"
                  value={referenceNo}
                  onChange={(e) => setReferenceNo(e.target.value)}
                  required
                  label="Reference Number"
                />
                <TextField variant="outlined" label="Start Date" />
                <TextField variant="outlined" label="End Start" />
                <button className="btn" onClick={getCustomer}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "landscape"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Customer Data Report";
                  const headers = [['BMONTH', 'KWHREADING', 'REF NO', 'MDICHARGED', 'MF', 'STATUS','ADJUSTED', 'PF', 'LF', 'OPBAL', 'BILLING', 'FPA', 'PAYMENT','LPS','CLOSINGBAL', 'AGENCYBAL', 'RECIEVEABLE']];

                  const data = consumerProfile.map(elt => [elt.BMONTH, elt.MDICHARGED, elt.KWHREADING,elt.REFNO, elt.MF
                    , elt.STATUS, elt.ADJUSTED, elt.PF,elt.OPBAL, elt.BILLING,  elt.LF, elt.FPA, elt.PAYMENT, elt.LPS,elt.CLOSINGBAL,elt.AGENCYBAL,elt.RECIEVEABLE]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Customer Data.pdf")
                }}>Generate Report</button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {show == true ? <Table dataSource={consumerProfile} columns={columns} scroll={{ x: 1300 }} /> : null}
    </DashboardLayout>
  );
}


export default Tables;
