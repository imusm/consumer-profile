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
    { title: 'Serial NO', dataIndex: 'SRNO', key: 'SRNO', width: 50, fixed:'left'},
    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 50, },
    { title: 'Old Refrence Number', dataIndex: 'ORN', key: 'ORN', width: 100, },
    { title: 'Refrence Number', dataIndex: 'REFNO', key: 'REFNO', width: 130, },
   
  ];
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getRnh = async () => {
    try {
      const response = await axios.get(`/rnh/${referenceNo}`)
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
                <button className="btn" onClick={getRnh}>GO</button>
                <button className="btn" onClick={() => {
                  const unit = "pt";
                  const size = "A3"; // Use A1, A2, A3 or A4
                  const orientation = "portrait"; // portrait or landscape

                  const marginLeft = 40;
                  const doc = new jsPDF(orientation, unit, size);

                  doc.setFontSize(20);

                  const title = "Refrence Number  Report";
                  const headers = [['Serial No','BMONTH', 'Old Refrence Number', 'Refrence Number']];

                  const data = consumerProfile.map(elt => [ elt.SRNO,elt.BMONTH,elt.ORN,elt.REFNO]);

                  let content = {
                    startY: 50,
                    head: headers,
                    body: data
                  };

                  doc.text(title, marginLeft, 40);
                  doc.autoTable(content);
                  doc.save("Rnh.pdf")
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
