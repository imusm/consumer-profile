/* eslint-disable */
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import MDBox from "components/MDBox"
import MDTypography from "components/MDTypography"
import Pdf from "react-to-pdf";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"

// Data
import { CardContent, TextField } from "@mui/material"
import "../dashboard/main.css"
import "bootstrap/dist/css/bootstrap.css"
import { useRef, useState } from "react"
import { Row, Col } from "antd"
import axios from "axios-instance"
import { height, margin } from "@mui/system";

function Tables() {
    const ref = useRef(null)
    const [referenceNo, setReferenceNo] = useState("")
    const [show, setShow] = useState(false)
    const [consumerProfile, setConsumerProfile] = useState({})
    const onChangeShow = () => {
        setShow(!show)
    }
    const getConsumerProfile = async () => {
        try {
            const response = await axios.get(`/address/${referenceNo}`)
            setConsumerProfile({ ...response.data[0] })
            console.log("response",response)
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
                                    Consumer Basic Profile
                                </MDTypography>
                            </MDBox>
                            <CardContent>
                                <TextField
                                    required
                                    variant="outlined"
                                    value={referenceNo}
                                    onChange={(e) => setReferenceNo(e.target.value)}
                                    label="Reference Number"
                                />
                                {/* <TextField variant="outlined" label="Start Date" />
                                <TextField variant="outlined" label="End Start" /> */}

                                <button className="btn btn-success" onClick={getConsumerProfile}>Go</button>
                                <Pdf targetRef={ref} filename="Consumer Profile.pdf" options={{
                                    orientation: 'landscape',
                                    unit: 'in',
                                    format: [10, 11]
                                }} x={1.2} y={1.3} scale={0.8} >

                                    {({ toPdf }) => <button className="btn"  onClick={toPdf}>Generate Pdf</button>

                                    }

                                </Pdf>
                            


                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
            {show == true ? <MDBox  pt={6} pb={3} ref={ref}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Row align="center">
                                    <Col>
                                        <Row gutter={[15, 15]} style={{ marginTop: "10px" }}>
                                            <Col>
                                                <TextField value={consumerProfile?.REFNO} InputLabelProps={{ shrink: true }} variant="outlined" label="Refrence Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.BMONTH} InputLabelProps={{ shrink: true }} variant="outlined" label="Bill Month" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NAME} InputLabelProps={{ shrink: true }} variant="outlined" label="Name" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.FNAME} InputLabelProps={{ shrink: true }} variant="outlined" label="Father Name" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CONTACTNO} InputLabelProps={{ shrink: true }} variant="outlined" label="Contact Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.ADDR1} InputLabelProps={{ shrink: true }} variant="outlined" label="Address 1" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.ADDR2} InputLabelProps={{ shrink: true }} variant="outlined" label="Address 2" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CORPNAME} InputLabelProps={{ shrink: true }} variant="outlined" label="Corporate Name" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CONDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Connenction Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SEASONCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Seasonal Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SEASONAGE} InputLabelProps={{ shrink: true }} variant="outlined" label="Seasonal Age" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.FATAPATACD} InputLabelProps={{ shrink: true }} variant="outlined" label="Fata Pata Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.ITEXEMPTCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Income Tax Exemption Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.ETEXEMPTCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Extra Tax Exemption Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.METERRENT} InputLabelProps={{ shrink: true }} variant="outlined" label="Meter Rent" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SERVICERENT} InputLabelProps={{ shrink: true }} variant="outlined" label="Service Rent" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.METERPHASE} InputLabelProps={{ shrink: true }} variant="outlined" label="Meter Phase" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.FEEDERNAME} InputLabelProps={{ shrink: true }} variant="outlined" label="Feeder Name" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.FEEDERCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Feeder Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TRANSFRMCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Transformer Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TADDRESS} InputLabelProps={{ shrink: true }} variant="outlined" label="Transformer Address" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.WEMPBPSCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Wapda Employee BPS Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.WEMPNAMECD} InputLabelProps={{ shrink: true }} variant="outlined" label="Wapda Employee Name" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.WEMPDEPCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Wapda Employee Department Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.WEMPEPFNO} InputLabelProps={{ shrink: true }} variant="outlined" label="Wapda Employee EPF Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.WEMPBALUNIT} InputLabelProps={{ shrink: true }} variant="outlined" label="Wapda Employee Balance Units" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CONTEXPDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Contract Expiry Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.APPLDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Application Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SECDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Security Amount Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SECAMNT} InputLabelProps={{ shrink: true }} variant="outlined" label="Security Amount" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NICNO} InputLabelProps={{ shrink: true }} variant="outlined" label="NIC Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.EMAILADDR} InputLabelProps={{ shrink: true }} variant="outlined" label="Email Address" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NOOFAC} InputLabelProps={{ shrink: true }} variant="outlined" label="No. Of ACs" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NOOFTV} InputLabelProps={{ shrink: true }} variant="outlined" label="NO. Of TVs" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NTNNO} InputLabelProps={{ shrink: true }} variant="outlined" label="National Tax Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.STRNNO} InputLabelProps={{ shrink: true }} variant="outlined" label="Sale Tax Return Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NOOFBOOSTER} InputLabelProps={{ shrink: true }} variant="outlined" label="No. Of Boosters" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.NOOFPOLES} InputLabelProps={{ shrink: true }} variant="outlined" label="No. Of Poles" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CURSTATUS} InputLabelProps={{ shrink: true }} variant="outlined" label="Current Status" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DEFALTLEVEL} InputLabelProps={{ shrink: true }} variant="outlined" label="Defaulter Level" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DEFALTAGE} InputLabelProps={{ shrink: true }} variant="outlined" label="Defaulter Age" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DCNISSUENO} InputLabelProps={{ shrink: true }} variant="outlined" label="Disconnection Notice Issue Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DCNISSUEDAT} InputLabelProps={{ shrink: true }} variant="outlined" label="Disconnection Notice Issue Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DCNEXEDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Disconnection Notice Execution Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DISCAGE} InputLabelProps={{ shrink: true }} variant="outlined" label="Disconnection Age" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SAMEAGE} InputLabelProps={{ shrink: true }} variant="outlined" label="Same to Same Age" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.KWHDEFAGE} InputLabelProps={{ shrink: true }} variant="outlined" label="KWH Defective Age" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TOTDEFFERED} InputLabelProps={{ shrink: true }} variant="outlined" label="Total Defferred NO" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TOTINST} InputLabelProps={{ shrink: true }} variant="outlined" label="Total Installments" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.REMINST} InputLabelProps={{ shrink: true }} variant="outlined" label="Remaining Installments" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.LASTDISCDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Last Disconnection Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.LASTRCODATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Last Reconnection Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.LASTDEFDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Last Defective Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.LASTREPDATE} InputLabelProps={{ shrink: true }} variant="outlined" label="Last Replacement Date" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DEFTIMES} InputLabelProps={{ shrink: true }} variant="outlined" label="Defective Times" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.REPTIMES} InputLabelProps={{ shrink: true }} variant="outlined" label="Replacement Times" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DEFREMTIMES} InputLabelProps={{ shrink: true }} variant="outlined" label="Defferred Times" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.AGRMOTORCD} InputLabelProps={{ shrink: true }} variant="outlined" label="Agriculture Motor Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TVEXEMPTCD} InputLabelProps={{ shrink: true }} variant="outlined" label="TV Exemption Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.UNIQKEY} InputLabelProps={{ shrink: true }} variant="outlined" label="Unique Key" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.ORN} InputLabelProps={{ shrink: true }} variant="outlined" label="Old Reference Number" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.GPSLONG} InputLabelProps={{ shrink: true }} variant="outlined" label="GPS Longitude" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.GPSLATI} InputLabelProps={{ shrink: true }} variant="outlined" label="GPS Lattitude" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TARIFFA} InputLabelProps={{ shrink: true }} variant="outlined" label="Tariff" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.SLOADA} InputLabelProps={{ shrink: true }} variant="outlined" label="Sanction Load" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.CLOADA} InputLabelProps={{ shrink: true }} variant="outlined" label="Connected Load" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.RUCDA} InputLabelProps={{ shrink: true }} variant="outlined" label="Rural Urban Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.STDCLSFCDA} InputLabelProps={{ shrink: true }} variant="outlined" label="Standard Classification Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.TOTKWHMTRA} InputLabelProps={{ shrink: true }} variant="outlined" label="Total KWH Meter" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.DGCDA} InputLabelProps={{ shrink: true }} variant="outlined" label="Govt. Department Code" />
                                            </Col>
                                            <Col>
                                                <TextField value={consumerProfile?.EDCDA} InputLabelProps={{ shrink: true }} variant="outlined" label="Electricity Duty Code" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
                : null}
        </DashboardLayout>
    )
}

export default Tables
