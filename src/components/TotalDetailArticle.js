import React, { Component } from "react";
import { withStyles,TableBody,TableHead, TableRow, TableCell, Table } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '30%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 150,
  },
});

const rows = [
  {user:200 , device:200, onDevice:200},
];

class TotalDetailArticle extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
          <h3>운용현황</h3>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableCell>사용자수(명)</TableCell>
                <TableCell>기기수(대)</TableCell>
                <TableCell>활성화기기수(대)</TableCell>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow>
                    <TableCell align="center">{row.user}</TableCell>
                    <TableCell align="center">{row.device}</TableCell>
                    <TableCell align="center">{row.onDevice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TotalDetailArticle);
