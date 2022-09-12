import React, { useState, useEffect } from 'react';
import {
    Box
} from "@mui/material";
import Post from './Post';
import News from './News';
import Group_1 from 'Assets/Images/lockscreen-bg.jpg'
import Group_2 from 'Assets/Images/login-bg.jpg'
import Group_3 from 'Assets/Images/Muốn ít đi Để hạnh phúc nhiều hơn.png'
import Group_4 from 'Assets/Images/Nothing is impossible Nothing is forever (2).png'
import Group_5 from 'Assets/Images/register-bg.jpg'
const Feed = ( props ) => {
    const {post} = props
    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        setFeeds([
            {
                id: 0,
                title:"User 1",
                time:"23/5/2022 16:30:45",
                userId:1,
                image:[Group_1],
                content:"Post 0",
                like:1,
                share:32,
            },
            {
                id: 1,
                title:"User 2",
                time:"23/5/2022 15:30:45",
                userId:2,
                image:[Group_2],
                content:"Post 1",
                like:2,
                share:3,
            }
            ,
            {
                id: 2,
                title:"User 3",
                time:"23/5/2022 12:30:45",
                userId:3,
                image:[Group_3],
                content:"Post 2",
                like:3,
                share:5,
            }
            ,
            {
                id: 3,
                title:"User 4",
                time:"23/5/2022 4:30:45",
                userId:4,
                image:[Group_4],
                content:"Post 3",
                like:4,
                share:35,
            }
            ,
            {
                id: 4,
                title:"User 1",
                time:"22/5/2022 16:30:45",
                userId:5,
                image:[Group_5],
                content:"Post 4",
                like:5,
                share:332,
            }
        ])
    }, []);
    useEffect(() => {
        if (post !== undefined) {
            setFeeds([...feeds,post])
        }
    }, [post]);
    return (
        <Box flex={4} p={2}>
            <News /><br />
            {feeds.map((feed, index) => {
                return (<React.Fragment key={index}><Post feed={feed} /><br /></React.Fragment>)
            })}
        </Box>
    );
}

export default Feed;
