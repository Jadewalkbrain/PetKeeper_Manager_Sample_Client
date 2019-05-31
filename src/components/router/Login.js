import React,{Component} from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Login extends Component {
  state = {
    id: '',
    pwd:'',
    status:''
  }

  handleChange1 = event => {
    this.setState({ id: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ pwd: event.target.value });
  }

  handleClick = event => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3001/users/login',
      data: {
        id: this.state.id,
        pwd: this.state.pwd
      }
    })
    .then(res => {
      console.log(res)
      this.setState({status : res.data.msg})
      })
  }


  render(){
  const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="id">아이디</InputLabel>
            <Input id="id" name="id" autoComplete="id" autoFocus value ={this.state.id} onChange={this.handleChange1}  />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <Input
              name="pwd"
              type="password"
              id="password"
              autoComplete="current-password"
              value ={this.state.pwd}
              onChange={this.handleChange2}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleClick}
          >
            로그인
          </Button>
      </Paper>
    </main>
  );
}
}


Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
