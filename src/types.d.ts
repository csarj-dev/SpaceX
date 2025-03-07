export interface LaunchDetailsProps {
    launchDetails: LaunchDetails;
    setLaunchDetails: (launchDetails: LaunchDetails | null) => void;
};

export interface LaunchDetails {
    details: string;
    id: string;
    launch_success: boolean;
    launch_year: string;
    mission_name: string;
    rocket: Rocket;
}

export interface Rocket {
    rocket: RocketDetails;
}

export interface RocketDetails {
    company: string;
    engines: Engine;
    id: string;
    wikipedia: string;
}

export interface Engine {
    type: string;
}