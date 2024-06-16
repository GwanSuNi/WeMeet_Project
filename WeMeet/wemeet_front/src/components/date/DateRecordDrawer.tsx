import {KeyboardEvent, MouseEvent} from 'react';
import {Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography} from '@mui/material';
import {CustomDrawer, DetailedViewLink} from "@components";

export default function DateRecordDrawer({active, toggleDrawer}: {
    active: boolean,
    toggleDrawer: (active: boolean) => (event: KeyboardEvent | MouseEvent) => void
}) {
    return (
        <CustomDrawer anchor='right' active={active} height='100%' right={0}>
            <Box
                width={250}
                height='100%'
                role='presentation'
                padding='13px'
                bgcolor='white'
            >
                <Typography
                    variant='h6'
                    textAlign='center'
                    fontWeight='bold'
                    gutterBottom
                >
                    데이트 기록
                </Typography>
                <Divider/>
                <List>
                    {['24.04.18', '24.04.01', '24.03.19'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <ListItem>
                    <DetailedViewLink/>
                </ListItem>
            </Box>
        </CustomDrawer>
    );
}