import React from 'react';
import Header from '../../component/header'
import { AppBar, Toolbar, Typography, makeStyles, Container, Card, Button } from "@material-ui/core";
import seta from '../../img/arrow-right.svg'

export default function DashBoard() {
    const { container, bgImage, position, titulo, subTitle, button, svg } = useStyles();

    return (
        <div className={container}>
            <Header />                
                <img className={bgImage} alt="Background" src={require('../../img/bg.jpg')} />
                <div className={position}>
                    <h1 className={titulo}>Faça parte desse ministério</h1>

                    <p className={subTitle}>Sinta a presença de Deus on-line <br/> ou presencialmente em nossos cultos</p>
                    <Button className={button}>Vá até uma igreja Bethel <embed className={svg} src={seta}/></Button>
                    <br/>
                    <Button className={button}>Assista nossos cultos <embed className={svg} src={seta}/></Button>
                </div>
        </div>

    )
}

const useStyles = makeStyles(() => ({
    container: {
        padding: 0,
        margin: 0,
        position: 'relative'
    },
    bgImage: {
        height: 800,
        width: 1350,
        position: 'absolute',
        backgroundSize: 'cover'
    },
    position: {
        position: 'absolute',
        marginLeft: 100
    },
    titulo: {
        color: 'white',
        fontSize: 64,
        fontFamily: 'Inter, sans-serif',
        marginTop: 290,
    },
    subTitle: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'Inter  ,sans-serif',
        fontWeight: '100',
    },
    button: {
        backgroundColor: '#256EEB',
        color: 'white',
        borderRadius: 13,
        marginTop: 30,
        padding: 10
    },
    svg: {
        color: 'white'
    }
}));