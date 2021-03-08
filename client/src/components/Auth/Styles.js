import { blue, yellow } from '@material-ui/core/colors';
import {
  makeStyles
} from '@material-ui/core/styles';
import Image from '../../assets/background/memories.jpeg';

export default makeStyles((theme) => ({
  paper: {
   
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },


  email: {
    marginLeft: 90,
    border: '0px solid',
    borderRadius: 3,
    marginBottom: 10,
  },


  last: {
    marginLeft: 90,
    border: '0px',
    borderRadius: 4,
    marginBottom: 10,
  },


  signUpBtn: {
    backgroundColor: 'green'
  },

  divEle: {
    marginLeft: 150,
    border: '0px',
    borderRadius: 4,
    marginBottom: 10,
  },


  signedUp: {
    border: '0px',
    borderRadius: 4,
    marginBottom: 10,
    fontFamily: ['Raleway'],
  },

  signInOpt: {
    justifyContent: 'center',
  },

  // This is how we can post a Image in the background in MATERIAL-UI

  paperContainer: {
    backgroundImage: `url(${Image})`,
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },

  first: {
    marginLeft: 90,
    border: '0px ',
    borderRadius: 4,
    marginBottom: 10,
  },

  pass: {
    marginLeft: 90,
    border: '0px ',
    borderRadius: 4,
    marginBottom: 10,
  },

  cnf: {
    marginLeft: 90,
    border: '0px ',
    borderRadius: 4,
    marginBottom: 10,
  },

  password: {
    marginLeft: 90,
    border: '0px ',
    borderRadius: 4,
  },

  signup: {
    border: '1px solid',
  },

  submit: {
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 2),
  },

  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));