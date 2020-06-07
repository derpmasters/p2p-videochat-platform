import React, {useEffect, useRef} from 'react';
import {Box, Card, CircularProgress, makeStyles} from "@material-ui/core";
import {setVideoSrc} from "../../../utils";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    cardWrapper: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'column nowrap',
        marginBottom: '5px',
        width: '100%',
        height: '130px',
    },
    media: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    displayName: {
        color: 'white',
        opacity: '0.8',
        position: 'absolute',
        bottom: '5px',
        left: '5px',
        fontSize: '0.9rem',
        userSelect: 'none'
    }
}));

const GenericMediaCard = ({stream, muted = false, user}) => {
    const classes = useStyles();
    const videoRef = useRef(null);
    const {nickname} = user;

    useEffect(() => {
        setVideoSrc(videoRef, stream, muted);
    }, [stream]);

    return (
        <Card className={classes.cardWrapper}>
            {stream
                ? <video ref={videoRef} className={classes.media} />
                : <CircularProgress color="inherit" />
            }
            <Box className={classes.displayName}>{nickname}</Box>
        </Card>
    );
};

export default GenericMediaCard;