import { CodegenConfig } from "@graphql-codegen/cli";

export const APOLLO_SERVER_URL = "https://swapi-graphql.eskerda.vercel.app/";
const config: CodegenConfig = {
  schema: "https://dev-541cf5be7e39601f.api.footium.club/api/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
