import React from "react";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "@mui/material/Link";

export default function DateLogDrawer({activeDrawer, toggleDrawer}: {
    activeDrawer: boolean,
    toggleDrawer: (active: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}) {
    return (
        <>
            <SwipeableDrawer
                anchor='right'
                open={activeDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    width='250px'
                    role="presentation"
                    padding='13px'
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
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
                        {['24.04.18', '24.04.01', '24.03.19'].map((text, i) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <ListItem>
                        <Link
                            color="primary"
                            variant="body2"
                            fontWeight="bold"
                            underline='hover'
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                '& > svg': {transition: '0.2s'},
                                '&:hover > svg': {transform: 'translateX(2px)'},
                            }}
                            // href=''
                            rel='noopener noreferrer'
                        >
                            <span>자세히 보기</span>
                            <ChevronRightRoundedIcon fontSize='small'/>
                        </Link>
                    </ListItem>
                </Box>
            </SwipeableDrawer>
        </>
    );
}