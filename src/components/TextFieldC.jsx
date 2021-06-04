import React from 'react'
import {TextField } from '@material-ui/core'
const TextFieldC = ({label,type,name,triggerChange}) => {
    return (
        <TextField
            autoFocus
            margin="dense"
            id={name}
            label={label}
            type={type}
            onChange={triggerChange}
            fullWidth
        />
    )
}

export default TextFieldC
