import { Avatar, Box, Container, CssBaseline, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ActionButton from "../../Components/Button/ActionButton";
import Input from "../../Components/Input/Input";
import { useState } from "react";
import RadioGroupButton from "../../Components/Radiobutton/RadioGroupButton";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useNavigate } from "react-router-dom";
import { register } from "../LoginService";

const Registration = () => {

    const defaultTheme = createTheme();

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [firstNameValid, setFirstNameValid] = useState(true);

    const [middleName, setMiddleName] = useState('');
    const [middleNameValid, setMiddleNameValid] = useState(true);

    const [lastName, setLastName] = useState('');
    const [lastNameValid, setLastNameValid] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);

    const [phoneNum, setPhoneNum] = useState('');
    const [phoneNumValid, setPhoneNumValid] = useState(true);

    const [gender, setGender] = useState('M');
    const [dob, setDOB] = useState('');

    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);

    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [confirmedPasswordValid, setConfirmedPasswordValid] = useState(true);

    const genderOptions = [{
        label: 'Male', value: 'M'
    },{
        label: 'Female', value: 'FM'
    },{
        label: 'Other', value: 'O'
    }]

    const callback = (isSuccess) => {
        alert(isSuccess ? 'User Registered Successfully' : 'User Registeration Failed!')
        if (isSuccess) navigate('/login')
    }

    const singnUp = () => {

        const user = {
            username: username,
            password: password,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            phone: phoneNum,
            gender: gender,
            dob: dob
        }

        console.log(user)
        register(user, callback)
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md"  className="login-container">
                <CssBaseline />

                <Box
                    sx={{
                        bgcolor: '#fff8ff',
                        marginTop: 5,
                        paddingTop: 3,
                        paddingBottom: 2,
                        paddingLeft: 4,
                        paddingRight: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: 6
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> <LockOutlinedIcon /> </Avatar>

                    <Typography component="h1" variant="h5"> Sign Up </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        
                            <Grid item xs={4}>
                                <Input
                                    name='firstName'
                                    label='First Name'
                                    required={true}
                                    value={firstName}
                                    error={!firstNameValid}
                                    event={ (val) => {
                                        setFirstName(val)
                                        setFirstNameValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Input
                                    name='middleName'
                                    label='Middle Name'
                                    required={true}
                                    value={middleName}
                                    error={!middleNameValid}
                                    event={ (val) => {
                                        setMiddleName(val)
                                        setMiddleNameValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Input
                                    name='lastName'
                                    label='Last Name'
                                    required={true}
                                    value={lastName}
                                    error={!lastNameValid}
                                    event={ (val) => {
                                        setLastName(val)
                                        setLastNameValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Input
                                    name='email'
                                    label='Email'
                                    type='email'
                                    required={true}
                                    value={email}
                                    error={!emailValid}
                                    event={ (val) => {
                                        setEmail(val)
                                        setEmailValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    name='phoneNum'
                                    label='Phone Number'
                                    type='number'
                                    required={true}
                                    value={phoneNum}
                                    error={!phoneNumValid}
                                    event={ (val) => {
                                        setPhoneNum(val)
                                        setPhoneNumValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} fullWidth>
                                        <DatePicker 
                                            label="Date Of Birth" 
                                            slotProps={{ textField: { fullWidth: true } }}
                                            onChange={(date) => setDOB(date.format('YYYY-MM-DD'))}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} sx={{mt:1}}>
                                <RadioGroupButton 
                                    groupId='gender'
                                    groupLabel='Gender'
                                    rowFormat={true}
                                    options={genderOptions}
                                    event={(val) => setGender(val) }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Input
                                    name='username'
                                    label='Username / Email'
                                    required={true}
                                    value={username}
                                    error={!usernameValid}
                                    event={ (val) => {
                                        setUsername(val)
                                        setUsernameValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    type="password"
                                    name='password'
                                    label='Password'
                                    required={true}
                                    value={password}
                                    error={!passwordValid}
                                    event={ (val) => {
                                        setPassword(val)
                                        setPasswordValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    type="password"
                                    name='confirmPassword'
                                    label='Confirm Password'
                                    required={true}
                                    value={confirmedPassword}
                                    error={!confirmedPasswordValid}
                                    event={ (val) => {
                                        setConfirmedPassword(val)
                                        setConfirmedPasswordValid(val && val.trim().length > 0 ? true : false)
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                <ActionButton
                                    color='secondary'
                                    label='Cancel'
                                    disabled={false}
                                    sx={{ mt: 2, mb: 2 }}
                                    event={() => navigate('/login')}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <ActionButton
                                    label='Sign Up'
                                    disabled={false}
                                    sx={{ mt: 2, mb: 2 }}
                                    event={singnUp}
                                />
                            </Grid>

                        </Grid>
                    </Box>

                    

                </Box>

            </Container>
        </ThemeProvider>
    )

}

export default Registration;