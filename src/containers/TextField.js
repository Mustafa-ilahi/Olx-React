import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import search_icon from '../assets/search_icon.png';
import './header.css';
import search_iconBg from '../assets/search_iconBg.png';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
}
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" placeholder=" &nbsp; &nbsp; &nbsp; &nbsp; Pakistan" variant="outlined" style={{backgroundColor: "white", border:"2px solid black",borderRadius:"10px",height:"60px",width:"300px"}}/>
      <img src={search_icon} id="search_icon"/>
      <TextField id="outlined-basic" placeholder="Find Cars, Mobile Phone and more..." variant="outlined" style={{backgroundColor: "white",position:"relative",right:"43px",width:"800px",border:"2px solid black",borderRadius:"10px"}}/>
      <img src={search_iconBg} id="search_iconBg"/>      
    </form>
  );
}
