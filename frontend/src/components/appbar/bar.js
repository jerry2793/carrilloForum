import React, { Component } from 'react'


import { makeStyles, withStyles } from '@material-ui/core/styles';
// import { useStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class Appbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            open: false,
            anchorEl: '',
        }
    }

    componentDidMount() {
        this.setState({ loading: false })
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    handleMenu = () => {
        this.setState({ anchorEl: '' })
    }
    
    render() {
        const { classes } = this.props
        const { auth } = this.props
        const { open } = this.state
        const { anchorEl } = this.state

        const { handleMenu } = this
        const { handleClose } = this
        
        return (
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Photos
                        </Typography>
                        {auth && (
                            <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                            </div>
                        )}
                        </Toolbar>
                    </AppBar>
            </div>
        )
    }
}


const AppbarStyled = props => {
    const classes = useStyles()
    
    return (<Appbar classes={classes} />)
}

export default AppbarStyled