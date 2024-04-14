import { BottomNavigation, BottomNavigationAction, Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from "react";
import ProfileImageList from "./View/ProfileImageList";

const ViewProfile = () => {

    const [bottomNav, setBottomNav] = useState(0);
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        'Overview',
        'Personal Details',
        'Appearance',
        'Lifestyle',
        'Background / Cultural Values'
    ];

    return(
        <>
            <Box sx={{ p: 3 }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))
                }
                </Stepper>

                {
                    activeStep === 0 && <ProfileImageList />
                }
                

            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={bottomNav}
                    onChange={(event, newValue) => {
                        setBottomNav(newValue);
                    }}
                >
                    <BottomNavigationAction label="Previous" icon={<KeyboardDoubleArrowLeftIcon />} />
                    <BottomNavigationAction label="Next" icon={<KeyboardDoubleArrowRightIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    )
}

export default ViewProfile;