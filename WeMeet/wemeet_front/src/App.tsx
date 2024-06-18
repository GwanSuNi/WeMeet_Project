import Box from '@mui/material/Box';
import Routes from './routes';

export default function App() {
    return (
        <Box display='flex' justifyContent='space-evenly' minHeight='100vh' bgcolor='black'>
            <Box display={{xs: 'none', lg: 'flex'}} width='300px' bgcolor='yellowgreen'/>
            <Box bgcolor='white' width='600px'>
                <Routes/>
            </Box>
        </Box>
    );
}