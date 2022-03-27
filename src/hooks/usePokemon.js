import { useQuery, gql } from "@apollo/client";

const GET_POKEMON = gql`
    query GetPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            moves {
                move {
                    name
                }
            }
            types {
                type {
                    name
                }
            }
            message
            status
        }
    }
`;

export const usePokemon = (name) => {
    const { error, loading, data } = useQuery(GET_POKEMON, {
        variables: {
            name
        }
    });
    return { error, loading, data };
};
