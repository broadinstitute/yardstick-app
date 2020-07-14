import * as React from "react";
import {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export const VersionForm = (): JSX.Element => {
    const [name, setName] = useState<string>("1.0.0");

    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setName(event.target.value as string);
    };

    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id="version-label">Version</InputLabel>

            <Select
                id="version-select"
                label="Version"
                labelId="version-label"
                onChange={onChange}
                value={name}
            >
                <MenuItem value="1.0.0">1.0.0</MenuItem>
            </Select>
        </FormControl>
    );
};
