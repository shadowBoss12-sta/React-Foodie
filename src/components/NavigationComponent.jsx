import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const NavigationComponent = ({ text }) => {
    const paths = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Favourites",
            url: "/favourites",
        },

      
    ]
    return (

        <Typography variant="h6">
            <Grid container spacing={10}>
                {
                    paths.map((path, index) => <Grid   item className="me1"  key={index} ><NavLink   exact  key={index} to={path.url}>{path.name}</NavLink></Grid>)
                }
            </Grid>
        </Typography>
    );
};

export default NavigationComponent;
