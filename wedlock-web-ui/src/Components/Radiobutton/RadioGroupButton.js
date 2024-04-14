import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

const RadioGroupButton = (props) => {

    const groupId = props.groupId ? props.groupId : 'radio-group-btn-id'
    const groupLabel = props.groupLabel ? props.groupLabel : undefined
    const rowFormat = props.rowFormat === true ? true : false
    const options = props.options && props.options.length > 0 ? props.options : []

    const [value, setValue] = useState(options.length > 0 ? options[0]['value'] : '');

    return (
        <FormControl id={'ID' + groupId}>
            
            {
                groupLabel && <FormLabel> {groupLabel} </FormLabel>
            }
          
            <RadioGroup 
                row={rowFormat} 
                aria-labelledby={'ID' + groupId} 
                name={'NAME' + groupId}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                    props.event(event.target.value)
                }}
            >

                {
                    options.map(option => (
                        <FormControlLabel 
                            key={option.value}
                            disabled={option.disabled === true ? true : false}
                            label={option.label}
                            value={option.value} 
                            control={<Radio />}  
                        />
                    ))
                }

          </RadioGroup>

        </FormControl>
    );
}

export default RadioGroupButton;