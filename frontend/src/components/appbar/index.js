import { applyMiddleware, compose } from "redux";
import { connect } from "react-redux";

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup, Drawer, IconButton, makeStyles, Menu, MenuItem, withStyles } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ClassIcon from '@material-ui/icons/Class';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';
import { withRouter } from "react-router-dom";

import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = theme => ({
    root:{
        flexGrown: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    moreIcon: {
        color: 'white'
    },
    title: {
        flexGrow: 1,
        // marginRight: theme.spacing(10)
    },
    list: {
        width: 250
    }
})

class Appbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerToggled: false,
            authenticated: '',
            actionsToggled: false,
        }
    }

    toggleDrawer = (e) => {
        switch(e.type) {
            case 'keydown':
                return this.setState({ drawerToggled: false })
            case 'tab':
                return this.setState({ drawerToggled: false })
        }
        this.setState({ drawerToggled: true })
    }

    handleRoutesClick = e => {
        const path = e.target.innerText.toLowerCase()
        console.log(path)
        path.replace(' ', '/')
        this.setState({
            drawerToggled: false,
            actionsToggled: false
        })
        if (path === 'homepage') {
            this.props.history.push('/feature')
        } else {
            this.props.history.push(`/${path}`)
        }
    }

    mapToIcon = text => {
        switch (text) {
            case 'threads':
                return <EmailIcon />
                break;

            case 'courses':
                return <ClassIcon />

            case 'messenger':
                return <SendIcon />

            case 'my threads': 
                return <HelpIcon />
        
            default:
                break;
        }
    }

    DrawerList = props => {
        const {classes} = props
        return (<div
            className={classes.list}
            role="presentation"
            onClick={e => props.toggleDrawer(false)}
            onKeyDown={e => props.toggleDrawer(false)}
          >
              <List>
                <ListItem button onClick={this.handleRoutesClick} key={'home'}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItem>
              </List>

              <Divider />

                <List>
                {['Threads','Courses'].map((text, index) => (
                    <ListItem button onClick={e => this.handleRoutesClick(e)} key={text}>
                    <ListItemIcon>{this.mapToIcon(text.toLowerCase())}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
                <List>
                {['My Threads', 'Messenger'].map((text, index) => (
                    <ListItem button onClick={e => this.handleRoutesClick(e)} key={text}>
                    <ListItemIcon>{this.mapToIcon(text.toLowerCase())}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
          </div>)
    }

    RenderMenu = ({children}) => {
        const { classes } = this.props
        
        return (
            <div>
                <IconButton>
                    <MoreVertIcon className={classes.moreIcon}
                        onClick={e => this.setState({ actionsToggled: true })}
                    />
                </IconButton>
                
                <Menu 
                    id="simple-menu"
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    open={this.state.actionsToggled}
                    onClose={e => this.setState({ actionsToggled: false })}
                >
                    <List>
                    {children}
                    </List>
                </Menu>
            </div>
        )
    }

    renderUserAvatar = () => {
        // having some account settings tab if click the more button (do a layered like facebook)
        return (<div>
            <Button onClick={e => this.handleRoutesClick(e)} color="inherit">Signout</Button>
        </div>)
    }

    renderSideBar = () => {
        const {RenderMenu} = this
        
        if (this.props.authenticated) {
            // when user authenticated, show these when more button is toggled
            return <RenderMenu><div>
            <MenuItem onClick={e => this.handleRoutesClick(e)} color="inherit">Threads</MenuItem>
            <MenuItem onClick={e => this.handleRoutesClick(e)} color="inherit">Courses</MenuItem>
            {this.renderUserAvatar()}
            </div></RenderMenu>
        } else {
            // if no auth, then show these
            return <RenderMenu><div>
                <MenuItem onClick={e => this.handleRoutesClick(e)} color="inherit">Signin</MenuItem>
                <MenuItem onClick={e => this.handleRoutesClick(e)} color="inherit">Signup</MenuItem>
            </div></RenderMenu>
        }
    }

    render() {
        const {classes} = this.props
        const { DrawerList } = this
        
        return (
            <div>
                <AppBar position="static">

                    <Toolbar>
                        <IconButton edge="start" clasName={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={e => {
                                this.toggleDrawer(e)
                            }} />
                        </IconButton>

                        <Drawer open={this.state.drawerToggled} onClose={e => this.setState({drawerToggled: false})}>
                            <DrawerList 
                                classes={classes} 
                                toggleDrawer={val => {
                                    this.setState({ drawerToggled: val })
                                }}
                            />
                        </Drawer>
                        
                        <Typography variant="h6" className={classes.title}>
                            Carrillo Forum
                        </Typography>

                        {this.renderSideBar()}
                        
                    </Toolbar>
                    
                </AppBar>
            </div>
        );
    }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

const mapDispatchToProps = state => ({
    // authenticated: state.auth.authenticated
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // applyMiddleware()
) (withRouter(withStyles(useStyles)(Appbar)))