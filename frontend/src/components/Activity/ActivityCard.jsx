import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const ActivityCard = (activity) => {
    return (
        <Card sx={{ maxWidth: 300, borderRadius: 3}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    objectFit = "center"
                    image={activity.activity.employeesImageURL}
                    alt="Image Unavailable"
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {activity.activity.claimDate}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'black' }}>
                        {activity.activity.courtFees}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}

export default ActivityCard
