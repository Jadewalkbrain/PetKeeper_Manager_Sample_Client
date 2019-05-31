import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Article from './Article';

const drawerWidth = 250;

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  
});

const menu = [
  {
    id: 0,
    title: "대쉬보드"
  },
  {
    id: 1,
    title: "회원관리",
    subtitle: "회원 및 데이터관리"
  },
  {
    id: 2,
    title: "통계관리"
  }
];

class Menu extends Component {
  state = {
    mode: "dashBoard"
  };

  handleDashBoardClick = () => {
    this.setState({ mode: "dashBoard" });
  };

  handleMemberClick = () => {
    this.setState({ mode: "member" });
  };

  handleTotalClick = () => {
    this.setState({ mode: "total" });
  };



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button onClick={this.handleDashBoardClick}>
        <ListItemText primary={<Typography variant="title">{menu[0].title}</Typography>}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography variant="title">{menu[1].title}</Typography>} />
            </ListItem>
            <ListItem button onClick={this.handleMemberClick}>
        <ListItemText inset primary={<Typography variant="subheading">{menu[1].subtitle}</Typography>} />
            </ListItem>
            <ListItem button onClick={this.handleTotalClick}>
              <ListItemText primary={<Typography variant="title">{menu[2].title}</Typography>} />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Article mode={this.state.mode}/>
        </main>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
