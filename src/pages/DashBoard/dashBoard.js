import React from 'react';
import Header from '../../component/header'
import { makeStyles, Button, Card, CardMedia } from "@material-ui/core";
import seta from '../../img/arrow-right.svg'
import Footer from '../../component/footer';

export default function DashBoard() {
    const { container, cardContainer, bgImage, position, titulo, subTitle, button, svg, textButton, body } = useStyles();

    return (
        <div className={container}>
            <div className={body}>
                <div>
                    <Header />
                </div>
                <Card className={cardContainer}>
                    <CardMedia className={bgImage} component="video" alt="video" src={require('../../video/adoracao.mp4')} title="video"
                        type="video/mp4" muted autoPlay loop />
                    <div className={position}>
                        <h1 className={titulo}>Faça parte desse ministério</h1>

                        <p className={subTitle}>Sinta a presença de Deus on-line <br /> ou presencialmente em nossos cultos</p>
                        <Button className={button}><p className={textButton}>Vá até uma igreja Bethel</p><embed className={svg} src={seta} /></Button>
                        <br />
                        <Button className={button}><p className={textButton}>Assista nossos cultos</p> <embed className={svg} src={seta} /></Button>
                    </div>
                </Card>
                <div>
                    <Footer />
                </div>
            </div>

        </div>

    )
}

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        height: '100%'
    },
    bgImage: {
        height: 'auto',
        width: "100%",
        position: 'absolute',
    },
    position: {
        position: 'absolute',
        marginLeft: 100,
        '@media (max-width:900px)': {
            marginLeft: 0
        },
    },
    titulo: {
        color: 'white',
        fontSize: 64,
        fontFamily: 'Inter, sans-serif',
        marginTop: 210,
        '@media (max-width:900px)': {
            fontSize: '1.5rem',
            marginTop: 130,
            marginLeft: 50,
            textAlign: 'center',
        },
    },
    subTitle: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'Inter  ,sans-serif',
        fontWeight: '100',
        '@media (max-width:900px)': {
            fontSize: '18px',
            color: 'black',
            fontWeight: '300',
            marginTop: 80,
            marginLeft: 10,
            textAlign: 'center',
        },
    },
    button: {
        backgroundColor: '#256EEB',
        color: 'white',
        borderRadius: 13,
        marginTop: 30,
        padding: 10,
        '@media (max-width:900px)': {
            marginLeft: 70,
        },
    },
    svg: {
        color: 'white'
    },
    textButton: {
        fontFamily: 'Inter  ,sans-serif',
        padding: 0,
        margin: 2
    },
    cardContainer: {
        height: "100%"
    },
    body:{
        paddingBottom:'100px'
    }
}));