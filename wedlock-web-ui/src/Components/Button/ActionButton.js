import { Button } from '@mui/material';

const ActionButton = (props) => {

    const type = props.type ? props.type : 'button'
    const label = props.label ? props.label : 'Submit'
    const color = props.color ? props.color : 'primary'
    const variant = props.variant ? props.variant : 'contained'
    const disabled = props.disabled === true ? true : false
    const sx = props.sx ? props.sx : {}

    return (
        <Button
            fullWidth    
            type={type}
            color={color}
            variant={variant}
            disabled={disabled}
            sx={sx}
            onClick={props.event}
        >
            {label}
        </Button>
    )
}

export default ActionButton;