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
import "../dashboard/main.css";

import { useRef, useState, useEffect } from "react"
import axios from "axios-instance"
import { Table } from "antd"
import jsPDF from "jspdf";
import "jspdf-autotable";

function Tables() {
  const columns = [
    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 120, fixed: 'left' },
    { title: 'STATUS', dataIndex: 'STATUS', key: 'STATUS', width: 120, },
    { title: 'TARRIFCODE', dataIndex: 'TARRIFCODE', key: 'TARRIFCODE', width: 120, },
    { title: 'REFNO', dataIndex: 'REFNO', key: 'REFNO', width: 140, },
    { title: 'OPENINGBAL', dataIndex: 'OPENINGBAL', width: 120, key: 'OPENINGBAL' },
    { title: 'BILLING', dataIndex: 'BILLING', key: 'BILLING', width: 120, },
    { title: 'BILLEDUNIT', dataIndex: 'BILLEDUNIT', key: 'BILLEDUNIT', width: 120, },
    { title: 'INSTALLMENT', dataIndex: 'INSTALLMENT', key: 'INSTALLMENT', width: 120, },
    { title: 'TOTALPAYABLE', dataIndex: 'TOTALPAYABLE', key: 'TOTALPAYABLE', width: 120, },
    { title: 'TOTALRECIEVEABLE', dataIndex: 'TOTALRECIEVEABLE', key: 'TOTALRECIEVEABLE', width: 120, },
  ];
  const [dates, setDates] = useState({ startDate: '', endDate: '' })
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getBiilingDetails = async () => {
    let apiRoute = `/billing-details/${referenceNo}`
    try {
      if (dates.startDate && dates.endDate) {
        apiRoute = `/billing-details/${referenceNo}?startDate=${dates.startDate}&endDate=${dates.endDate}`
      }
      const response = await axios.get(apiRoute)
      setConsumerProfile(response.data)

    } catch (error) {
      console.log("error", error)
    }
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
                  Billing Details
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
                <TextField variant="outlined" label="Start Date" onChange={(e) => setDates({ ...dates, startDate: e.target.value })} />
                <TextField variant="outlined" label="End Start" onChange={(e) => setDates({ ...dates, endDate: e.target.value })} />
                <button className="btn" onClick={getBiilingDetails}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "portrait"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Billing Details Report";
                  const headers = [['BMONTH', 'STATUS', 'TARRIF CODE', 'REF NO', 'OPENING BALENCE', 'BILLING', 'BILLED UNIT', 'INSTALLMENT', 'TOTAL PAYABLE', 'TOTAL RECIEVEABLE']];

                  const data = consumerProfile.map(elt => [elt.BMONTH, elt.STATUS, elt.TARRIFCODE, elt.REFNO
                    , elt.OPENINGBAL, elt.BILLING, elt.BILLEDUNIT, elt.INSTALLMENT, elt.TOTALPAYABLE, elt.TOTALRECIEVEABLE]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Details.pdf")
                }}>Generate Report</button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
     <Table dataSource={consumerProfile} columns={columns} scroll={{ x: 1300 }} />
    </DashboardLayout>
  );
}

export default Tables;
