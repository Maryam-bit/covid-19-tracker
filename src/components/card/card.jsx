import React from 'react';
import './card.scss';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import { Typography, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Cards = ({ data }) => {
    const classes = useStyles();
    const { confirmed, recovered, deaths, lastUpdate } = data;

    return (
        <div className={classes.root}>
            <Grid container justify="center">

                <Grid item component={Card} xs={12} md={2} elevation={7} className="paper1">
                    <Typography gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2} seperate="," />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                </Grid>

                <Grid item component={Card} xs={12} md={2} elevation={7} className="paper2">
                    <Typography gutterBottom>Recovered</Typography>
                    <Typography variant="h6">
                        <CountUp start={0} end={recovered.value} duration={2} seperate="," />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                </Grid>

                <Grid item component={Card} xs={12} md={2} elevation={7} className="paper3">
                    <Typography gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={2} seperate="," />
                    </Typography>
                    <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                </Grid>
                
            </Grid>
        </div>
    )
}
export default Cards;