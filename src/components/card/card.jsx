import React from 'react';
import './card.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft:theme.spacing(15),
        paddingRight:theme.spacing(15)
    },
}));


const Card = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <Grid item xs={4}>
                    <Paper className='paper1' elevation={2}>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className='paper2' elevation={2}>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className='paper3' elevation={2}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Card;