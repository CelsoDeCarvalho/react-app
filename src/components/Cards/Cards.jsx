import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import Skeleton from '@material-ui/lab/Skeleton';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return (

            <div className={styles.skeleton}>
                <Grid container spacing={3} justify="center">
                    <Grid ClassName={styles.grid} item component={Card} xs={12} md={3}>
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pr={2}>
                            <Typography gutterBottom variant="body2">
                            </Typography>
                            <Typography display="block" variant="caption" color="textSecondary">
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                            </Typography>
                        </Box>

                    </Grid>

                    <Grid ClassName={styles.grid} item component={Card} xs={12} md={3} >
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pr={2}>
                            <Typography gutterBottom variant="body2">
                            </Typography>
                            <Typography display="block" variant="caption" color="textSecondary">
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid ClassName={styles.grid} item component={Card} xs={12} md={3} >
                        <Skeleton variant="rect" width={210} height={118} />
                        <Box pr={2}>
                            <Typography gutterBottom variant="body2">
                            </Typography>
                            <Typography display="block" variant="caption" color="textSecondary">
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infectados)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infetados</Typography>
                        <Typography variant="h5">
                            <CountUp

                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator="."

                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recuperados)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                            <CountUp

                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator="."

                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Casos recuperados do COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.mortos)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortos</Typography>
                        <Typography variant="h5">
                            <CountUp

                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator="."

                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de mortos de COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    );
}

export default Cards