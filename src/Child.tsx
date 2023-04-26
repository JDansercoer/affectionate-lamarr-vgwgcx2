import "./styles.css";
import { useQuery } from "@apollo/client";
import { FC } from "react";
import { gql } from "./__generated__";

const GET_CLUB = gql(`
  query Club1($clubId: Int!) {
    club(where: { id: $clubId }) {
      colours
      name
    }
  }
`);

export const Child: FC = () => {
  // our query's result, data, is typed, but only when installed with yarn!
  const { loading, data } = useQuery(GET_CLUB, {
    variables: { clubId: 85 },
  });

  if (data) {
    console.log(data.club?.colours);
    console.log(data.club?.name);
  }

  return <div>hi</div>;
};
