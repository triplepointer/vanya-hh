import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Categories(props) {

    const currentLabel = 'Все';

    return (
        props.categories.length 
            ?         <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
            <Tabs
                value={props.value}
                onChange={props.handleChange}
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