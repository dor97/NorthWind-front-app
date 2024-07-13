import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useTitle } from "../../../Utils/useTitle";
import "./CountactUs.css";

//npm install @mui/system @emotion/react @emotion/styled 

function CountactUs(): JSX.Element {
    useTitle("NorthWind | CountactUs");
    
    return (
        <div className="CountactUs">
			
            <Typography variant="h3">Contact Us</Typography>

            <form>

                <TextField label="Name" type="text" className="TextBox"/>
                <TextField label="Email" type="email" className="TextBox"/>
                <TextField label="Message" type="text" className="TextBox"/>

                <FormControlLabel control={<Checkbox />} label="Send me promotional emails"/>

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary">Send</Button>
                    <Button color="secondary" type="reset">Clear</Button>
                </ButtonGroup>


            </form>

        </div>
    );
}

export default CountactUs;
