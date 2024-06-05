import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Container = styled('div')({
    position: 'relative',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const StyledButton = styled(IconButton)({
    position: 'absolute',
    top: '100px',
    left: '200px',
});

export default function PeoplePickCard() {
    const [value, setValue] = React.useState('1');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        textAlign: 'center',
    }));

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' ,justifyContent:'center'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="근처 인기" value="1" sx={{ width: '50%' }} />
                        <Tab label="근처 전체" value="2" sx={{ width: '50%' }} />
                    </TabList>
                </Box>
                <TabPanel value="1">

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <Item>
                                    <Container>
                                        <CardMedia
                                            // 본문 사진 넣는곳
                                            component="img"
                                            height="200"
                                            image="/static/images/cards/paella.jpg"
                                            alt="사진넣는곳"
                                        />
                                        <StyledButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </StyledButton>
                                    </Container>
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item>
                                    <Container>
                                        <CardMedia
                                            // 본문 사진 넣는곳
                                            component="img"
                                            height="200"
                                            image="/static/images/cards/paella.jpg"
                                            alt="사진넣는곳"
                                        />
                                        <StyledButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </StyledButton>
                                    </Container>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>

                </TabPanel>

                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    );
}
