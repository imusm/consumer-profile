/* eslint-disable */
import React ,{useState} from "react"
import Chart from "react-apexcharts";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {Row,Col} from "antd"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import "./lineChart.css"

function Report(){
    const[chart,setChart]=useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ],
          labels: ['A', 'B', 'C', 'D', 'E']
        
    })
    return(
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
                    Reports
                  </MDTypography>
                </MDBox>
           <div className="linechart">
                <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              width="700"
            />
            </div>
            <div className="chart_name">
            <MDTypography variant="h6" color="Black" >
                    LineChart
                  </MDTypography>
                  </div>
            <div className="linechart">
             <Chart
            
              options={chart.options}
              series={chart.series}
              type="line"
              width="700"
            />
         </div>
            
                </Card>
              
                </Grid>
                </Grid>
                </MDBox>
                </DashboardLayout>

    )
}
export default Report;