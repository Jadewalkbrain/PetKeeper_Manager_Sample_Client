import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SearchMemberId extends Component {
  state = {
    id: '',
    member:'',
  };

  handleChange = event => {
    this.setState({id: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3001/member/id',
      data: {
        id: this.state.id
      }
    })
    .then(res => {
      console.log(res)
      this.setState({member : res.data})
      console.log(this.state.member)
      this.props.callback(this.state.member)
      this.props.onSubmit()
      })

  }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
              <TextField
                id="standard-name"
                label="회원 id"
                name='id'
                value={this.state.id}
                onChange={this.handleChange}
                className={classes.textField}
                margin="normal"
              />
            <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
                검색
              </Button>
        </div>
      );
    }

  }
export default withStyles(styles)(SearchMemberId);