import React,{Component} from 'react';
import {withStyles, InputLabel,Select,MenuItem, TextField,Button,FormControl} from "@material-ui/core";
import axios from 'axios';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit,
    },
    button: {
      margin: theme.spacing.unit,
    }
  });



class SearchDate extends Component {
    state = {
      device: '',
      startDate:'',
      endDate:'',
      deviceData:'',
    };


    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleChange1 = event => {
      this.setState({startDate: event.target.value });
    };
  
    handleChange2 = event => {
      this.setState({endDate
        : event.target.value });
    };

    handleClick = event => {
      event.preventDefault();
  
      axios({
        method: 'post',
        url: 'http://localhost:3001/device/data',
        data: {
          device: this.state.device,
          startDate:this.state.startDate,
          endDate:this.state.endDate
        }
      })
      .then(res => {
        console.log(res)
        this.setState({deviceData : res.data})
        console.log(this.state.deviceData)
        this.props.callback(this.state.deviceData)
        this.props.onSubmit()
        })
      }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="device-simple">전체기기</InputLabel>
            <Select
              value={this.state.device}
              onChange={this.handleChange}
              inputProps={{
                name: "device",
                id: "device-simple"
              }}
            >
              {this.props.data.map(data =>(
                <MenuItem key={data.userid} value={data.device}>{data.device}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="시작일"
            type="date"
            name="start"
            value={this.state.startDate}
            onChange={this.handleChange1}
            InputLabelProps={{
              shrink: true
            }}
          />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="종료일"
            type="date"
            name="end"
            value={this.state.endDate}
            onChange={this.handleChange2}
            InputLabelProps={{
              shrink: true
            }}
          />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
            검색
          </Button>
      </div>
    );
  }}

  export default withStyles(styles)(SearchDate);