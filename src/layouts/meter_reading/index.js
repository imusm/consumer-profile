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
import axios from "axios-instance"
import { useRef, useState } from "react"
import { Table } from "antd"
import jsPDF from "jspdf";
import "jspdf-autotable";

function Tables() {
  const columns = [

    { title: 'BMONTH', dataIndex: 'BMONTH', key: 'BMONTH', width: 120, fixed: 'left' },
    { title: 'NAME', dataIndex: 'NAME', key: 'NAME', width: 120},
    { title: 'METERNO', dataIndex: 'METERNO', key: 'METERNO', width: 120, },
    { title: 'MF', dataIndex: 'MF', key: 'MF', width: 120},
    { title: 'STATUS', dataIndex: 'STATUS', key: 'STATUS', width: 120, },
    { title: 'MR DATE', dataIndex: 'MR DATE', width: 120, key: 'MR DATE' },
    { title: 'UNITSBILLED', dataIndex: 'UNITSBILLED', key: 'UNITSBILLED', width: 120, },
    { title: 'PRESENT READING KWH', dataIndex: 'PRESENTREADINGKWH', key: 'PRESENTREADINGKWH', width: 150, },
    { title: 'REFNO', dataIndex: 'REFNO', key: 'REFNO' ,width: 140,},
    { title: 'RUCODE', dataIndex: 'RUCODE', key: 'RUCODE', width: 120, },
    { title: 'METERPHASE', dataIndex: 'METERPHASE', key: 'METERPHASE', width: 140, },
    

  ];
  const [referenceNo, setReferenceNo] = useState("")
  const [show, setShow] = useState(false)
  const [consumerProfile, setConsumerProfile] = useState([{}])
  const onChangeShow = () => {
    setShow(!show)
  }
  const getBiilingParameter = async () => {
    try {
      const response = await axios.get(`/meter-reading/${referenceNo}`)
      setConsumerProfile(response.data)
      console.log('response', response.data)

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
                  Meter Reading
                </MDTypography>
              </MDBox>
              <CardContent>
                <TextField variant="outlined"
                  value={referenceNo}
                  onChange={(e) => setReferenceNo(e.target.value)}
                  required
                  label="Reference Number" />
                <TextField variant="outlined" label="Start Date" />
                <TextField variant="outlined" label="End Start" />
                <button className="btn" onClick={getBiilingParameter}>GO</button>
                <button className="btn" onClick={()=>{
      const unit = "pt";
      const size = "A3"; // Use A1, A2, A3 or A4
      const orientation = "portrait"; // portrait or landscape
  
      const marginLeft = 40;
      const doc = new jsPDF(orientation, unit, size);
  
      doc.setFontSize(20);
  
      const title = "Meter Reading Report";
      const headers = [['BMONTH','NAME','METER NO', 'MF', 'REFNO', 'STATUS','MR DATE','UNITS BILLED','PRESENT READING KWH','RUCODE','METER PHASE']];
  
      const data = consumerProfile.map(elt=> [elt.BMONTH,elt.NAME,elt.METERNO,elt.MF
        ,elt.REFNO,elt.STATUS,elt.MR_DATE,elt.UNITSBILLED,elt.PRESENTREADINGKWH,elt.RUCODE,elt.METERPHASE]);
  
      let content = {
        startY: 50,
        head: headers,
        body: data
      };
  
      doc.text(title, marginLeft, 40);
      doc.autoTable(content);
      doc.save("Meter Reading.pdf")
    }}>Generate Report</button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
     
       <Table dataSource={consumerProfile} columns={columns} scroll={{ x: 1300 }} />

    </DashboardLayout>
  )
}

export default Tables;
