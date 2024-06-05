import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function DateDiaryItem() {
    return (
        <Card component={Button} sx={{
            p: 1.5,
            margin: 'auto',
            width: '100%'
        }}>
            <Grid container width='100%'>
                <Grid xs='auto' my='auto' pr={1.3}>
                    <Avatar src=''/>
                </Grid>
                <Grid xs direction='column'>
                    <Typography
                        gutterBottom variant='subtitle1'
                        noWrap
                        textAlign='left'
                        fontStyle='normal'
                    >
                        제목
                    </Typography>
                    <Grid container spacing={.5}>
                        <Grid xs display='flex' alignItems='center'>
                            <LocationOnIcon color='disabled' sx={{fontSize: 15}}/>
                            <Typography variant='caption' color='text.secondary' noWrap>
                                경기도 의정부시 서부로 454
                            </Typography>
                        </Grid>
                        <Grid xs='auto' display='flex'>
                            <Typography variant='caption'>
                                24.03.17
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}