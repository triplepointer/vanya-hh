import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Categories(props) {

    const [value, setValue] = useState(0);
    const currentLabel = 'Все';

    function handleChange(event, newValue) {
        console.log(event.target.outerText);
        props.changeCurrentTop(event.target.outerText);
        setValue(newValue);
    }

    return (
        props.categories.length 
            ?         <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Все" />
                {props.categories.map(
                    el => <Tab label={el.Category} />
                )}
            </Tabs>
        </Box>
            :<></>
    )
} 

export default Categories;