import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {styled} from '@mui/system';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PlaceIcon from "@mui/icons-material/Place";

export default function PeoplePickCard() {
    const [value, setValue] = React.useState('1');
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        textAlign: 'center',
    }));

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider', justifyContent: 'center'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="근처 인기" value="1" sx={{width: '50%'}}/>
                        <Tab label="근처 전체" value="2" sx={{width: '50%'}}/>
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <Item>
                                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                        <Typography variant="h6">
                                            크리스마스
                                        </Typography>
                                        <IconButton>
                                            <FavoriteIcon/>
                                        </IconButton>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="/image/catTest.jpeg"
                                        sx={{ width: '100%', maxWidth: '250px', height: 'auto' }}
                                    />
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <Tooltip title="석촌호수">
                                            <PlaceIcon sx={{height:'10px', width:'10px' , marginTop:'2'}} />
                                        </Tooltip>
                                        <Typography sx={{ marginTop:'2',fontSize:'10px',display:'flex',justifyContent:'space-between'}}>
                                            석촌호수
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    )
        ;
}

