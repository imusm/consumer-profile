/* eslint-disable */
import React from 'react'
import { Card, CardContent, Typography, TextField } from '@mui/material';
import './main.css';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
const main = () => {
    return (
        <>

            <Card className='card'>
                
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
                  Enter Reference Number
                </MDTypography>
              </MDBox>
                  
                    <CardContent>
                        <TextField id="outlined-basic" label="Reference Number" variant="outlined" />
                        <button className='btn'>GO</button>
                    </CardContent>
                
            </Card>
            
        </>
        
    )
}

export default main