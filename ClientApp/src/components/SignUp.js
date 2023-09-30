import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUp() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Initialize error variables
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let passwordError = '';
    // Validate each field separately
    if (!firstName) {
      firstNameError = 'First Name is required.';
    }
    if (!lastName) {
      lastNameError = 'Last Name is required.';
    }
    if (!email || !isValidEmail(email)) {
      emailError = 'Email is required and must be a valid email address.';
    }
    if (!password || password.length < 8) {
      passwordError = 'Password is required and must be at least 8 characters long.';
    }
      // Update the error state variables
    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    if (firstNameError || lastNameError || emailError || passwordError) {
      // If there are errors, return and do not proceed with form submission
      return;
    }
    // If all validations pass, you can proceed with form submission or other actions
    console.log({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    // Perform further actions like submitting the form data to a server
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={Boolean(firstNameError)}
                helperText={firstNameError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={Boolean(lastNameError)}
                helperText={lastNameError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(emailError)}
                helperText={emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
export {SignUp};
