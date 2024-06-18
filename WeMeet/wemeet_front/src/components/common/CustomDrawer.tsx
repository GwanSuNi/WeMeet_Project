import {ReactNode} from 'react';
import Box from '@mui/material/Box';

interface CustomDrawerProps {
    children: ReactNode;
    anchor: 'top' | 'right' | 'bottom' | 'left';
    active: boolean;
    width?: string | number;
    height?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    left?: string | number;
}

export default function CustomDrawer(
    {
        children,
        anchor,
        active,
        width = 'auto',
        height = 'auto',
        top = 'auto',
        right = 'auto',
        bottom = 'auto',
        left = 'auto'
    }: CustomDrawerProps
) {
    const anchorStyles = {
        top: {
            top: active ? '0' : '-100%',
            right: '0'
        },
        right: {
            top: '0',
            right: active ? '0' : '-100%'
        },
        bottom: {
            top: active ? '0' : '100%',
            right: '0'
        },
        left: {
            top: '0%',
            right: active ? '0' : '100%'
        }
    };

    return (
        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={(theme) => theme.zIndex.drawer}
            tabIndex={-1}
            sx={{
                ...anchorStyles[anchor],
                transition: '0.3s ease-in-out',
                pointerEvents: 'none'
            }}
        >
            <Box
                position='absolute'
                top={top}
                right={right}
                bottom={bottom}
                left={left}
                width={width}
                height={height}
                sx={{
                    pointerEvents: 'all'
                }}
            >
                {children}
            </Box>
        </Box>
    );
};