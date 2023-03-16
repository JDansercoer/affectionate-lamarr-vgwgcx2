import { gql } from "./__generated__";

export const GET_ROCKET_INVENTORY = gql(`
  query Club1($clubId: Int!) {
    club(where: { id: $clubId }) {
      colours
      name
    }
  }
`);
