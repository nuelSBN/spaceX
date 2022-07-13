import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int) {
    ships(limit: $limit) {
      id
      image
      name
      weight_kg
      successful_landings
      year_built
      model
      speed_kn
      status
      type
      url
      course_deg
      mmsi
    }
  }
`;
