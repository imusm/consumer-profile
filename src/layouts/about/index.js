// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
function Tables() {
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
                  About Us
                </MDTypography>
              </MDBox>
         <p style={{margin:"5px",padding:"5px"}}>Power Information Technology Company (PITC) is the leading power sector IT Company in Pakistan. It is involved in all software development activities including design, development, testing, implementation and documentation of the developed applications. Being an organ of Ministry of Water & Power the Company is solely responsible to provide billing & other allied software support to ten (10) power distribution companies of Pakistan (DISCOs).

</p><p style={{margin:"5px",padding:"5px"}}>Journey from a true public sector entity to a modern corporatized business integrator has opened new horizons for us; dimensions like remote metering, SMS based services mobile IT Resource Centre,on-site billing, exploiting Internet power for customer care are just few examples. The major motivation visualized by PITC is the best customer care and adequate billing software and other allied IT support to all power distribution companies of country except KESC. PITC is managing this mandate through an in-house developed billing system. PITC also provides technical consultancy and other ICT support to various subsidiaries of PEPCO and WAPDA. Company has some of the latest hardware facilities at disposal of a team comprising of highly qualified, skilled, and experienced human resource enthusiast to deliver and capitalize on its legacies.
</p>

            </Card>
          </Grid>
         
        </Grid>
      </MDBox>
     
    </DashboardLayout>
  );
}

export default Tables;
