import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import NavBar from "../layout/NavBar";
import {PaletteMode} from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    return (
        <ThemeProvider theme={defaultTheme}>

                <CssBaseline />
                <Box
                    component="footer"
                    sx={{
                        py: 0,
                        px: 0,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container disableGutters={true}>
                        <NavBar mode={mode} toggleColorMode={toggleColorMode}/>
                    </Container>
                </Box>
        </ThemeProvider>
    );
}