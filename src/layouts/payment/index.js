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
    { title: 'PAYMENT NO', dataIndex: 'PAYMENTNO', key: 'PAYMENTNO', width: 150, },
    { title: 'MAIN DATE', dataIndex: 'MAINDATE', key: 'MAINDATE', width: 160, },
    { title: 'REFNO', dataIndex: 'REFNO', key: 'REFNO', width: 160, },
    { title: 'PAYMENT DATE', dataIndex: 'PAYMENTDATE', key: 'PAYMENTDATE', width: 160, },
    { title: 'BANK CD', dataIndex: 'BANKCD', width: 150, key: 'BANKCD' },
    { title: 'CASH TYPE', dataIndex: 'CASHTYPE', key: 'CASHTYPE', width: 140, },
    { title: 'ED', dataIndex: 'ED', key: 'ED', width: 120, },
    { title: 'ITAX', dataIndex: 'ITAX', key: 'ITAX', width: 120, },
    { title: 'GST', dataIndex: 'GST', key: 'GST', width: 120, },
    { title: 'PTV', dataIndex: 'PTV', key: 'PTV', width: 120, },
    { title: 'ETAX', dataIndex: 'ETAX', key: 'ETAX', width: 120, },
    { title: 'FTAX', dataIndex: 'FTAX', key: 'FTAX', width: 120, },
    { title: 'SALES TAX', dataIndex: 'SALESTAX', key: 'SALESTAX', width: 120, },
    { title: 'EQSUR', dataIndex: 'EQSUR', key: 'EQSUR', width: 120, },
    { title: 'NJSUR', dataIndex: 'NJSUR', key: 'NJSUR', width: 120, },
    { title: 'LPSUR', dataIndex: 'LPSUR', key: 'LPSUR', width: 120, },
    { title: 'TOTAL', dataIndex: 'TOTAL', key: 'TOTAL', width: 120, },
  ];
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getPayment = async () => {
    try {
      const response = await axios.get(`/payments/${referenceNo}`)
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
                  Payment Details
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
                <button className="btn" onClick={getPayment}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "landscape"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Payment Details Report";
                  const headers = [['BMONTH', 'PAYMENT NO', 'MAINDATE', 'REF NO', 'PAYMENT DATE', 'BANK CODE', 'CASH TYPE', 'ED', 'ITAX', 'GST', 'PTV', 'ETAX', 'FTAX', 'SALES TAX', 'EQSUR', 'NJSUR', 'LPSUR', 'TOTAL']];

                  const data = consumerProfile.map(elt => [elt.BMONTH, elt.PAYMENTNO, elt.MAINDATE,elt.REFNO, elt.PAYMENTDATE
                    , elt.BANKCD, elt.CASHTYPE, elt.ED,elt.GST, elt.PTV,  elt.ITAX, elt.ETAX, elt.FTAX, elt.SALESTAX,elt.EQSUR,elt.NJSUR,elt.LPSUR ,elt.TOTAL]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Payment.pdf")
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
