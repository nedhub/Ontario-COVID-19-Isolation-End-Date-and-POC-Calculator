
import React from 'react';
import { useEffect,useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { differenceInDays, parse, addDays, format } from "date-fns";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AuthProvider } from "./Auth";
import Signin from './Signin';
import { auth } from './fire';
import Input from '@material-ui/core/Input';
import {db} from './fire';
import {useSelector} from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import {reduxForm} from 'redux-form';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Gopal Manikumar, M.D.'}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heading: {
    textAlign: 'center',
  },
}));

export default function App() {

  // const counter = useSelector(state => state.counter);






  const [user, setUser] = useState(null)

  useEffect(() => { 
    const unsubscribe =   auth.onAuthStateChanged(userAuth=> {

      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if(userAuth){

        console.log(userAuth)
        setUser(user)
      } else {
      
        setUser(null)
      }

    })
    return unsubscribe

  }, [])













  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedDate2, setSelectedDate2] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange2 = (date2) => {
    setSelectedDate2(date2);
  };
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const handleCheckbox2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleCheckbox3 = (event) => {
    setChecked3(event.target.checked);
  };
  const handleClear = () => {
    setSelectedDate(null);
    setSelectedDate2(null);
  };
  function handleSubmit(event) {

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator,currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    console.log({formData});


    // db.collection("SurveyCollection").add({answer: "hello"});
      db.collection("SurveyCollection").doc("one").set(formData).then(() => {
        console.log("added");
      })




    event.preventDefault();
    console.log( selectedDate, selectedDate2); 
      var dubdays = differenceInDays(selectedDate, selectedDate2);
      console.log(dubdays);
      if (isNaN(dubdays) && checked2==false && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (isNaN(dubdays) && checked2==false && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (isNaN(dubdays) && checked2==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC from 48 hours after high risk exposure");
      } else if (isNaN(dubdays) && checked2==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC from 48 hours after high risk exposure");
      } else if (dubdays >= 0 && checked==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==false && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==false && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays < 0 && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays < 0 && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      };

}
  return (

    // <AuthProvider>



    
     


    user ? 
    
    
    
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.heading}>
          Ontario COVID-19 Isolation End Date and POC Calculator
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Input placeholder="Patient Name" id="patient-name-text"/>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          required={true}
          margin="normal"
          id="lab-collection-date"
          label="Lab Collection Date"
          format="dd MMM yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          onInput={ e=>setSelectedDate(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          rifmFormatter={val=> val.replace(/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi, '')}
          refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi} 
        />
      </Grid>
      
      <Grid container justify="space-around">
        <KeyboardDatePicker
          required={true}
          margin="normal"
          id="symptom-onset-date"
          label="Symptom Onset Date"
          format="dd MMM yyyy"
          value={selectedDate2}
          onChange={handleDateChange2}
          onInput={ e=>setSelectedDate2(e.target.value)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          rifmFormatter={val=> val.replace(/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi, '')}
          refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi} 
        />
      </Grid>
      <Grid className="checkboxlabel">
          <Checkbox
            id="symptoms-present-at-the-time-of-testing"
            checked={checked}
            onChange={handleCheckbox}
            name="checked"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Symptoms present at the time of testing</span>
        </Grid>
              <Grid className="checkboxlabel">
          <Checkbox
            id="high-risk-exposure-14-days-before-test-date"
            checked={checked2}
            onChange={handleCheckbox2}
            name="checked2"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>High risk exposure 14 days before test date</span>
        </Grid>
        <Grid className="checkboxlabel">
          <Checkbox
            id="immunocompromised"
            checked={checked3}
            onChange={handleCheckbox3}
            name="checked3"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>Immunocompromised</span>
        </Grid>
        
    </MuiPickersUtilsProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            SUBMIT
          </Button>
        </form>
        <Button
            type="clear"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { handleClear(); }}
          >
            CLEAR
          </Button>

          <Button
            type="clear"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container> : <Signin/>

   
    
  );
}