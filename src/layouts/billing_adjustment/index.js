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
import { useRef, useState,useEffect } from "react"
import axios from "axios-instance"
import { Table } from "antd"
import jsPDF from "jspdf";
import "jspdf-autotable";


function Tables() {
  const columns = [
    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 120, fixed: 'left' },
    { title: 'ADJUSTMENTNO', dataIndex: 'ADJUSTMENTNO', key: 'ADJUSTMENTNO', width: 150, },
    { title: 'ADJUSTMENT NOTE NO', dataIndex: 'ADJUSTMENTNOTENO', key: 'ADJUSTMENTNOTENO', width: 180, },
    { title: 'REFNO', dataIndex: 'REFNO', key: 'REFNO', width: 140, },
    { title: 'ADJUSTMNET DATE', dataIndex: 'ADJUSTMNETDATE', width: 150, key: 'ADJUSTMNETDATE' },
    { title: 'POSTED WITH', dataIndex: 'POSTEDWITH', key: 'POSTEDWITH', width: 140, },
    { title: 'UNIT ADJUSTED', dataIndex: 'UNITADJUSTED', key: 'UNITADJUSTED', width: 150, },
    { title: 'ENERGY CHARGES', dataIndex: 'ENERGYCHARGES', key: 'ENERGYCHARGES', width: 140, },
    { title: 'ED', dataIndex: 'ED', key: 'ED', width: 120, },
    { title: 'ITAX', dataIndex: 'ITAX', key: 'ITAX', width: 120, },
    { title: 'ETAX', dataIndex: 'ETAX', key: 'ETAX', width: 120, },
    { title: 'FTAX', dataIndex: 'FTAX', key: 'FTAX', width: 120, },
    { title: 'GST', dataIndex: 'GST', key: 'GST', width: 120, },
    { title: 'TOTAL', dataIndex: 'TOTAL', key: 'TOTAL', width: 120, },
  ];
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getBiilingAdjustment = async () => {
    try {
      const response = await axios.get(`/adjustment/${referenceNo}`)
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
                  Billing Adjustment
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
                <button className="btn" onClick={getBiilingAdjustment}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "landscape"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Adjustment Details Report";
                  const headers = [['BMONTH', 'ADJUSTMENT NO', 'ADJUSTMENT NOTE NO', 'REF NO', 'ADJUSTMNET DATE', 'POSTED WITH', 'UNIT ADJUSTED', 'ENERGY CHARGES', 'ED', 'ITAX', 'ETAX', 'FTAX', 'GST', 'TOTAL']];

                  const data = consumerProfile.map(elt => [elt.BMONTH, elt.ADJUSTMENTNO, elt.ADJUSTMENTNOTENO, elt.REFNO
                    , elt.ADJUSTMNETDATE, elt.POSTEDWITH, elt.UNITADJUSTED, elt.ENERGYCHARGES, elt.ED, elt.ITAX,elt.ETAX,elt.FTAX,elt.GST,elt.TOTAL]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Aadjustments.pdf")
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
