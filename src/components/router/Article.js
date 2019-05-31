import React, { Component } from "react";
import DashBoard from "../dashboard/DashBoard";
import MemberDetailArticle from "../member/MemberDetailArticle";
import TotalDetailArticle from "../total/TotalDetailArticle";

class Article extends Component {
  getShowContents() {
    var viewPage = null;
    if (this.props.mode === "dashBoard") {
      viewPage = (
        <div>
          <DashBoard />
        </div>
      );
    } else if (this.props.mode === "member") {
      viewPage = (
        <div>
          <MemberDetailArticle />
        </div>
      );
    } else if (this.props.mode === "total") {
      viewPage = (
        <div>
          <TotalDetailArticle />
        </div>
      );
    }
    return viewPage;
  }

  render() {
    return <div>{this.getShowContents()}</div>; 
  }
}

export default Article;
