import React, { Component } from "react";
import {Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from "@material-ui/core";
import AnalysisDataInfo from './AnalysisDataInfo';
import SensorDataInfo from './SensorDataInfo';


class DataInfo extends Component {
    state = {
      value: "first"
    };

    handleChange = event => {
      this.setState({ value: event.target.value });
    };
    render(){
      return(
            <fieldset>
              <legend>데이터관리</legend>
              <FormControl component="fieldset">
                <FormLabel component="legend" />
                <RadioGroup
                  aria-label="position"
                  name="position"
                  value={this.state.value}
                  onChange={this.handleChange}
                  row
                >
                  <FormControlLabel
                    value="first"
                    control={<Radio color="primary" />}
                    label="분석 data"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="second"
                    control={<Radio color="primary" />}
                    label="감지 data"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
             {this.state.value ==='first' ? <AnalysisDataInfo data = {this.props.data}/>:<SensorDataInfo/>}
            </fieldset>
      );
    }
  }


  export default DataInfo;