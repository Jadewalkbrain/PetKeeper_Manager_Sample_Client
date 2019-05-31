import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import SearchDate from "./SearchDate";
import MemberInfo from "./MemberInfo";
import DataInfo from "./DataInfo";
import SearchMemberId from "./SearchMemberId";

class MemberDetailArticle extends Component {
  state = {
      mode: "search",
      mode1:"",
      member:null
    };
    callbackData = (data) =>{
      this.setState({member:data})
      console.log(this.state.member)
    }
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <SearchMemberId
              onSubmit={() => {
                this.setState({ mode: "dateSearch" });
              }}
              callback={this.callbackData}
            />
          </div>
          <div>
            {this.state.mode === "dateSearch" && (
              <SearchDate
                onSubmit={() => {
                  this.setState({ mode1: "all" });
                }}
              />
            )}
          </div>
        </Grid>
        <div>
          {this.state.mode === "dateSearch" && <MemberInfo data={this.state.member}/>}
        </div>
        <div>{this.state.mode1 === "all" && <DataInfo />}</div>
      </Grid>
    );
  }
}

export default MemberDetailArticle;
