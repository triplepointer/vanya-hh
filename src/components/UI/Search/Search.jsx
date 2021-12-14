import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function Search(props) {
    const [value, setValue] = useState("");
    const {search} = props;

    useEffect(() => {
        const timeout = setTimeout(
            async () => {
                
            }, 800
        );
        return () => {
            clearTimeout(timeout)
        };
    }, [])

    // useEffect(() => {

    // },[timeout])

    function changeValue(e) {
        setValue(e.target.value);
    }

  return (
    <Box
    component="form"
    onSubmit={(e) => {e.preventDefault();search(value)}}
    sx={{
    '&': {display: 'flex', justifyContent: "center"},
    '& > :not(style)': { m: 1 },
    }}
    >
    <TextField value={value} onChange={changeValue} style={{width: "70%"}} id="outlined-basic" label="Специализация" variant="outlined" />
    <Button onClick={(e) => {e.preventDefault();search(value)}} variant="contained">Поиск!</Button>
    </Box>
  );
}

export default Search;