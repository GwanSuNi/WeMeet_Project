import {Outlet} from 'react-router-dom';
import {Box, Stack} from '@mui/material';
import StickyFooter from '../components/StickyFooter';

export default function MainLayout() {
    return (
        <Stack component={Box} display={'flex'} flexDirection={'column'} height='100%'>
            <Box component='main' flex='1'>
                <Outlet/>
            </Box>
            <StickyFooter/>
        </Stack>
    );
}