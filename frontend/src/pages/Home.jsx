import React, { useEffect } from 'react'
import { useActivityCollection } from '../collections/activity';
import { Grid2 } from '@mui/material';
import ActivityCard from '../components/Activity/ActivityCard';



const Home = () => {
    const { getActivitys, activitys } = useActivityCollection();
    useEffect(() => {
        getActivitys();
    }, [getActivitys]);
    console.log("Activitys: ", activitys)
    return (
        <div>
            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {activitys.map((item) =>
                    <ActivityCard key={item._id} activity={item} />
                )}
            </Grid2>
        </div>
    )
}

export default Home
