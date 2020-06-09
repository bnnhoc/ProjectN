import React from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Register/register"
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const drawerWidth = 240;

const styles = (theme: any) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Home extends React.PureComponent<any, any>{
    // private const logOut: ()=>void
    constructor(props: any) {
        super(props);
        this.state = {
            content: "",
            open: false,
            value: 0
        };
    }
    
    componentDidMount() {
        // const user = AuthService.getCurrentUser();
        // console.log(user)
        // UserService.getPublicContent().then(
        //   response => {
        //     //   console.log(response)
        //     this.setState({
        //       content: response.data
        //     });
        //   },
        //   error => {
        //     this.setState({
        //       content:
        //         (error.response && error.response.data) ||
        //         error.message ||
        //         error.toString()
        //     });
        //   }
        // );
    }

    render() {
        const handleDrawerOpen = () => {
            this.setState({ open: true })
        };

        const handleDrawerClose = () => {
            this.setState({ open: false })
        };
        let theme = this.props.theme
        let classes = this.props.classes
        return (
            
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            GIÁO XỨ QUẢNG BIÊN
                        </Typography>
                        <IconButton
                            color="inherit"
                            // aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            // edge="lef
                            style={{float:'right'}}
                        // className={clsx(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <PermIdentityIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <h2 >Menu Bar</h2>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link to={"/home"} className="nav-link">
                            <ListItem button >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItem>

                        </Link>
                    </List>
                    <Divider />
                    <List>
                        {['Manage', 'Test', 'Hihi'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: this.state.open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    {/* <Typography paragraph>
                        {this.state.content}
                    </Typography> */}
                </main>
                
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Home)