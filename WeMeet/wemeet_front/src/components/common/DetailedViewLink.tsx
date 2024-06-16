import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {Link, SvgIconProps, TypographyVariant} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

interface DetailedViewLinkProps {
    color?: string;
    variant?: TypographyVariant;
    iconSize?: SvgIconProps['fontSize'];
}

export default function DetailedViewLink(
    {
        color = 'primary',
        variant = 'body2',
        iconSize = 'small'
    }: DetailedViewLinkProps
) {
    return (
        <Link
            component={RouterLink}
            to='/'
            display='inline-flex'
            alignItems='center'
            color={color}
            variant={variant}
            fontFamily='NanumGothicBold'
            underline='hover'
            rel='noopener noreferrer'
            sx={{
                '& > svg': {transition: '0.2s'},
                '&:hover > svg': {transform: 'translateX(2px)'},
            }}
        >
            <span>자세히 보기</span>
            <ChevronRightRoundedIcon fontSize={iconSize}/>
        </Link>
    );
}