import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from "@material-ui/core";

import NavigationComponent from './NavigationComponent';
import { Add } from '@material-ui/icons';

const AppBarComponent = ({onTrigger}) => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
               
                <Button
                    variant="text"
                    color="inherit"
                    size="small"
                   onClick={onTrigger}
                  
                    startIcon={<Add />}
                >
                    Add
      </Button>

                <NavigationComponent />

            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
