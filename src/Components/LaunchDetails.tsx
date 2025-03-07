import React from "react";
import { LaunchDetailsProps } from "../types";




const LaunchDetails = (props: LaunchDetailsProps) : React.JSX.Element => {
    const {
        launchDetails,
        setLaunchDetails
    } = props;

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>{launchDetails.mission_name}</h2>
            <p>{launchDetails.launch_year}</p>
            <p>{launchDetails.details}</p>
            <p>{launchDetails.rocket.rocket.company}</p>
            <p>{launchDetails.rocket.rocket.engines.type}</p>
            <a href={launchDetails.rocket.rocket.wikipedia} target="_blank" >More Details</a>
            <button onClick={()=>setLaunchDetails(null)}>Close</button>
        </div>
    )
}

export default LaunchDetails;