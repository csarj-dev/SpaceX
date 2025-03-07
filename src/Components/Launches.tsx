import { useEffect, useState } from "react";
import { GET_LAUNCHES, LAUNCHES_QUERY } from "../services/graphql-querys";
import { useLazyQuery, useQuery } from "@apollo/client";

import { LaunchDetails as LaunchDetailsType } from "../types";

import LaunchDetails from "./LaunchDetails";

interface Launch {
    id: string;
    launch_date_local: string;
    launch_success: boolean;
    launch_year: string;
    mission_name: string;
}

const Launches = () : React.JSX.Element => {
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    const [getLaunchDetails, {loading: loadingDetails, error: errorDetails, data: dataDetails}] = useLazyQuery(LAUNCHES_QUERY);
    const [launchDetails, setLaunchDetails] = useState<LaunchDetailsType | null>(null);

    useEffect(() => {
        if (dataDetails?.launch) {
            setLaunchDetails(dataDetails.launch);
        }
    }, [dataDetails]);

    const showLaunchDetails = async (launchId: string) => {
        await getLaunchDetails({variables: {launchId: launchId}});
        setLaunchDetails(dataDetails.launch);
    }

    if (error) return <p>Error :</p>;

    return (
        <>
            <h1>SpaceX last launches</h1>
            {(loading || loadingDetails) 
                ? <p>Loading...</p>
                : (
                    <div>
                        {
                            (launchDetails)
                                ? <LaunchDetails launchDetails={dataDetails.launch} setLaunchDetails={setLaunchDetails} />
                                : (
                                    data.launchesPast.map((launch: Launch) => (
                                        <>
                                            <div key={launch.id}>
                                                <h2>{launch.mission_name}</h2>
                                                <p>{launch.launch_date_local}</p>
                                            </div>
                                            <button onClick={()=>showLaunchDetails(launch.id)}>Details</button>
                                        </>
                                    ))
                                )
                        }
                    </div>
                )}
        </>  
    );
};

export default Launches;
