import React, { useState } from 'react';
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";
import {
    Box, Card, CardHeader, IconButton, CardMedia, CardContent, Typography,
    CardActions, Avatar, Checkbox
} from "@mui/material";
import Feed_1 from "Assets/Images/register-bg.jpg"
const Post = (props) => {
    const { feed } = props
    const [like, setLike] = useState(feed.like)
    const [changeLike, setChangeLike] = useState(false)
    const ChangeLike = () => {
        setChangeLike(!changeLike)
        if (!changeLike) {
            setLike(feed.like + 1)
        } else {
            setLike(feed.like)
        }
    }
    return (
        <Card sx={{ margin: "0 auto", width: { xs: "100%", sm: "62%" }, borderRadius: "10px" }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={feed.title}
                subheader={feed.time}
            />
            {feed.image.length > 0 && <CardMedia
                component="img"
                height="300px"
                image={feed.image[0]}
                alt="Paella dish"
            />}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {feed.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox icon={<FavoriteBorder />} onClick={ChangeLike} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                <span style={{ fontSize: "16px", marginRight: "10px" }}>{like}</span>
                <IconButton aria-label="share">
                    <Share />
                    <span style={{ fontSize: "16px", marginLeft: "5px", marginRight: "10px" }}>{feed.share}</span>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;
