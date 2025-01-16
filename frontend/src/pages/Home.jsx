import React, { useEffect } from 'react'
import { useActivityCollection } from '../collections/activity';

const Home = () => {
    const { getActivitys, activitys } = useActivityCollection();
    useEffect(() => {
        getActivitys();
    }, [getActivitys]);
    console.log("Activitys: ", activitys)
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
