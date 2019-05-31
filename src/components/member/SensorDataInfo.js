import React, { Component } from "react";
import {Paper,TableBody,TableHead, TableRow, TableCell, Table} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(date, time, seconds) {
  id += 1;
  return { id, date, time, seconds };
}

const rows = [
  createData('05-08','08:00:05','20"'),
  createData('05-09','06:11:05','5"'),
  createData('05-10','08:20:05','10"'),
  createData('05-11','07:00:05','2"'),
];



class AnalysisDataInfo extends Component {
    render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell >상세감지시간</TableCell>
              <TableCell >체류시간</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell >{row.time}</TableCell>
                <TableCell>{row.seconds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      );
    }
  }

  export default  withStyles(styles)(AnalysisDataInfo);