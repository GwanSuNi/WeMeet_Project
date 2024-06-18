import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export interface PostSummaryDto {
    // 얼굴사진 링크
    imgPath: string;
    // 제목
    title: string;
    // ex) 1시간전, 몇시간전, 하루전 ..
    stateTime: string;
    // 위치 정보
    positionInfo: string;
}

interface DateDiaryItemProps {
    post: PostSummaryDto;
}

export default function DateDiaryItem({ post }: DateDiaryItemProps) {
    return (
        <Card component={Button} sx={{
            p: 1.5,
            margin: 'auto',
            width: '100%'
        }}>
            <Grid container width='100%'>
                <Grid xs='auto' my='auto' pr={1.3}>
                    <Avatar src={post.imgPath}/>
                </Grid>
                <Grid xs direction='column'>
                    <Typography
                        gutterBottom variant='subtitle1'
                        noWrap
                        textAlign='left'
                        fontStyle='normal'
                    >
                        {post.title}
                    </Typography>
                    <Grid container spacing={.5}>
                        <Grid xs display='flex' alignItems='center' spacing={2}>
                            <LocationOnIcon color='disabled' sx={{fontSize: 15}}/>
                            <Typography variant='caption' color='text.secondary' noWrap>
                                {post.positionInfo}
                            </Typography>
                            <Typography mx={2} variant='caption' color='text.secondary' noWrap>
                                {post.stateTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}
