import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";


const headersData = [
    {
        label: "A igreja",
        href: "/listings",
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
        paddingBottom: 24,
        paddingTop: 12,
    },
    logo: {
        height: 57,
        width: 227,
        marginLeft: 70,
        marginRight: 89
    },
    menuButton: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        size: "16px",
        marginLeft: "60px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginRight: "60px",
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>{femmecubatorLogo}
            {getMenuButtons()}
        </Toolbar>;
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            <img alt='ssss' src={require('../img/bethelLogo.png')} />
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

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}