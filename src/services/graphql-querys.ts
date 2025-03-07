import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 5) {
        id
        launch_date_local
        launch_success
        launch_year
        mission_name
    }
  }
`;

export const LAUNCHES_QUERY = gql`
    query LaunchDetails($launchId: ID!) {
        launch(id: $launchId) {
        details
        id
        launch_success
        launch_year
        mission_name
        rocket {
            rocket {
                company
                engines {
                    type
                }
                id
                wikipedia
            }
        }
        }
    }
`;