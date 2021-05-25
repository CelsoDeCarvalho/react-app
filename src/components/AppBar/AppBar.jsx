import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import styles from "./AppBar.module.css"
import foto from '/home/celso/Desktop/React Js APPS/corona-virus-app/src/images/2010-01-01 02.05.34_13.jpg';


const NavBar =() => {
    return(
        <div className={styles.container}>
            <AppBar className={styles.title}>
                <Toolbar variant="dense">
                    <Typography className={styles.typography}><a href="https://saudigitus.org/">Saudigitus</a></Typography>
                    <Avatar size="small" alt="Celso Momade" src={foto}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;