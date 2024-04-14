import { useState } from "react";
import { Avatar, Box, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from "../../Components/Input/Input";
import ActionButton from "../../Components/Button/ActionButton";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const defaultTheme = createTheme();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);

    const resetPassword = () => {}

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm" className="login-container">

                <CssBaseline />

                <Box
                    sx={{
                        bgcolor: '#fff8ff',
                        marginTop: 8,
                        paddingTop: 3,
                        paddingBottom: 3,
                        paddingLeft: 4,
                        paddingRight: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 6
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /> </Avatar>

                    <Typography component="h1" variant="h5"> Reset Password </Typography>
    
                    <Input 
                        name='email'
                        label='Email Address'
                        required={true}
                        value={email}
                        error={!emailValid}
                        event={ (val) => {
                            setEmail(val)
                            setEmailValid(val && val.trim().length > 0 ? true : false)
                        }}
                    />

                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={3}>
                            <ActionButton
                                color='secondary'
                                label='Cancel'
                                disabled={false}
                                sx={{ mt: 2, mb: 2 }}
                                event={() => navigate('/login')}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <ActionButton
                                label={'Reset Password'}
                                disabled={!(email.trim().length > 0 && email.trim().length > 0)}
                                sx={{ mt: 2, mb: 2 }}
                                event={resetPassword}
                            />
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default ForgotPassword;