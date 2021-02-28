import React from 'react';
import { Card, CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { useMediaQuery } from 'react-responsive';

export default function CarouselSlide(props) {
    const { name, src } = props.content;

    // const useStyles = makeStyles(() => ({
        
    // }));


    // const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    // const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // const isPortrait = useMediaQuery({ orientation: 'portrait' })
    // const isRetina = useMediaQuery({ minResolution: '2dppx' })

    // console.log(isTabletOrMobile);

    // const classes = useStyles();

    return (
        <Card className='card'>
            <CardActionArea href="https://www.instagram.com/lokip_photography/" target="_blank">
            <CardMedia
                className={`${isTabletOrMobile ? "phoneMedia" : " media"}`}
                image= {src}
                title={name}
            />
            </CardActionArea>
        </Card>
    );
}