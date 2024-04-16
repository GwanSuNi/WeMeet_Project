import * as React from 'react';
import {PaletteMode} from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import MapIcon from '@mui/icons-material/Map';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import ExploreIcon from '@mui/icons-material/Explore';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <div>
            <AppBar
                position="sticky"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none'
                }}
            >
                <Container maxWidth="lg" disableGutters={true}>
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            borderRadius: '0px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            {/*    TODO: NavBar 버튼들 flex */}
                            <Stack
                                direction="row"
                                justifyContent="space-around"
                                width="100%"
                                useFlexGap
                                sx={{
                                    color: 'text.secondary',
                                }}
                            >
                                <IconButton
                                    color="inherit"
                                    href="/"
                                    aria-label="코스 추천"
                                    sx={{ alignSelf: 'center' }}
                                >
                                    <AssistantDirectionIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="/"
                                    aria-label="map"
                                    sx={{ alignSelf: 'center' }}
                                >
                                    <MapIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    href="/"
                                    aria-label="피플픽"
                                    sx={{ alignSelf: 'center' }}
                                >
                                    <ExploreIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;