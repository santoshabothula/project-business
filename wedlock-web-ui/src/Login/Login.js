import { useState } from 'react';
import { Avatar, Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ActionButton from '../Components/Button/ActionButton';
import Input from '../Components/Input/Input';
import { login } from '../Store/Login/actions';
import './Login.scss';

const Login = () => {

    const defaultTheme = createTheme();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);

    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);

    const successCallback = () => {
        navigate('/')
    }

    const signIn = () => {
        dispatch(login(username, password, successCallback))
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm" className='login-container'>

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

                    <Typography component="h1" variant="h5"> Sign in </Typography>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        
                        <Input 
                            name='email'
                            label='Username / Email Address'
                            required={true}
                            value={username}
                            error={!usernameValid}
                            event={ (val) => {
                                setUsername(val)
                                setUsernameValid(val && val.trim().length > 0 ? true : false)
                            }}
                        />

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

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <ActionButton 
                            label={'Sign In'}
                            disabled={!(username.trim().length > 0 && password.trim().length > 0)}
                            sx={{ mt: 2, mb: 2 }}
                            event={signIn}
                        />
                       
                        <Grid container>
                            <Grid item xs>
                                <Link component={RouterLink} to="/forgotPassword" variant="body2">
                                Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to="/restration" variant="body2"> {"Don't have an account? Sign Up"} </Link>
                            </Grid>
                        </Grid>
                        
                    </Box>
                </Box>
               
            </Container>
        </ThemeProvider>
    )

}

export default Login