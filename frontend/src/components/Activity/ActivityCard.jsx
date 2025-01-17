import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PoolIcon from '@mui/icons-material/Pool';
import SportsIcon from '@mui/icons-material/Sports';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import "./ActivityCard.css";



const ActivityCard = (activity) => {
    let ActivityIcon = <SportsIcon />;
    if (activity.activity.sportsActivity === "Cricket Box" || activity.activity.sportsActivity === "Cricket") {
        ActivityIcon = <SportsCricketIcon />
    }
    else if (activity.activity.sportsActivity === "Badminton" || activity.activity.sportsActivity === "Tennis" || activity.activity.sportsActivity === "Table Tennis") {
        ActivityIcon = <SportsTennisIcon />
    }
    else if (activity.activity.sportsActivity === "Basketball") {
        ActivityIcon = <SportsBasketballIcon />
    }
    else if (activity.activity.sportsActivity === "Volleyball") {
        ActivityIcon = <SportsVolleyballIcon />
    }
    else if (activity.activity.sportsActivity === "Football") {
        ActivityIcon = <SportsSoccerIcon />
    }
    else if (activity.activity.sportsActivity === "Swimming") {
        ActivityIcon = <PoolIcon />
    }
    else {
        ActivityIcon = <SportsIcon />
    };

    return (
        <Card variant="outlined" sx={{
            maxWidth: 270, boxShadow: 5, borderRadius: 3, margin: 0.01
        }}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="160"
                    width="260"
                    image={activity.activity.employeesImageURL}
                    alt="Image Unavailable"
                />
                <CardContent>
                    <Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }}>
                        {activity.activity.bookedBy}
                    </Typography>
                    <Stack direction="row" display="flex" justifyContent="center" alignItems="center" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
                        <div>{ActivityIcon}</div>
                        <div>{new Date(activity.activity.activityDate).toDateString()}</div>
                        <div>{activity.activity.courtFees}/-</div>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ActivityCard
