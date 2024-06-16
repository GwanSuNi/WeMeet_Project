import {Box, DialogContent, DialogTitle, Fab, Grid, ImageList, ImageListItem, Stack, Typography} from '@mui/material';
import {CustomDrawer, DetailedViewLink} from "@components";
import CreateIcon from '@mui/icons-material/Create';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { useNavigate } from 'react-router-dom';

export default function MarkerDrawer({active}: { active: boolean }) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    const navigate = useNavigate();

    return (
        <CustomDrawer anchor='bottom' active={active} width={'100%'} bottom={0}>
            <Box bgcolor='white'>
                <DialogTitle position='relative'>
                    <Fab
                        variant='extended'
                        size='medium'
                        color='primary'
                        onClick={() => navigate('/diary/write')}
                        sx={{
                            position: 'absolute',
                            bottom: '120%'
                        }}>
                        <CreateIcon sx={{mr: 1}}/>
                        일지 작성
                    </Fab>
                    <Box display='flex' justifyContent='center'>
                        <Typography variant='h6' fontFamily='NanumGothicBold'>
                            석촌호수 데이트
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent dividers>
                    <Stack spacing={1}>
                        <Box display='flex' justifyContent='center' height={150}>
                            <ImageList
                                cols={itemData.length}
                                rowHeight={150}
                                sx={{
                                    flexWrap: 'nowrap',
                                    margin: 0,
                                    '&::-webkit-scrollbar': {
                                        display: 'none'
                                    }
                                }}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} sx={{width: '150px'}}>
                                        <img
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading='lazy'
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                        <Grid container>
                            <Grid item xs display='flex' overflow='hidden' mr={2}>
                                <LocationOnIcon color='disabled' fontSize='small'/>
                                <Typography
                                    variant='body2'
                                    textOverflow='ellipsis'
                                    overflow='hidden'
                                    whiteSpace='nowrap'
                                >
                                    석촌호수
                                </Typography>
                            </Grid>
                            <Grid item xs='auto' display='flex' mr={2}>
                                <FavoriteIcon color='error' fontSize='small'/>
                                <Typography variant='body2'>
                                    132
                                </Typography>
                            </Grid>
                            <Grid item xs='auto' display='flex' mr={2}>
                                <CommentOutlinedIcon fontSize='small'/>
                                <Typography variant='body2'>
                                    10
                                </Typography>
                            </Grid>
                            <Grid item xs='auto' display='flex'>
                                <Typography color='textSecondary'>
                                    2024.03.12
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box
                            overflow='hidden'
                            textOverflow='ellipsis'
                            pt={1}
                            sx={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical'
                            }}
                        >
                            <Typography>
                                🌟 오늘은 석촌호수에서 멋진 데이트를 즐겼어요!
                            </Typography>
                        </Box>
                        <DetailedViewLink variant='body2' color='textSecondary'/>
                    </Stack>
                </DialogContent>
            </Box>
        </CustomDrawer>
    );
};