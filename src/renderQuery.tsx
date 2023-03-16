import "./styles.css";
import { GET_ROCKET_INVENTORY } from "./queryOne";
import { useQuery } from "@apollo/client";
import { FC } from "react";

export const RenderFilm: FC = () => {
  const filmId = "ZmlsbXM6MQ==";
  // our query's result, data, is typed!
  const { loading, data } = useQuery(
    GET_ROCKET_INVENTORY,
    // I expect a compile error for the `another` argument, seeing as the generated type is
    // const GET_ROCKET_INVENTORY: TypedDocumentNode<FilmByIdQuery, Exact<{
    //     id: string;
    // }>>
    { variables: { clubId: 85 } }
  );

  if (data) {
    console.log(data.club?.colours);
    console.log(data.club?.name);
  }

  return <div>{loading ? <p>Loading ...</p> : <p>Film:</p>}</div>;
};
