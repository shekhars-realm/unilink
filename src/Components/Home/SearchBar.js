import React from 'react'
import {TextField}  from '@material-ui/core'

export default function SearchBar() {
    return (
        <div>
            <TextField type="search"  variant="outlined" fullWidth placeholder="search"/>
        </div>
    )
}
