import React from 'react';
import { TextField } from '@mui/material';
import './Input.scss';

const Input = (props) => {

    const type = props.type ? props.type : 'text';
    const name = props.name ? props.name : '';
    const value = props.value ? props.value : '';
    const label = props.label ? props.label : 'PLACEHOLDER';
    const margin = props.margin ? props.margin : 'normal';
    const color = props.color ? props.color : 'primary';
    const required = props.required === true ? props.required : false;
    const disabled = props.disabled === true ? props.disabled : false;
    const error = props.error === true ? true : false;
    const helpText = props.helpText ? props.helpText : 'Field Required';
    const autoFocus = props.autoFocus === true ? true : false;

    return (
        <TextField
            fullWidth    
            autoFocus={autoFocus}
            type={type}
            value={value}
            color={color}
            error={error}
            margin={margin}
            required={required}
            disabled={disabled}
            label={label}
            id={'ID' + name}
            name={'NAME' + name}
            helperText={error === true ? helpText : ''}
            onBlur={(event) => { props.event(event.target.value); }}
            onChange={(event) => { props.event(event.target.value); }}
        />
    )
}

export default Input;