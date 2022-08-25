import { AppBar, Toolbar, Typography, makeStyles, Button, Drawer, MenuItem, Link } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from "@material-ui/core"

const headersData = [
    {
        label: "A igreja",
        href: "/a-igreja",
    },
    {
        label: "Envolve-se",
        href: "/mentors",
    },
    {
        label: "Disque-Vida",
        href: "/account",
    },
    {
        label: 'Peça Oração',
        href: '/blessed'
    },
    {
        label: "Eventos",
        href: "/logout",
    },
    {
        label: "Oferte",
        href: "/logout",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#256eeb",
        paddingBottom: 10,
        paddingTop: 10,
        " @media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        marginLeft: 100,
        marginRight: 89
    },
    logoImage: {
        marginTop: 10,
        height: "auto",
        width: "80%",
    },
    menuButton: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        size: "14px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginRight: "60px",
    },
}));

export default function Header() {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })

    const { mobileView, drawerOpen } = state

    const { header, logo, logoImage, menuButton, toolbar } = useStyles();

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        }

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness())

        return () => {
            window.removeEventListener("resize", () => setResponsiveness())
        }
    }, [])

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>{femmecubatorLogo}
            {getMenuButtons()}
        </Toolbar>;
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            <a href="/">
            <img className={logoImage} alt='ssss' src={require('../img/bethelLogo.png')}/>
            </a>
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'left',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}>
                        <div>{getDrawerChoices()}</div>
                    </Drawer>
                <div>{femmecubatorLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({label, href}) => {
            return (
                <Link 
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none"},
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            )
        })
    }


    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>);
}