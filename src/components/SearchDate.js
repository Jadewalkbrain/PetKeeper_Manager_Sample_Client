import React,{Component} from 'react';
import {withStyles, InputLabel,Select,MenuItem, TextField,Button,FormControl} from "@material-ui/core";

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

    };
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  render(){
    const { classes } = this.props;
    return (
      <div>
        <form
        className={classes.root}
          noValidate
          action=""
          method="POST"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.device.value,
              e.target.start.value,
              e.target.end.value
            );
          }.bind(this)}
        >
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
              <MenuItem value={10}>기기1</MenuItem>
              <MenuItem value={20}>기기2</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="시작일"
            type="date"
            name="start"
            defaultValue="2017-05-01"
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
            defaultValue="2017-05-30"
            InputLabelProps={{
              shrink: true
            }}
          />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            검색
          </Button>
        </form>
      </div>
    );
  }}

  export default withStyles(styles)(SearchDate);