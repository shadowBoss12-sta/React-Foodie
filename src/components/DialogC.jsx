import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React from 'react'
import TextFieldC from './TextFieldC';

const DialogC = ({ open, triggerClose, triggerNameChange,
    triggerDescriptionChange, submitData }) => {


    return (
        <div>

            <Dialog open={open} onClose={triggerClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Dish</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Details Of Your Favourite Dish
          </DialogContentText>
                    <TextFieldC triggerChange={triggerNameChange} name="name" label="Enter Dish Name" type="text" />
                    <TextFieldC name="description" triggerChange={triggerDescriptionChange} label="Enter Description" type="text" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={triggerClose} color="primary">
                        Cancel
          </Button>
                    <Button color="primary" onClick={submitData}>
                        Create
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogC
