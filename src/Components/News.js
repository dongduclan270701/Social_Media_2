import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
    
} from '@mui/icons-material';
import {  Grid,  Card, CardMedia } from '@mui/material';
import Group_1 from 'Assets/Images/lockscreen-bg.jpg'
import Group_2 from 'Assets/Images/login-bg.jpg'
import Group_3 from 'Assets/Images/Muốn ít đi Để hạnh phúc nhiều hơn.png'
import Group_5 from 'Assets/Images/register-bg.jpg'

const News = () => {
    return (
        <Box >
            <Grid container spacing={1} sx={{margin : "0 auto", width: { xs: "100%",  sm: "62%" }}}>
                <Grid item xs md>
                    <Card sx={{ borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{height: { xs: "110px",  sm: "225px"}}}
                            image={Group_1}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs md>
                    <Card sx={{ borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{height: { xs: "110px",  sm: "225px"}}}
                            image={Group_2}
                            alt="green iguana"
                        />

                    </Card>
                </Grid>
                <Grid item xs md>
                    <Card sx={{ borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{height: { xs: "110px",  sm: "225px"}}}
                            image={Group_3}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs md>
                    <Card sx={{ borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{height: { xs: "110px",  sm: "225px"}}}
                            image={Group_5}
                            alt="green iguana"
                        />
                    </Card>
                </Grid>
                <Grid item xs md>
                    <Card sx={{ borderRadius: "10px" }}>
                        <CardMedia
                            component="img"
                            sx={{height: { xs: "110px",  sm: "225px"}}}
                            image={Group_2}
                            alt="green iguana"
                        />
                    </Card>
                </Grid></Grid>
        </Box>
    );
}

export default News;
