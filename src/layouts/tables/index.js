// /* eslint-disable */
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
// import { CardContent, Container, TextField } from "@mui/material";
// import "../dashboard/main.css";
// import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";

// function Tables() {
//   const { columns, rows } = authorsTableData();
//   const { columns: pColumns, rows: pRows } = projectsTableData();

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Consumer Basic Profile
//                 </MDTypography>
//               </MDBox>
//               <CardContent>
//                 <TextField variant="outlined" label="Reference Number" />
//                 <TextField variant="outlined" label="Start Date" />
//                 <TextField variant="outlined" label="End Start" />
//                 <button className="btn">Go</button>
//                 <button className="btn">Print</button>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <MDBox pt={6} pb={3}>
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>Mark</td>
//               <td>Otto</td>
//               <td>@mdo</td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>Jacob</td>
//               <td>Thornton</td>
//               <td>@fat</td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td colSpan={2}>Larry the Bird</td>
//               <td>@twitter</td>
//             </tr>
//           </tbody>
//         </Table>
//       </MDBox>
//       {/* <Footer /> */}
//     </DashboardLayout>
//   );
// }

// export default Tables;
