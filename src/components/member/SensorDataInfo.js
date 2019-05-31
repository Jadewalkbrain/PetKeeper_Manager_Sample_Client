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
            {this.props.data.map(data => (
              <TableRow key={data.userid}>
                <TableCell component="th" scope="row">
                  {data.date}
                </TableCell>
                <TableCell >{data.time}</TableCell>
                <TableCell>{data.seconds}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      );
    }
  }

  export default  withStyles(styles)(AnalysisDataInfo);