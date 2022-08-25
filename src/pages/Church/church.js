import React from 'react';
import Header from '../../component/header';
import { makeStyles, Card, CardMedia, CardContent } from "@material-ui/core";
import Footer from '../../component/footer';

export default function Church() {
    const { container, cardContainer, bgImage, titulo, position, subTitle, subPosition, cardContent, text, footer, body } = useStyles();

    return (
        <div className={container}>
            <div className={body}>
                <div>
                    <Header />
                </div>
                <div>
                    <Card className={cardContainer}>
                        <CardMedia className={bgImage} component="img" alt="img" src={require('../../img/blessed.jpg')} title="img" />
                        <div className={position}>
                            <h1 className={titulo}>Sobre Nós</h1>
                            <p className={subTitle}> Home / A igreja</p>
                            <CardContent className={cardContent}>
                                <div className={subPosition}>
                                    <h1 >História</h1>
                                    <div style={{ marginTop: '60px' }}>
                                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>
                {/* <div className={footer}>
                    <footer>
                        <Footer />
                    </footer>
                </div> */}
        </div>
    )
}

const useStyles = makeStyles(() => ({
    container: {
        padding: 0,
        margin: 0,
        height: '100%'
    },
    cardContainer: {
        height: "100%"
    },
    bgImage: {
        height: '80%',
        width: "100%",
        position: 'absolute',
    },
    position: {
        position: 'absolute',
        '@media (max-width:900px)': {
            marginLeft: 0
        },
    },
    titulo: {
        color: 'white',
        fontSize: 60,
        fontFamily: 'Inter, sans-serif',
        marginTop: 210,
        textAlign: 'center',
        '@media (max-width:900px)': {
            fontSize: '1.5rem',
            marginTop: 130,
            marginLeft: 50,
            textAlign: 'center',
        },
    },
    subTitle: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Inter  ,sans-serif',
        fontWeight: '100',
        textAlign: 'center',
        '@media (max-width:900px)': {
            fontSize: '18px',
            color: 'black',
            fontWeight: '300',
            marginTop: 80,
            marginLeft: 10,
            textAlign: 'center',
        },
    },
    subPosition: {
        textAlign: 'center',
        fontFamily: 'Inter  ,sans-serif',
    },
    cardContent: {
        marginTop: 220
    },
    text: {
        fontFamily: 'Inter  ,sans-serif',
        fontSize: '18px',
        marginLeft: 100,
        marginRight: 100,
        fontWeight: '300',
    },
}))